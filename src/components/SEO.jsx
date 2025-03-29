// src/components/SEO.jsx
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '../context/LanguageContext';

const SEO = ({
  titleKey, // La clave para el título en los archivos de traducción
  descriptionKey, // La clave para la descripción en los archivos de traducción
  image = '/images/og-image.jpg',
  article = false,
  extraKeywords = '', // Palabras clave adicionales específicas de la página
}) => {
  const { pathname } = useLocation();
  const { t } = useTranslation();
  const { language } = useLanguage();
  const siteUrl = 'https://elevatortechsolutions.com';
  
  // Obtener el título y la descripción de los archivos de traducción
  const title = titleKey ? t(titleKey) : t('meta.defaultTitle');
  const description = descriptionKey ? t(descriptionKey) : t('meta.defaultDescription');
  
  // Palabras clave base para todos los idiomas
  const baseKeywords = 'elevator, elevators';
  
  // Palabras clave específicas por idioma
  const languageKeywords = {
    en: 'elevator repair, elevator installation, elevator maintenance, South Florida',
    es: 'reparación de elevadores, instalación de elevadores, mantenimiento de elevadores, Sur de Florida',
    fr: 'réparation d\'ascenseurs, installation d\'ascenseurs, entretien d\'ascenseurs, Sud de la Floride',
    de: 'Aufzugreparatur, Aufzuginstallation, Aufzugwartung, Süd-Florida'
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
    lang: language
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

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={article ? 'article' : 'website'} />
      <meta property="og:url" content={seo.url} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={seo.image} />
      <meta property="og:locale" content={seo.lang === 'en' ? 'en_US' : `${seo.lang}_${seo.lang.toUpperCase()}`} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={seo.url} />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />

      {/* Información de contacto */}
      <meta name="contact:email" content="elevatorts@gmail.com" />
      <meta name="contact:phone" content="645-240-9570" />
      <meta name="contact:instagram" content="@elevatortechsolutions" />
    </Helmet>
  );
};

export default SEO;