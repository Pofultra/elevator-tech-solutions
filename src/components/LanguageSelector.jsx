import React from "react";
import { useLanguage } from "../context/LanguageContext";

function LanguageSelector() {
  const { language, changeLanguage } = useLanguage();

  return (
    <select
      value={language}
      onChange={(e) => changeLanguage(e.target.value)}
      className="bg-gray-800 text-[#457ad8] px-2 py-1 rounded-md border border-[#457ad8] text-sm"
      aria-label="Select Language"
    >
      <option value="en">EN</option>
      <option value="es">ES</option>
    </select>
  );
}

export default LanguageSelector;