import React from "react";
import { useLanguage } from "../context/LanguageContext";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import background from "/images/home_fondo.webp";

const Home = () => {
  const { language } = useLanguage();

  const translations = {
    en: {
      title: "ELEVATOR TECH SOLUTIONS",
      subtitle: "Serving all of South Florida",
      cta: "Get a Quote",
      meta: {
        title: "Elevator Tech Solutions | Home",
        description: "Professional elevator installation, maintenance and repair services in South Florida."
      }
    },
    es: {
      title: "SOLUCIONES TECH PARA ELEVADORES",
      subtitle: "Sirviendo todo el sur de Florida",
      cta: "Obtener Cotización",
      meta: {
        title: "Soluciones Tech para Elevadores | Inicio",
        description: "Servicios profesionales de instalación, mantenimiento y reparación de elevadores en el sur de Florida."
      }
    },
    fr: {
      title: "SOLUTIONS TECH POUR ASCENSEURS",
      subtitle: "Desservant tout le sud de la Floride",
      cta: "Obtenir un Devis",
      meta: {
        title: "Solutions Tech pour Ascenseurs | Accueil",
        description: "Services professionnels d'installation, d'entretien et de réparation d'ascenseurs dans le sud de la Floride."
      }
    },
    de: {
      title: "AUFZUG TECH LÖSUNGEN",
      subtitle: "Wir bedienen ganz Süd-Florida",
      cta: "Angebot Einholen",
      meta: {
        title: "Aufzug Tech Lösungen | Startseite",
        description: "Professionelle Installation, Wartung und Reparatur von Aufzügen in Süd-Florida."
      }
    }
  };

  const text = translations[language] || translations.en;

  return (
    <>
      <Helmet>
        <title>{text.meta.title}</title>
        <meta name="description" content={text.meta.description} />
      </Helmet>
      
      <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: `url(${background})` }}>
        <div className="absolute top-1/3 left-[5%] md:left-[10%] w-[85%] md:w-[50%] flex flex-col justify-between">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="text-white font-extrabold text-3xl md:text-4xl lg:text-5xl leading-tight tracking-wide font-sf mb-4">
              {text.title}
            </h1>
            <p className="text-white text-lg md:text-xl font-sf mb-8">
              {text.subtitle}
            </p>
            <motion.button 
              className="bg-blue-500 text-white py-3 px-6 rounded-md shadow-md font-sf hover:bg-blue-600 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {text.cta}
            </motion.button>
          </motion.div>
        </div>
        
        <motion.div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <motion.a 
            href="https://wa.me/1234567890" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-white p-3 rounded-full shadow-md flex items-center justify-center"
            whileHover={{ scale: 1.1, backgroundColor: "#f0f0f0" }}
            whileTap={{ scale: 0.9 }}
          >
            <i className="ri-whatsapp-line text-green-500 text-xl"></i>
          </motion.a>
          <motion.a 
            href="mailto:contact@elevatortechsolutions.com" 
            className="bg-white p-3 rounded-full shadow-md flex items-center justify-center"
            whileHover={{ scale: 1.1, backgroundColor: "#f0f0f0" }}
            whileTap={{ scale: 0.9 }}
          >
            <i className="ri-mail-line text-blue-500 text-xl"></i>
          </motion.a>
        </motion.div>
      </div>
    </>
  );
};

export default Home;