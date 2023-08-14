import CountryDropdown from "./CountryDropdown";
import PropertyDropdown from "./PropertyDropdown";
import PriceRangeDropdown from "./PriceRangeDropdown";
import { RiSearch2Line } from "react-icons/ri";
import { useContext } from "react";
import { HouseContext } from "./HouseContext";
import { DarkModeContext } from "./DarkModeContext";

const Search = () => {
  const { isDarkMode } = useContext(DarkModeContext);
  const { handleClick } = useContext(HouseContext);
  return (
    <div className={`px-[30px] py-6 mt-4 max-w-[1260px] mx-auto flex flex-col lg:flex-row justify-between gap-4 lg:gap-x-3 lg:shadow-1 lg:bg-tranparent rounded-lg ${
        isDarkMode ? "bg-white-800 text-black-700" :  "bg-gray-800 text-white"
      } `}>
      <CountryDropdown />
      <PropertyDropdown />
      <PriceRangeDropdown />
      <button
        onClick={() => handleClick()}
        className="bg-violet-700 hover:bg-violet-800 transition w-full lg:max-w-[162px] h-16 rounded-lg flex justify-center items-center text-white text-lg"
      >
        <RiSearch2Line />
      </button>
    </div>
  );
};

export default Search;
