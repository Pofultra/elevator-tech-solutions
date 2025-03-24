import React from "react";
import { useLanguage } from "../context/LanguageContext";

function LanguageSelector() {
  const { language, changeLanguage } = useLanguage();

  return (
    <select
      value={language}
      onChange={(e) => changeLanguage(e.target.value)}
      className="bg-gray-800 text-yellow-500 px-2 py-1 rounded-md border border-yellow-500 text-sm"
      aria-label="Select Language"
    >
      <option value="es">ES</option>
      <option value="en">EN</option>
    </select>
  );
}

export default LanguageSelector;