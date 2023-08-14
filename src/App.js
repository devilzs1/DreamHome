import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import PropertyDetails from "./pages/PropertyDetails";
import { useContext } from "react";
import { DarkModeContext } from "./components/DarkModeContext";

const App = () => {
  const { isDarkMode } = useContext(DarkModeContext);
  
  return (
    <div
      className={` ${
        isDarkMode ? "bg-white text-black-700" :  "bg-gray-900 text-white"
      }`}
    >
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/property/:id" element={<PropertyDetails />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
