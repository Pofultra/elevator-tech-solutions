import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import LanguageSelector from "./LanguageSelector";
import logo from "/images/logo.png";

const Navbar = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const { language } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { name: language === "en" ? "Home" : "Inicio", path: "/" },
    { name: language === "en" ? "About" : "Sobre Nosotros", path: "/about" },
    { name: language === "en" ? "Services" : "Servicios", path: "/services" },
    { name: language === "en" ? "Projects" : "Proyectos", path: "/projects" },
    { name: language === "en" ? "Brands" : "Marcas", path: "/brands" },
    { name: language === "en" ? "Testimonials" : "Testimonios", path: "/testimonials" },
    { name: language === "en" ? "Contact" : "Contacto", path: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full p-4 flex justify-between items-center z-50 transition-all duration-300 ${
        isHome ? "bg-transparent" : "bg-gray-800 text-white shadow-md"
      }`}
    >
      <Link to="/">
        <img src={logo} alt="Elevator Tech Solutions Logo" className="h-10" />
      </Link>
      
      {/* Desktop Menu */}
      <div className="hidden md:flex items-center space-x-6">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`font-sf text-sm ${
              isHome ? "text-white hover:text-blue-300" : "text-white hover:text-blue-300"
            } ${location.pathname === item.path ? "font-bold" : ""}`}
          >
            {item.name}
          </Link>
        ))}
        <LanguageSelector />
      </div>
      
      {/* Mobile Menu Button */}
      <button
        className="text-2xl md:hidden text-white"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <i className={`ri-${isMenuOpen ? "close" : "menu"}-line`}></i>
      </button>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-gray-800 text-white py-4 md:hidden shadow-lg">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`block py-2 px-4 text-sm hover:bg-gray-700 ${
                location.pathname === item.path ? "font-bold bg-gray-700" : ""
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <div className="px-4 py-2">
            <LanguageSelector />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;