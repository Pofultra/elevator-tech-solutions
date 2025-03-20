import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "/images/logo.png";

const Navbar = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <nav
      className={`fixed top-0 left-0 w-full p-4 flex justify-between items-center z-50 transition-all duration-300 ${isHome ? "bg-transparent" : "bg-gray-800 text-white shadow-md"}`}
    >
      <img src={logo} alt="Logo" className="h-10" />
      <button className="text-2xl">
        <i className="ri-menu-line"></i>
      </button>
    </nav>
  );
};

export default Navbar;