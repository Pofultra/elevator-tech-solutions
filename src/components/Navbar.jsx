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
    <nav className="fixed top-0 left-0 w-full py-2 px-4 flex justify-between items-center z-50 transition-all duration-300 bg-gray-800 text-white shadow-md">
      {/* Logo */}
      <Link to="/">
        <div
          className={`flex items-center justify-center rounded-full transition-all duration-300 ${
            isHome && !isScrolledPastHome ? "bg-black p-1" : "bg-gray-800 p-1"
          }`}
        >
          <img src={logo} alt="Logo" className="h-8 w-8 object-cover" />
        </div>
      </Link>

      {/* Selector de idioma y botón hamburguesa */}
      <div className="flex items-center space-x-3">
        <LanguageSelector />
        <button
          className="flex items-center justify-center text-xl transition-all duration-300 text-white hover:text-yellow-500"
          onClick={() => {
            const newState = !menuOpen;
            console.log("Estado del menú cambiando a:", newState);
            setMenuOpen(newState);
          }}
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
        >
          {menuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Menú desplegable que solo aparece cuando menuOpen es true */}
      {menuOpen && (
        <div className="absolute top-full right-0 bg-gray-800 text-white p-3 w-44 rounded-md shadow-lg mt-1 z-50">
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