import { useState, useContext } from "react";
import { RiHomeLine, RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";
import { Menu } from "@headlessui/react";
import { DarkModeContext } from "./DarkModeContext";
import { HouseContext } from "./HouseContext";

const PropertyDropdown = () => {
  const { isDarkMode } = useContext(DarkModeContext);
  const { property, setProperty, properties } = useContext(HouseContext);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Menu as="div" className="dropdown relative">
      <Menu.Button
        onClick={() => setIsOpen(!isOpen)}
        className="dropdown-btn w-full text-left"
      >
        <RiHomeLine className="dropdown-icon-primary" />
        <div>
          <div className="text-[15px] font-medium leading-light">
            {property}
          </div>
          <div className="text-[13px]">Select type</div>
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
        {properties.map((property, index) => {
          return (
            <Menu.Item
              onClick={() => {
                setProperty(property);
              }}
              className="cursor-pointer hover:text-violet-700 hover:ml-1 transition"
              as="li"
              key={index}
            >
              {property}
            </Menu.Item>
          );
        })}
      </Menu.Items>
    </Menu>
  );
};

export default PropertyDropdown;
