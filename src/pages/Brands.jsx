import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

const Brands = () => {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t("brands.meta.title")}</title>
        <meta name="description" content={t("brands.meta.description")} />
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
              {t("brands.title")}
            </h1>
            <p className="text-xl text-blue-200">{t("brands.subtitle")}</p>
          </motion.div>
        </div>
      </div>

      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <p className="text-xl text-gray-600">{t("brands.description")}</p>
          </motion.div>

          <h2 className="text-3xl font-bold text-center mb-12">
            {t("brands.brandsTitle")}
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-16">
            {Array.from({ length: 6 }).map((_, index) => (
              <motion.div
                key={index}
                className="border border-gray-200 rounded-lg p-6 text-center hover:shadow-lg transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                whileHover={{ y: -5 }}
              >
                <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">
                    {t(`brands.items.${index}.name`)[0]}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2">
                  {t(`brands.items.${index}.name`)}
                </h3>
                <p className="text-gray-600 text-sm">
                  {t(`brands.items.${index}.description`)}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="bg-blue-50 rounded-lg p-8 text-center max-w-4xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <h3 className="text-2xl font-bold text-blue-800 mb-4">
              {t("brands.quality")}
            </h3>
            <p className="text-gray-700">{t("brands.qualityText")}</p>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Brands;
