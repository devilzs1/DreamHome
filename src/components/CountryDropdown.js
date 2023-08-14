import {useState,useContext} from 'react';
import {RiMapPinLine, RiArrowDownSLine, RiArrowUpSLine} from 'react-icons/ri';
import {Menu} from '@headlessui/react';
import { DarkModeContext } from "./DarkModeContext";
import {HouseContext} from './HouseContext';

const CountryDropdown = () => {
  const { isDarkMode } = useContext(DarkModeContext);
  const {country, setCountry, countries} = useContext(HouseContext);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Menu as="div" className="dropdown relative">
      <Menu.Button
        onClick={() => setIsOpen(!isOpen)}
        className="dropdown-btn w-full text-left"
      >
        <RiMapPinLine className="dropdown-icon-primary" />
        <div>
          <div className="text-[15px] font-medium leading-light">{country}</div>
          <div className="text-[13px]">Select your location</div>
        </div>
        {isOpen ? (
          <RiArrowUpSLine className="dropdown-icon-secondary" />
        ) : (
          <RiArrowDownSLine className="dropdown-icon-secondary" />
        )}
      </Menu.Button>

      <Menu.Items
        className={`dropdown-menu ${
          isDarkMode ? "bg-white text-black-700" : "bg-gray-800 text-white"
        }`}
      >
        {countries.map((country, index) => {
          return (
            <Menu.Item
              onClick={() => {
                setCountry(country);
              }}
              className="cursor-pointer hover:text-violet-700 hover:ml-1 transition"
              as="li"
              key={index}
            >
              {country}
            </Menu.Item>
          );
        })}
      </Menu.Items>
    </Menu>
  );
};

export default CountryDropdown;
