import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import logo from "/images/logot.png";
import LanguageSelector from "./LanguageSelector";

const Navbar = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolledPastHome, setIsScrolledPastHome] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      if (isHome) {
        const homeSection = document.getElementById("home");
        if (homeSection) {
          const homeSectionHeight = homeSection.offsetHeight;
          setIsScrolledPastHome(window.scrollY > homeSectionHeight);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHome]);

  return (
    <nav
      className='fixed top-0 left-0 w-full py-2 px-4 flex justify-between items-center z-50 transition-all duration-300 bg-gray-800 text-white shadow-md'
      
    >
      {/* Logo */}
      <Link to="/">
        <div
          className={`flex items-center justify-center rounded-full transition-all duration-300 ${
            isHome && !isScrolledPastHome ? "bg-black p-1" : "bg-gray-800 p-1"
          }`}
        >
          <img
            src={logo}
            alt="Logo"
            className="h-8 w-8 object-cover"
          />
        </div>
      </Link>

      {/* Botón de menú y selector de idioma */}
      <div className="flex items-center space-x-3">
        <LanguageSelector />
        <button
          className="text-xl transition-all duration-300 text-white"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          <i className={menuOpen ? "ri-close-line" : "ri-menu-line"}></i>
        </button>
      </div>

      {/* Menú desplegable */}
      {menuOpen && (
        <div className="absolute top-full right-0 bg-gray-800 text-white p-3 w-44 rounded-md shadow-lg mt-1">
          <ul className="space-y-1">
            <li>
              <Link
                to="/"
                className="block py-1 hover:text-yellow-500 transition"
                onClick={() => setMenuOpen(false)}
              >
                {t("navbar.home")}
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="block py-1 hover:text-yellow-500 transition"
                onClick={() => setMenuOpen(false)}
              >
                {t("navbar.about")}
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className="block py-1 hover:text-yellow-500 transition"
                onClick={() => setMenuOpen(false)}
              >
                {t("navbar.services")}
              </Link>
            </li>
            <li>
              <Link
                to="/brands"
                className="block py-1 hover:text-yellow-500 transition"
                onClick={() => setMenuOpen(false)}
              >
                {t("navbar.brands")}
              </Link>
            </li>
            <li>
              <Link
                to="/testimonials"
                className="block py-1 hover:text-yellow-500 transition"
                onClick={() => setMenuOpen(false)}
              >
                {t("navbar.testimonials")}
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="block py-1 hover:text-yellow-500 transition"
                onClick={() => setMenuOpen(false)}
              >
                {t("navbar.contact")}
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;