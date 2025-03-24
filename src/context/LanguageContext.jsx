import { createContext, useState, useContext, useEffect } from "react";
import { useTranslation } from "react-i18next";
import "../i18n"; // Importar la configuración de i18n

// Crear el contexto
const LanguageContext = createContext();

// Proveedor de idioma
export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("en"); // Idioma por defecto: inglés
  const { i18n } = useTranslation();

  // Actualizar el idioma de i18n cuando cambia language
  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language, i18n]);

  // Función para cambiar el idioma
  const changeLanguage = (lng) => {
    setLanguage(lng);
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Hook personalizado para usar el contexto
export const useLanguage = () => useContext(LanguageContext);