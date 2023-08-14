import {useContext} from 'react';
import { BiBed, BiBath, BiArea } from "react-icons/bi";
import { DarkModeContext } from "./DarkModeContext";
const House = ({ house }) => {
  const { image, type, country, address, bedrooms, bathrooms, surface, price } =
  house;
  const { isDarkMode } = useContext(DarkModeContext);
  return (
    <div className={`shadow-1 p-5 rounded-[25px] w-full max-w-[352px] mx-auto cursor-pointer hover:shadow-2xl transition ${
        isDarkMode ? "bg-white-800 text-black-700" :  "bg-gray-800 text-white"
      } `}>
      <img className="mb-8" src={image} alt="" />
      <div className="mb-4 flex gap-x-2 text-sm">
        <div className="bg-green-500 rounded-full text-white px-3">{type}</div>
        <div className="bg-violet-500 rounded-full text-white px-3">
          {country}
        </div>
      </div>
      <div className="text-lg font-semibold max-w-[260px]">{address}</div>
      <div className="flex gap-x-4 my-4">
        <div className="flex items-center text-gray-600 gap-1">
          <div className="text-[20px]">
            <BiBed />
          </div>
          <div>{bedrooms}</div>
        </div>
        <div className="flex items-center text-gray-600 gap-1">
          <div className="text-[20px]">
            <BiBath />
          </div>
          <div>{bathrooms}</div>
        </div>
        <div className="flex items-center text-gray-600 gap-1"></div>
        <div className="text-[20px]">
          <BiArea />
        </div>
        <div>{surface}</div>
      </div>
      <div className="text-lg font-semibold text-violet-600 mb-4">${price}</div>
    </div>
  );
};

export default House;
