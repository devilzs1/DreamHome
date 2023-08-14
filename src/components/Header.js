import { useContext } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/img/logo.png";
import { MdLightMode, MdDarkMode } from "react-icons/md";
import { DarkModeContext } from "./DarkModeContext";

const Header = () => {
  const { isDarkMode, setIsDarkMode } = useContext(DarkModeContext);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <header className="py-6 mb-12 border-b p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/">
          <img src={Logo} alt="" className="w-142 h-8" />
        </Link>
        <div className="flex items-center gap-6">
          <button
            className={`px-4 py-1 rounded-md ${
              isDarkMode ? "bg-gray-900 text-white" : "bg-white text-black"
            }`}
            onClick={toggleDarkMode}
          >
            {isDarkMode ? <MdLightMode /> : <MdDarkMode />}
          </button>
          <Link
            to=""
            className="hover:text-violet-900 hover:bg-gray-200 hover:rounded-lg hover:py-1 hover:px-0.5 transition"
          >
            About Us
          </Link>
          <Link
            to=""
            className="hover:text-violet-900 hover:bg-gray-200 hover:rounded-lg hover:py-1 hover:px-0.5 transition"
          >
            Services
          </Link>
          <Link
            to=""
            className="hover:text-violet-900 hover:bg-gray-200 hover:rounded-lg hover:py-1 hover:px-0.5 transition"
          >
            Events
          </Link>
          <Link
            to=""
            className="hover:text-violet-900 hover:bg-gray-200 hover:rounded-lg hover:py-1 hover:px-0.5 transition"
          >
            Log in
          </Link>
          <Link
            to=""
            className="bg-violet-700 hover:bg-violet-800 text-white px-4 py-2 rounded-lg transition"
          >
            Sign up
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
