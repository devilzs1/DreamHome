import {useState, useEffect, createContext} from 'react';
import {housesData} from '../data';


export const HouseContext = createContext();

const HouseContextProvider = ({children})=>{
  const [houses, setHouses] = useState(housesData);
  const [country, setCountry] = useState('Location (any)');
  const [countries, setCountries] = useState([]);
  const [property, setProperty] = useState('Property type (any)');
  const [properties, setProperties] = useState([]);
  const [price, setPrice] = useState('Price range (any)');
  const [loading, setLoading] = useState(false);


  useEffect(()=>{
    const allCountries = houses.map((houses)=>{
      return houses.country;
    });
    const uniqueCountries = ['Location (any)',...new Set(allCountries)];

    setCountries(uniqueCountries);
  },[]);
  useEffect(()=>{
    const allProperties = houses.map((houses)=>{
      return houses.type;
    });
    const uniqueProperties = ['Property Type (any)',...new Set(allProperties)];

    setProperties(uniqueProperties);
  },[]);

  const handleClick = ()=>{
  
    setLoading(true);

    const isDefault = (str)=>{
      return str.split(' ').includes('(any)');
    }
    const minPrice = parseInt(price.split(' ')[0]);
    const maxPrice = parseInt(price.split(' ')[2]);

    const newHouses = housesData.filter((house)=>{
      const housePrice = parseInt(house.price);
      if(
        house.country===country && house.type === property && housePrice>=minPrice && housePrice <=maxPrice
      ){
        return house;
      }
      const checkCountry = isDefault(country);
      const checkProperty = isDefault(property);
      const checkPrice = isDefault(price);

      if(checkCountry && checkProperty && checkPrice){
        return house;
      }
      if(!checkCountry && checkProperty && checkPrice){
        return house.country===country;
      }
      if(checkCountry && !checkProperty && checkPrice){
        return house.type===property;
      }
      if(checkCountry && checkProperty && !checkPrice){
        if(housePrice >=minPrice && housePrice <=maxPrice)
        return house;
      }

      if(!checkCountry && !checkProperty && checkPrice){
        return house.country===country && house.type===property;
      }

      if(!checkCountry && checkProperty && !checkPrice){
        if (housePrice >= minPrice && housePrice <= maxPrice){
          return house.country===country;
        }
      }

      if(checkCountry && !checkProperty && !checkPrice){
        if (housePrice >= minPrice && housePrice <= maxPrice) {
          return house.type === property;
        }
      }
    });

    setTimeout(()=>{
      return newHouses.length < 1 ? setHouses([]) : setHouses(newHouses), setLoading(false);
    },1000);
  };

  return <HouseContext.Provider value={{
    country,
    setCountry,
    countries,
    property,
    setProperty,
    properties,
    price,
    setPrice,
    houses,
    loading,
    handleClick,
  }}>
    {children}
  </HouseContext.Provider>
}
export default HouseContextProvider;
