import React from "react";
import { MenuIcon } from "@heroicons/react/outline";

const Header = () => {
  return (
    <header className="bg-blue-900 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-4xl font-bold">LOGO</h1>
        <MenuIcon className="w-6 h-6" />
      </div>
    </header>
  );
};

export default Header;
