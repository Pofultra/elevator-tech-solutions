import React from "react";
import { useLanguage } from "../context/LanguageContext";

function LanguageSelector() {
  const { language, setLanguage } = useLanguage();

  return (
    <select
      value={language}
      onChange={(e) => setLanguage(e.target.value)}
      className="bg-gray-800 text-yellow-500 px-2 py-1 rounded-md border border-yellow-500 text-sm font-sf focus:outline-none focus:ring-2 focus:ring-yellow-500"
      aria-label="Select Language"
    >
      <option value="es">ES</option>
      <option value="en">EN</option>
      <option value="fr">FR</option>
      <option value="de">DE</option>
    </select>
  );
}

export default LanguageSelector;