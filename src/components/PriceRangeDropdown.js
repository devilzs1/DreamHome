import { useState, useContext } from "react";
import { RiWallet3Line, RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";
import { Menu } from "@headlessui/react";
import { DarkModeContext } from "./DarkModeContext";
import { HouseContext } from "./HouseContext";

const PriceRangeDropdown = () => {
  const { isDarkMode } = useContext(DarkModeContext);
  const { price, setPrice} = useContext(HouseContext);
  const [isOpen, setIsOpen] = useState(false);

  const prices = [
    {
      value:'Price Range (any)'
    },
    {
      value:'10000 - 30000'
    },
    {
      value: '30000 - 100000'
    },
    {
      value: '100000 - 1300000'
    },
    {
      value:'130000 - 160000'
    },
    {
      value: '190000 - 220000'
    }
  ]
  return (
    <Menu as="div" className="dropdown relative">
      <Menu.Button
        onClick={() => setIsOpen(!isOpen)}
        className="dropdown-btn w-full text-left"
      >
        <RiWallet3Line className="dropdown-icon-primary" />
        <div>
          <div className="text-[15px] font-medium leading-light">{price}</div>
          <div className="text-[13px]">Choose Price Range</div>
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
        {prices.map((price, index) => {
          return (
            <Menu.Item
              onClick={() => {
                setPrice(price.value);
              }}
              className="cursor-pointer hover:text-violet-700 hover:ml-1 transition"
              as="li"
              key={index}
            >
              {price.value}
            </Menu.Item>
          );
        })}
      </Menu.Items>
    </Menu>
  );
};

export default PriceRangeDropdown;
