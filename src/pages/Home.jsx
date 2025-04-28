// src/pages/Home.jsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import BrandCarousel from "../components/BrandCarousel";
import SEO from "../components/SEO";
import backgroundImage from "/images/home_fondo.webp";
import aboutImage from "/images/rectangle1.webp";

const Home = () => {
  const { t } = useTranslation();
  const [scrolled, setScrolled] = useState(false);

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
      <SEO
        titleKey="meta.home.title"
        descriptionKey="meta.home.description"
        extraKeywords={t("meta.home.keywords")}
      />
      {/* Hero Section */}
      <section
        className="relative h-screen flex items-center justify-center border-b-4 border-[#457ad8] max-w-4xl mx-auto overflow-hidden"
        id="home"
      >
        {/* Background container with consistent padding */}
        <div className="absolute inset-0 m-5 sm:m-8 md:m-10 overflow-hidden rounded-lg shadow-md">
          {/* Background Image with proper loading optimization */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat h-full w-full transform scale-105"
            style={{ backgroundImage: `url(${backgroundImage})` }}
            role="img"
            aria-label="Elevator Tech Solutions background"
          ></div>
          <div className="absolute inset-0 bg-[#050f22] bg-opacity-20"></div>
        </div>

        <div className="relative z-10 w-full h-full px-4 sm:px-6 md:px-8 py-10">
          <div className="h-full grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="flex flex-col justify-center items-start pl-3 sm:pl-6 md:pl-8">
              <h1 className="text-white font-bold text-2xl sm:text-3xl md:text-4xl leading-tight tracking-tight">
                {t("home.hero.title")}
              </h1>
              <p className="text-white text-sm sm:text-base mt-2 mb-6 md:mb-8">
                {t("home.hero.subtitle")}
              </p>
              <Link
                to="/contact"
                className="inline-block bg-[#457ad8] text-white py-2 px-4 sm:py-3 sm:px-6 rounded-md shadow-md hover:bg-[#3968c0] transition-colors text-sm sm:text-base"
              >
                {t("home.hero.cta")}
              </Link>
            </div>

            {/* Right column: News card */}
            <div className="flex flex-col justify-center items-center sm:items-end pr-0 sm:pr-6 md:pr-8">
              {/* News Bubble */}
              <div className="w-64 sm:w-56 md:w-64 bg-white bg-opacity-95 rounded-lg shadow-xl transform rotate-2">
                <div className="relative p-4">
                  <div className="absolute top-0 right-0 w-10 h-10 sm:w-12 sm:h-12 bg-[#457ad8] rounded-bl-full rounded-tr-lg -m-1"></div>
                  <h3 className="text-[#213b6a] font-bold text-lg mb-2">
                    {t("home.hero.newsTitle")}
                  </h3>
                  <p className="text-gray-700 text-sm mb-3">
                    {t("home.hero.newsContent")}
                  </p>
                  <a
                    href="https://www.instagram.com/p/DHbqKUAOM79/?igsh=MXd1eHU3aDY1Yndyeg=="
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-[#457ad8] text-sm font-medium hover:underline group"
                  >
                    {t("home.hero.newsLink")}
                    <i className="ri-instagram-line ml-1 group-hover:ml-2 transition-all"></i>
                  </a>
                  <span className="absolute -top-1 -right-1 flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#457ad8] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-[#457ad8]"></span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Rest of the Home page components remain the same */}
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
                alt="Elevator maintenance professional"
                className="w-full h-auto rounded-lg shadow-lg"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>
      {/* Services Section */}
      <section
        className="py-16 bg-gray-50 border-b border-gray-200"
        id="services"
      >
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-2">{t("services.title")}</h2>
          <div className="w-full h-0.5 bg-[#457ad8] mb-8"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {/* Service 1 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:shadow-lg">
              <div className="relative h-48 bg-[#213b6a]">
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center bg-[#457ad8] mb-4">
                    <i className="ri-door-lock-box-line text-white text-2xl"></i>
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
                    <i className="ri-tools-line text-white text-2xl"></i>
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
                    <i className="ri-award-line text-white text-2xl"></i>
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
                    <i className="ri-sensor-line text-white text-2xl"></i>
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
      <section
        className="py-16 bg-gray-50 border-b border-gray-200"
        id="testimonials"
      >
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

          {/* Brand carousel */}
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
            {/* Estado para manejar las notificaciones */}
            {(() => {
              const [isSubmitting, setIsSubmitting] = useState(false);
              const [submitSuccess, setSubmitSuccess] = useState(false);
              const [submitError, setSubmitError] = useState(false);

              return (
                <>
                  {/* Mensajes de notificación */}
                  {submitSuccess && (
                    <div className="bg-green-100 border border-green-200 text-green-800 p-4 rounded-md mb-6">
                      {t("contact.form.success")}
                    </div>
                  )}

                  {submitError && (
                    <div className="bg-red-100 border border-red-200 text-red-800 p-4 rounded-md mb-6">
                      {t("contact.form.error")}
                    </div>
                  )}

                  <form
                    className="space-y-6"
                    onSubmit={async (e) => {
                      e.preventDefault();
                      setIsSubmitting(true);
                      setSubmitSuccess(false);
                      setSubmitError(false);

                      try {
                        // Enviar formulario usando fetch en lugar de redirección
                        const formData = new FormData(e.target);
                        const response = await fetch(
                          "https://formspree.io/f/xkgrogwa",
                          {
                            method: "POST",
                            body: formData,
                            headers: {
                              Accept: "application/json",
                            },
                          }
                        );

                        if (response.ok) {
                          // Éxito - limpiar formulario
                          e.target.reset();
                          setSubmitSuccess(true);

                          // Ocultar mensaje de éxito después de 5 segundos
                          setTimeout(() => {
                            setSubmitSuccess(false);
                          }, 5000);
                        } else {
                          throw new Error(
                            "Hubo un error al enviar el formulario"
                          );
                        }
                      } catch (error) {
                        console.error("Error:", error);
                        setSubmitError(true);
                      } finally {
                        setIsSubmitting(false);
                      }
                    }}
                  >
                    <div className="flex items-center py-2 bg-transparent border-b border-white">
                      <div className="mr-4">
                        <i className="ri-user-line text-xl"></i>
                      </div>
                      <input
                        type="text"
                        name="name"
                        placeholder={t("home.contact.name")}
                        className="appearance-none bg-transparent border-none w-full text-white py-1 px-2 leading-tight focus:outline-none"
                        required
                        aria-label="Your name"
                      />
                    </div>

                    <div className="flex items-center py-2 bg-transparent border-b border-white">
                      <div className="mr-4">
                        <i className="ri-mail-line text-xl"></i>
                      </div>
                      <input
                        type="email"
                        name="email"
                        placeholder={t("contact.email")}
                        className="appearance-none bg-transparent border-none w-full text-white py-1 px-2 leading-tight focus:outline-none"
                        required
                        aria-label="Your email"
                      />
                    </div>

                    <div className="flex items-center py-2 bg-transparent border-b border-white">
                      <div className="mr-4">
                        <i className="ri-message-2-line text-xl"></i>
                      </div>
                      <textarea
                        name="message"
                        placeholder={t("contact.message")}
                        className="appearance-none bg-transparent border-none w-full text-white py-1 px-2 leading-tight focus:outline-none"
                        required
                        rows="3"
                        aria-label="Your message"
                      ></textarea>
                    </div>

                    <div className="flex justify-center pt-6">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="bg-[#457ad8] hover:bg-[#213b6a] text-white py-2 px-6 w-auto rounded-md shadow-md transition-all duration-300 transform hover:scale-105 disabled:bg-blue-400"
                      >
                        {isSubmitting
                          ? t("contact.form.buttonSending")
                          : t("home.contact.cta")}
                      </button>
                    </div>
                  </form>
                </>
              );
            })()}

            {/* Business Contact Info - Good for SEO */}
            <div className="mt-12 text-center">
              <div className="flex justify-center space-x-6 mb-6">
                <a
                  href="https://www.instagram.com/elevatortechsolutions?igsh=MXRyeHp5Ym5vdHhoMw=="
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow us on Instagram"
                  className="text-white hover:text-blue-300 transition-colors"
                >
                  <i className="ri-instagram-line text-2xl"></i>
                </a>
                <a
                  href="mailto:elevatorts@gmail.com"
                  aria-label="Contact us via email"
                  className="text-white hover:text-blue-300 transition-colors"
                >
                  <i className="ri-mail-line text-2xl"></i>
                </a>
                <a
                  href="tel:6452409570"
                  aria-label="Call us"
                  className="text-white hover:text-blue-300 transition-colors"
                >
                  <i className="ri-phone-line text-2xl"></i>
                </a>
              </div>
              <div className="text-sm text-gray-400">
                <p>Email: elevatorts@gmail.com</p>
                <p>Phone: 645-240-9570</p>
                <p>Service Area: South Florida</p>
              </div>
            </div>
          </div>
        </div>
      </section>{" "}
    </>
  );
};

export default Home;
