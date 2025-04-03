import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

// Versión migrada que utiliza i18next en lugar de tener traducciones internas
// Esta es una versión mejorada comparada con el enfoque anterior

const About = () => {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t("meta.about.title")}</title>
        <meta name="description" content={t("meta.about.description")} />
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
              {t("about.title")}
            </h1>
            <p className="text-xl text-blue-200">{t("about.subtitle")}</p>
          </motion.div>
        </div>
      </div>

      <div className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {t("about.mission")}
              </h2>
              <p className="text-gray-600">{t("about.missionText")}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {t("about.team")}
              </h2>
              <p className="text-gray-600 mb-6">{t("about.teamText")}</p>

              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {t("about.values")}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Usar map para generar los valores desde el archivo de traducción */}
                {Array.from({ length: 4 }).map((_, index) => (
                  <motion.div
                    key={index}
                    className="bg-gray-100 p-4 rounded-lg shadow-sm"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  >
                    <h3 className="text-xl font-bold text-blue-600 mb-2">
                      {t(`about.valuesList.${index}.title`)}
                    </h3>
                    <p className="text-gray-600">
                      {t(`about.valuesList.${index}.description`)}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
