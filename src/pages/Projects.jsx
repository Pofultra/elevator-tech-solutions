import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

const Projects = () => {
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    "all",
    "residential",
    "commercial",
    "modernization",
    "repair",
  ];
  const projectItems = Array.from({ length: 6 });

  const filteredProjects =
    activeCategory === "all"
      ? projectItems
      : projectItems.filter(
          (_, index) => t(`projects.items.${index}.category`) === activeCategory
        );

  return (
    <>
      <Helmet>
        <title>{t("projects.meta.title")}</title>
        <meta name="description" content={t("projects.meta.description")} />
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
              {t("projects.title")}
            </h1>
            <p className="text-xl text-blue-200">{t("projects.subtitle")}</p>
          </motion.div>
        </div>
      </div>

      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          {/* Filter Categories */}
          <div className="flex flex-wrap justify-center mb-12 gap-2">
            {categories.map((category) => (
              <motion.button
                key={category}
                className={`px-4 py-2 rounded-md ${
                  activeCategory === category
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
                onClick={() => setActiveCategory(category)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {t(`projects.categories.${category}`)}
              </motion.button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((_, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
              >
                <div className="h-56 overflow-hidden">
                  <img
                    src={t(`projects.items.${index}.image`)}
                    alt={t(`projects.items.${index}.title`)}
                    className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {t(`projects.items.${index}.title`)}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {t(`projects.items.${index}.description`)}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500 flex items-center">
                      <i className="ri-map-pin-line mr-1"></i>{" "}
                      {t(`projects.items.${index}.location`)}
                    </span>
                    <span className="text-sm px-3 py-1 bg-blue-100 text-blue-800 rounded-full">
                      {t(
                        `projects.categories.${t(`projects.items.${index}.category`)}`
                      )}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* View More Button */}
          <div className="text-center mt-12">
            <motion.button
              className="px-6 py-3 bg-blue-600 text-white rounded-md shadow-md font-bold hover:bg-blue-700"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {t("projects.viewMore")}
            </motion.button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
