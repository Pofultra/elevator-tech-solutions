import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import logo from "/images/logot.png";
import LanguageSelector from "./LanguageSelector";

const Navbar = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolledPastHome, setIsScrolledPastHome] = useState(false); // Estado para detectar si se ha pasado la sección home
  const { t } = useTranslation();

  // Detectar scroll y verificar si se ha pasado la sección home
  useEffect(() => {
    const handleScroll = () => {
      if (isHome) {
        const homeSection = document.getElementById("home");
        if (homeSection) {
          const homeSectionHeight = homeSection.offsetHeight; // Altura de la sección home
          setIsScrolledPastHome(window.scrollY > homeSectionHeight);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHome]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full p-4 flex justify-between items-center z-50 transition-all duration-300 ${
        isHome && !isScrolledPastHome ? "bg-transparent" : "bg-gray-800 text-white shadow-md"
      }`}
    >
      {/* Logo */}
      <Link to="/">
        <div
          className={`flex items-center justify-center rounded-full transition-all duration-300 ${
            isHome && !isScrolledPastHome ? "bg-black p-2" : "bg-gray-800 p-2"
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
      <div className="flex items-center space-x-4">
        <LanguageSelector />
        <button
          className={`text-2xl transition-all duration-300 text-white`}
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
                {t("navbar.home")}
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="block hover:text-yellow-500 transition"
                onClick={() => setMenuOpen(false)}
              >
                {t("navbar.about")}
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className="block hover:text-yellow-500 transition"
                onClick={() => setMenuOpen(false)}
              >
                {t("navbar.services")}
              </Link>
            </li>
            
            <li>
              <Link
                to="/brands"
                className="block hover:text-yellow-500 transition"
                onClick={() => setMenuOpen(false)}
              >
                {t("navbar.brands")}
              </Link>
            </li>
            <li>
              <Link
                to="/testimonials"
                className="block hover:text-yellow-500 transition"
                onClick={() => setMenuOpen(false)}
              >
                {t("navbar.testimonials")}
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="block hover:text-yellow-500 transition"
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