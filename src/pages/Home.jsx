// src/pages/Home.jsx
import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { useLanguage } from "../context/LanguageContext";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import BrandCarousel from "../components/BrandCarousel";
import backgroundImage from "/images/home_fondo.webp";
import aboutImage from "/images/rectangle1.webp";
import projectimage1 from "/images/rectangle2.webp";
import projectimage2 from "/images/rectangle3.webp";
import projectimage3 from "/images/rectangle4.webp";
import projectimage4 from "/images/rectangle5.webp";
import projectimage5 from "/images/rectangle6.webp";
import projectimage6 from "/images/rectangle7.webp";

const Home = () => {
  const { language } = useLanguage();
  const { t } = useTranslation();
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll events for navbar transparency
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>Elevator Tech Solutions | Home</title>
        <meta
          name="description"
          content="Elevator Tech Solutions provides elevator repair, certification, and installation services serving all of South Florida."
        />
      </Helmet>

      {/* Hero Section */}
      <section 
        className="relative h-screen text-white flex items-center justify-center border-b-4 border-[#457ad8] max-w-4xl mx-auto" 
        id="home"
      >
        {/* Background */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        ></div>
        <div className="absolute inset-0 bg-[#050f22] bg-opacity-20"></div>

        {/* Content Container */}
        <div className="relative z-10 w-full max-w-4xl mx-auto px-6">
          <div className="max-w-md">
            <h1 className="text-white font-sf font-extrabold text-2xl sm:text-3xl md:text-4xl leading-tight tracking-tight">
              {t("home.hero.title")}
            </h1>
            <p className="text-white font-sf text-sm sm:text-base mt-2 mb-8">
              {t("home.hero.subtitle")}
            </p>
            
            <Link
              to="/contact"
              className="inline-block bg-[#457ad8] text-white py-2 px-4 rounded-md shadow-md font-sf hover:scale-105 transition-transform text-sm sm:text-base"
            >
              {t("home.hero.cta")}
            </Link>
          </div>
        </div>

        {/* Numbered dots */}
        <div className="hidden sm:flex absolute right-4 md:right-8 lg:right-12 top-1/2 transform -translate-y-1/2 flex-col space-y-2 text-center z-10">
          <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#457ad8] text-white border border-[#213b6a] flex items-center justify-center text-xs sm:text-sm">
            1
          </div>
          <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#dcdcdc] border border-[#b0b0b0] flex items-center justify-center text-xs sm:text-sm">
            2
          </div>
          <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#dcdcdc] border border-[#b0b0b0] flex items-center justify-center text-xs sm:text-sm">
            3
          </div>
        </div>

        {/* Contact buttons */}
        <div className="absolute bottom-6 sm:bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-4 sm:space-x-6 z-10">
          <button className="bg-white p-2 sm:p-3 rounded-full shadow-md hover:bg-gray-100 transition-colors">
            <i className="ri-whatsapp-line text-green-500 text-lg sm:text-xl"></i>
          </button>
          <button className="bg-white p-2 sm:p-3 rounded-full shadow-md hover:bg-gray-100 transition-colors">
            <i className="ri-mail-line text-blue-500 text-lg sm:text-xl"></i>
          </button>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-white border-b border-gray-200" id="about">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-2">{t("about.title")}</h2>
          <div className="w-full h-0.5 bg-[#457ad8] mb-8"></div>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2">
              <p className="text-gray-700 leading-relaxed mb-6">
                {t("about.description")}
              </p>
              <Link
                to="/about"
                className="text-[#457ad8] font-semibold hover:text-[#213b6a] flex items-center"
              >
                {t("home.about.link")}{" "}
                <i className="ri-arrow-right-line ml-2"></i>
              </Link>
            </div>
            <div className="md:w-1/2">
              <img
                src={aboutImage}
                alt="Elevator maintenance"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50 border-b border-gray-200" id="services">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-2">{t("services.title")}</h2>
          <div className="w-full h-0.5 bg-[#457ad8] mb-8"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {/* Service 1 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:shadow-lg">
              <div className="relative h-48 bg-[#213b6a]">
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center bg-[#457ad8] mb-4">
                    <i className="ri-tools-fill text-white text-2xl"></i>
                  </div>
                  <h3 className="text-xl font-semibold text-white text-center px-4">
                    {t("home.services.item1")}
                  </h3>
                </div>
              </div>
            </div>

            {/* Service 2 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:shadow-lg">
              <div className="relative h-48 bg-[#213b6a]">
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center bg-[#457ad8] mb-4">
                    <i className="ri-medal-line text-white text-2xl"></i>
                  </div>
                  <h3 className="text-xl font-semibold text-white text-center px-4">
                    {t("home.services.item2")}
                  </h3>
                </div>
              </div>
            </div>

            {/* Service 3 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:shadow-lg">
              <div className="relative h-48 bg-[#213b6a]">
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center bg-[#457ad8] mb-4">
                    <i className="ri-3d-cube-sphere-line text-white text-2xl"></i>
                  </div>
                  <h3 className="text-xl font-semibold text-white text-center px-4">
                    {t("home.services.item3")}
                  </h3>
                </div>
              </div>
            </div>

            {/* Service 4 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:shadow-lg">
              <div className="relative h-48 bg-[#213b6a]">
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center bg-[#457ad8] mb-4">
                    <i className="ri-shield-check-line text-white text-2xl"></i>
                  </div>
                  <h3 className="text-xl font-semibold text-white text-center px-4">
                    {t("home.services.item4")}
                  </h3>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Link
              to="/services"
              className="inline-block bg-[#457ad8] hover:bg-[#213b6a] text-white py-2 px-6 rounded-md shadow-md transition-all duration-300 w-auto"
            >
              {t("home.services.cta")}
            </Link>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            <div className="w-3 h-3 rounded-full bg-[#457ad8] border border-[#213b6a]"></div>
            <div className="w-3 h-3 rounded-full bg-[#dcdcdc] border border-[#b0b0b0]"></div>
            <div className="w-3 h-3 rounded-full bg-[#dcdcdc] border border-[#b0b0b0]"></div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50 border-b border-gray-200" id="testimonials">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-2">
            {t("home.testimonials.title")}
          </h2>
          <div className="w-full h-0.5 bg-[#457ad8] mb-8"></div>

          <div className="flex flex-col md:flex-row gap-6">
            <div className="bg-[#213b6a] border border-white rounded-xl p-6 md:p-8 text-white flex-1">
              <div className="mb-6">
                <p className="text-lg leading-relaxed italic">
                  {t("home.testimonials.quote1")}
                </p>
              </div>
              <div className="flex justify-center">
                <p className="text-[#4d98de] font-medium">
                  {t("home.testimonials.author1")}
                </p>
              </div>
            </div>

            <div className="bg-[#213b6a] border border-white rounded-xl p-6 md:p-8 text-white flex-1">
              <div className="mb-6">
                <p className="text-lg leading-relaxed italic">
                  {t("home.testimonials.quote2")}
                </p>
              </div>
              <div className="flex justify-center">
                <p className="text-[#4d98de] font-medium">
                  {t("home.testimonials.author2")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8">
            {t("home.brands.title")}
          </h2>

          {/* Carrusel de marcas */}
          <BrandCarousel />
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-[#050f22] text-white relative" id="contact">
        <div className="absolute inset-0 bg-opacity-70"></div>
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <h2 className="text-3xl font-bold mb-8 text-center">
            {t("home.contact.title")}
          </h2>

          <div className="max-w-xl mx-auto">
            <form className="space-y-6">
              <div className="flex items-center py-2 bg-transparent border-b border-white">
                <div className="mr-4">
                  <i className="ri-user-line text-xl"></i>
                </div>
                <input
                  type="text"
                  placeholder={t("home.contact.name")}
                  className="appearance-none bg-transparent border-none w-full text-white py-1 px-2 leading-tight focus:outline-none"
                />
              </div>

              <div className="flex items-center py-2 bg-transparent border-b border-white">
                <div className="mr-4">
                  <i className="ri-mail-line text-xl"></i>
                </div>
                <input
                  type="email"
                  placeholder={t("contact.email")}
                  className="appearance-none bg-transparent border-none w-full text-white py-1 px-2 leading-tight focus:outline-none"
                />
              </div>

              <div className="flex items-center py-2 bg-transparent border-b border-white">
                <div className="mr-4">
                  <i className="ri-message-2-line text-xl"></i>
                </div>
                <input
                  type="text"
                  placeholder={t("contact.message")}
                  className="appearance-none bg-transparent border-none w-full text-white py-1 px-2 leading-tight focus:outline-none"
                />
              </div>

              <div className="flex justify-center pt-6">
                <button className="bg-[#457ad8] hover:bg-[#213b6a] text-white py-2 px-6 w-auto rounded-md shadow-md transition-all duration-300 transform hover:scale-105">
                  {t("home.contact.cta")}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;