import React from "react";

function LanguageSelector({ language, setLanguage }) {
  return (
    <select
      value={language}
      onChange={(e) => setLanguage(e.target.value)}
      className="bg-gray-800 text-yellow-500 px-2 py-1 rounded-md border border-yellow-500 text-sm"
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
