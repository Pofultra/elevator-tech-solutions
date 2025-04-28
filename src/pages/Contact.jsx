import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

const Contact = () => {
  const { t } = useTranslation();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitSuccess(false);
    setSubmitError(false);

    try {
      const form = e.target;

      // Enviar el formulario a Formspree
      const response = await fetch("https://formspree.io/f/xkgrogwa", {
        method: "POST",
        body: new FormData(form),
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        // Si la respuesta es exitosa
        setSubmitSuccess(true);
        form.reset();
      } else {
        throw new Error("Error en el envío del formulario");
      }
    } catch (error) {
      console.error("Error:", error);
      setSubmitError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>{t("meta.contact.title")}</title>
        <meta name="description" content={t("meta.contact.description")} />
      </Helmet>

      <div className="bg-blue-900 py-20 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {t("contact.title")}
            </h1>
            <p className="text-xl text-blue-200">{t("contact.subtitle")}</p>
          </motion.div>
        </div>
      </div>

      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-lg shadow-lg p-8"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                {t("contact.form.heading")}
              </h2>

              {submitSuccess && (
                <div className="bg-green-50 border border-green-200 text-green-800 p-4 rounded-md mb-6">
                  {t("contact.form.success")}
                </div>
              )}

              {submitError && (
                <div className="bg-red-50 border border-red-200 text-red-800 p-4 rounded-md mb-6">
                  {t("contact.form.error")}
                </div>
              )}

              <form
                action="https://formspree.io/f/xkgrogwa"
                method="POST"
                onSubmit={handleSubmit}
              >
                <div className="mb-4">
                  <label
                    htmlFor="name"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    {t("contact.form.name")}{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-gray-700 font-medium mb-2"
                    >
                      {t("contact.form.email")}{" "}
                      <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-gray-700 font-medium mb-2"
                    >
                      {t("contact.form.phone")}
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="service"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    {t("contact.form.service")}{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">
                      {t("contact.form.serviceOptions.select")}
                    </option>
                    <option value="installation">
                      {t("contact.form.serviceOptions.installation")}
                    </option>
                    <option value="maintenance">
                      {t("contact.form.serviceOptions.maintenance")}
                    </option>
                    <option value="repair">
                      {t("contact.form.serviceOptions.repair")}
                    </option>
                    <option value="modernization">
                      {t("contact.form.serviceOptions.modernization")}
                    </option>
                    <option value="inspection">
                      {t("contact.form.serviceOptions.inspection")}
                    </option>
                    <option value="consultation">
                      {t("contact.form.serviceOptions.consultation")}
                    </option>
                    <option value="other">
                      {t("contact.form.serviceOptions.other")}
                    </option>
                  </select>
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="message"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    {t("contact.form.message")}{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows="5"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 text-white py-3 px-6 rounded-md font-bold hover:bg-blue-700 transition-colors disabled:bg-blue-400"
                >
                  {isSubmitting
                    ? t("contact.form.buttonSending")
                    : t("contact.form.button")}
                </button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="bg-blue-900 text-white rounded-lg shadow-lg p-8 h-auto">
                <h2 className="text-2xl font-bold mb-8">
                  {t("contact.contact_info.heading")}
                </h2>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="shrink-0 bg-blue-800 p-3 rounded-full mr-4">
                      <i className="ri-phone-line text-xl"></i>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">
                        {t("contact.contact_info.phone.title")}
                      </h3>
                      <p className="text-blue-100 mt-1">
                        {t("contact.contact_info.phone.line")}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="shrink-0 bg-blue-800 p-3 rounded-full mr-4">
                      <i className="ri-mail-line text-xl"></i>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">
                        {t("contact.contact_info.email.title")}
                      </h3>
                      <p className="text-blue-100 mt-1">
                        {t("contact.contact_info.email.line")}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-10 flex justify-center space-x-4">
                  <a
                    href="https://www.instagram.com/elevatortechsolutions?igsh=MXRyeHp5Ym5vdHhoMw=="
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-800 p-3 rounded-full hover:bg-blue-700 transition-colors"
                  >
                    <i className="ri-instagram-line text-xl"></i>
                  </a>
                  <a
                    href="mailto:hivikipof@gmail.com"
                    // href="mailto:elevatorts@gmail.com"
                    className="bg-blue-800 p-3 rounded-full hover:bg-blue-700 transition-colors"
                  >
                    <i className="ri-mail-line text-xl"></i>
                  </a>
                  <a
                    href="tel:6452409570"
                    className="bg-blue-800 p-3 rounded-full hover:bg-blue-700 transition-colors"
                  >
                    <i className="ri-phone-line text-xl"></i>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
