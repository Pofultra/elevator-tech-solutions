import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import logo from "/images/logo.png";
import LanguageSelector from "./LanguageSelector";

const Navbar = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const [menuOpen, setMenuOpen] = useState(false);
  const { t } = useTranslation();

  return (
    <nav
      className={`fixed top-0 left-0 w-full p-4 flex justify-between items-center z-50 transition-all duration-300 ${
        isHome ? "bg-transparent" : "bg-gray-800 text-white shadow-md"
      }`}
    >
      <Link to="/">
        <img src={logo} alt="Logo" className="h-10" />
      </Link>
      
      <div className="flex items-center space-x-4">
        <LanguageSelector />
        <button 
          className="text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <i className={menuOpen ? "ri-close-line" : "ri-menu-line"}></i>
        </button>
      </div>
      
      {/* Menú desplegable */}
      {menuOpen && (
        <div className="absolute top-full right-0 bg-gray-800 text-white p-4 w-48 rounded-md shadow-lg">
          <ul className="space-y-2">
            <li>
              <Link 
                to="/" 
                className="block hover:text-yellow-500 transition"
                onClick={() => setMenuOpen(false)}
              >
                {t('navbar.home')}
              </Link>
            </li>
            <li>
              <Link 
                to="/about" 
                className="block hover:text-yellow-500 transition"
                onClick={() => setMenuOpen(false)}
              >
                {t('navbar.about')}
              </Link>
            </li>
            <li>
              <Link 
                to="/services" 
                className="block hover:text-yellow-500 transition"
                onClick={() => setMenuOpen(false)}
              >
                {t('navbar.services')}
              </Link>
            </li>
            <li>
              <Link 
                to="/projects" 
                className="block hover:text-yellow-500 transition"
                onClick={() => setMenuOpen(false)}
              >
                {t('navbar.projects')}
              </Link>
            </li>
            <li>
              <Link 
                to="/brands" 
                className="block hover:text-yellow-500 transition"
                onClick={() => setMenuOpen(false)}
              >
                {t('navbar.brands')}
              </Link>
            </li>
            <li>
              <Link 
                to="/testimonials" 
                className="block hover:text-yellow-500 transition"
                onClick={() => setMenuOpen(false)}
              >
                {t('navbar.testimonials')}
              </Link>
            </li>
            <li>
              <Link 
                to="/contact" 
                className="block hover:text-yellow-500 transition"
                onClick={() => setMenuOpen(false)}
              >
                {t('navbar.contact')}
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;