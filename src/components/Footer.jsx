import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import logo from "/images/logot.png";

const Footer = () => {
  const { t } = useTranslation();
  
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
            <h3 className="text-xl font-bold mb-4">{t("footer.links")}</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">{t("footer.about")}</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-white transition-colors">{t("footer.services")}</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">{t("footer.contact")}</Link></li>
            </ul>
          </div>
          
          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-bold mb-4">{t("footer.contactInfo")}</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <i className="ri-map-pin-line mr-2 mt-1 text-blue-500"></i>
                <span className="text-gray-400">{t("footer.address")}</span>
              </li>
              <li className="flex items-center">
                <i className="ri-phone-line mr-2 text-blue-500"></i>
                <span className="text-gray-400">{t("footer.phone")}</span>
              </li>
              <li className="flex items-center">
                <i className="ri-mail-line mr-2 text-blue-500"></i>
                <span className="text-gray-400">{t("footer.email")}</span>
              </li>
            </ul>
          </div>
          
          {/* Social Media */}
          <div>
            <h3 className="text-xl font-bold mb-4">{t("footer.follow")}</h3>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/elevatortechsolutions?igsh=MXRyeHp5Ym5vdHhoMw==" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-500 transition-colors">
                <i className="ri-instagram-line text-2xl"></i>
              </a>
              <a href="mailto:elevatorts@gmail.com" className="text-white hover:text-blue-400 transition-colors">
                <i className="ri-mail-line text-2xl"></i>
              </a>
              <a href="tel:6452409570" className="text-white hover:text-green-500 transition-colors">
                <i className="ri-phone-line text-2xl"></i>
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-gray-400 text-sm">
          <p>{t("footer.copyright")}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;