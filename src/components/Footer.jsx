import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import logo from "/images/logot.png";

const Footer = () => {
  const { language } = useLanguage();
  
  const translations = {
    en: {
      links: "Quick Links",
      about: "About Us",
      services: "Our Services",
      projects: "Projects",
      contact: "Contact Us",
      contactInfo: "Contact Information",
      address: "123 Main Street, Miami, FL 33101",
      phone: "+1 (305) 555-1234",
      email: "info@elevatortechsolutions.com",
      follow: "Follow Us",
      copyright: "© 2025 Elevator Tech Solutions. All rights reserved."
    },
    es: {
      links: "Enlaces Rápidos",
      about: "Sobre Nosotros",
      services: "Nuestros Servicios",
      projects: "Proyectos",
      contact: "Contáctenos",
      contactInfo: "Información de Contacto",
      address: "123 Main Street, Miami, FL 33101",
      phone: "+1 (305) 555-1234",
      email: "info@elevatortechsolutions.com",
      follow: "Síguenos",
      copyright: "© 2025 Soluciones Tech para Elevadores. Todos los derechos reservados."
    },
    fr: {
      links: "Liens Rapides",
      about: "À Propos de Nous",
      services: "Nos Services",
      projects: "Projets",
      contact: "Contactez-Nous",
      contactInfo: "Informations de Contact",
      address: "123 Main Street, Miami, FL 33101",
      phone: "+1 (305) 555-1234",
      email: "info@elevatortechsolutions.com",
      follow: "Suivez-Nous",
      copyright: "© 2025 Solutions Tech pour Ascenseurs. Tous droits réservés."
    },
    de: {
      links: "Schnelllinks",
      about: "Über Uns",
      services: "Unsere Leistungen",
      projects: "Projekte",
      contact: "Kontaktieren Sie Uns",
      contactInfo: "Kontaktinformationen",
      address: "123 Main Street, Miami, FL 33101",
      phone: "+1 (305) 555-1234",
      email: "info@elevatortechsolutions.com",
      follow: "Folgen Sie Uns",
      copyright: "© 2025 Aufzug Tech Lösungen. Alle Rechte vorbehalten."
    }
  };
  
  const text = translations[language] || translations.en;

  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div>
            <img src={logo} alt="Elevator Tech Solutions" className="h-12 mb-4" />
            <p className="text-gray-400 text-sm">
              Professional elevator installation, maintenance, and repair services in South Florida.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">{text.links}</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">{text.about}</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-white transition-colors">{text.services}</Link></li>
              <li><Link to="/projects" className="text-gray-400 hover:text-white transition-colors">{text.projects}</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">{text.contact}</Link></li>
            </ul>
          </div>
          
          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-bold mb-4">{text.contactInfo}</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <i className="ri-map-pin-line mr-2 mt-1 text-blue-500"></i>
                <span className="text-gray-400">{text.address}</span>
              </li>
              <li className="flex items-center">
                <i className="ri-phone-line mr-2 text-blue-500"></i>
                <span className="text-gray-400">{text.phone}</span>
              </li>
              <li className="flex items-center">
                <i className="ri-mail-line mr-2 text-blue-500"></i>
                <span className="text-gray-400">{text.email}</span>
              </li>
            </ul>
          </div>
          
          {/* Social Media */}
          <div>
            <h3 className="text-xl font-bold mb-4">{text.follow}</h3>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-500 transition-colors">
                <i className="ri-facebook-fill text-2xl"></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400 transition-colors">
                <i className="ri-twitter-fill text-2xl"></i>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-pink-500 transition-colors">
                <i className="ri-instagram-line text-2xl"></i>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-600 transition-colors">
                <i className="ri-linkedin-fill text-2xl"></i>
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-gray-400 text-sm">
          <p>{text.copyright}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;