import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Importa las traducciones
import translationsEN from './locales/en/translation';
import translationsES from './locales/es/translation';

// Configura i18next
i18n
  .use(LanguageDetector) // Detecta el idioma del navegador
  .use(initReactI18next) // Pasa i18n a react-i18next
  .init({
    resources: {
      en: {
        translation: translationsEN
      },
      es: {
        translation: translationsES
      }
      
    },
    fallbackLng: 'en', // Idioma por defecto
    debug: process.env.NODE_ENV === 'development',
    interpolation: {
      escapeValue: false // No es necesario para React
    }
  });

export default i18n;