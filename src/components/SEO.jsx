// src/components/SEO.jsx
import React from "react";
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useLanguage } from "../context/LanguageContext";

const SEO = ({
  titleKey,
  descriptionKey,
  image = "/images/og-image.jpg",
  article = false,
  extraKeywords = "",
}) => {
  const { pathname } = useLocation();
  const { t } = useTranslation();
  const { language } = useLanguage();
  const siteUrl = "https://elevatorts.com";

  const title = titleKey ? t(titleKey) : t("meta.defaultTitle");
  const description = descriptionKey
    ? t(descriptionKey)
    : t("meta.defaultDescription");

  // Palabras clave base para todos los idiomas
  const baseKeywords = "elevator, elevators";

  // Palabras clave específicas por idioma
  const languageKeywords = {
    en: "elevator repair, elevator installation, elevator maintenance, South Florida",
    es: "reparación de elevadores, instalación de elevadores, mantenimiento de elevadores, Sur de Florida",
  };

  // Combinar palabras clave base, específicas del idioma y extras
  const keywords = `${baseKeywords}, ${languageKeywords[language] || languageKeywords.en}, ${extraKeywords}`;

  // Configuración SEO
  const seo = {
    title,
    description,
    image: `${siteUrl}${image}`,
    url: `${siteUrl}${pathname}`,
    keywords,
    lang: language,
  };

  // URL canónica
  const canonical = `${siteUrl}${pathname}`;

  return (
    <Helmet htmlAttributes={{ lang: seo.lang }}>
      {/* Meta Tags Básicos */}
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="keywords" content={seo.keywords} />
      <link rel="canonical" href={canonical} />
      <meta name="language" content={seo.lang} />

      {/* Información de contacto */}
      <meta name="contact:email" content="elevatorts@gmail.com" />
      <meta name="contact:phone" content="645-240-9570" />
      <meta name="contact:instagram" content="@elevatortechsolutions" />
    </Helmet>
  );
};

export default SEO;
