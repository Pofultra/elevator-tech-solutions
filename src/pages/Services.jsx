import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const Services = () => {
  const { t } = useTranslation();

  const services = [
    { key: "installation", icon: "ri-building-line" },
    { key: "maintenance", icon: "ri-tools-line" },
    { key: "repair", icon: "ri-settings-line" },
    { key: "modernization", icon: "ri-rocket-line" },
    { key: "inspection", icon: "ri-shield-check-line" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <>
      <Helmet>
        <title>{t("services.meta.title")}</title>
        <meta name="description" content={t("services.meta.description")} />
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
              {t("services.title")}
            </h1>
            <p className="text-xl text-blue-200">{t("services.subtitle")}</p>
          </motion.div>
        </div>
      </div>

      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.p
            className="text-center text-xl text-gray-600 mb-12 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {t("services.intro")}
          </motion.p>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {services.map((service) => (
              <motion.div
                key={service.key}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                variants={itemVariants}
              >
                <div className="bg-blue-600 text-white p-6">
                  <i className={`${service.icon} text-4xl`}></i>
                  <h3 className="text-2xl font-bold mt-4">
                    {t(`services.${service.key}.title`)}
                  </h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">
                    {t(`services.${service.key}.description`)}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <p className="text-xl text-gray-700 mb-6">{t("services.cta")}</p>
            <Link
              to="/contact"
              className="inline-block bg-blue-600 text-white py-3 px-8 rounded-md shadow-md font-bold hover:bg-blue-700 transition-colors"
            >
              {t("services.buttonText")}
            </Link>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Services;
