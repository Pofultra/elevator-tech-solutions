import React from "react";
import { useLanguage } from "../context/LanguageContext";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

const Brands = () => {
  const { language } = useLanguage();

  const translations = {
    en: {
      title: "Our Trusted Brands",
      subtitle: "We work with the industry's leading manufacturers",
      description: "At Elevator Tech Solutions, we partner with the world's leading elevator manufacturers to provide you with reliable, high-quality, and innovative elevator solutions. Our brand partnerships ensure that we can offer a wide range of options to meet your specific needs and preferences.",
      brandsTitle: "Our Partner Brands",
      brands: [
        { name: "Otis", description: "Global leader in elevator manufacturing with a legacy of innovation and quality." },
        { name: "Schindler", description: "Swiss-based multinational offering cutting-edge elevator and escalator solutions." },
        { name: "KONE", description: "Finnish company known for energy-efficient elevator and escalator systems." },
        { name: "ThyssenKrupp", description: "German engineering excellence in elevator technology and urban mobility." },
        { name: "Mitsubishi Electric", description: "Japanese precision engineering for high-speed and high-rise elevator systems." },
        { name: "Fujitec", description: "Japanese manufacturer specializing in customized elevator solutions." }
      ],
      quality: "Quality Assured",
      qualityText: "All our partner brands meet or exceed industry safety standards and regulations. We only work with manufacturers who demonstrate a commitment to quality, innovation, and customer satisfaction.",
      meta: {
        title: "Partner Brands | Elevator Tech Solutions",
        description: "Learn about the leading elevator manufacturers we partner with to deliver high-quality elevator solutions throughout South Florida."
      }
    },
    es: {
      title: "Nuestras Marcas de Confianza",
      subtitle: "Trabajamos con los principales fabricantes de la industria",
      description: "En Soluciones Tech para Elevadores, colaboramos con los principales fabricantes de elevadores del mundo para proporcionarle soluciones de elevadores confiables, de alta calidad e innovadoras. Nuestras asociaciones con marcas aseguran que podamos ofrecer una amplia gama de opciones para satisfacer sus necesidades y preferencias específicas.",
      brandsTitle: "Nuestras Marcas Asociadas",
      brands: [
        { name: "Otis", description: "Líder global en la fabricación de elevadores con un legado de innovación y calidad." },
        { name: "Schindler", description: "Multinacional suiza que ofrece soluciones de elevadores y escaleras mecánicas de vanguardia." },
        { name: "KONE", description: "Compañía finlandesa conocida por sistemas de elevadores y escaleras mecánicas energéticamente eficientes." },
        { name: "ThyssenKrupp", description: "Excelencia en ingeniería alemana en tecnología de elevadores y movilidad urbana." },
        { name: "Mitsubishi Electric", description: "Ingeniería de precisión japonesa para sistemas de elevadores de alta velocidad y gran altura." },
        { name: "Fujitec", description: "Fabricante japonés especializado en soluciones personalizadas de elevadores." }
      ],
      quality: "Calidad Garantizada",
      qualityText: "Todas nuestras marcas asociadas cumplen o superan los estándares y regulaciones de seguridad de la industria. Solo trabajamos con fabricantes que demuestran un compromiso con la calidad, la innovación y la satisfacción del cliente.",
      meta: {
        title: "Marcas Asociadas | Soluciones Tech para Elevadores",
        description: "Conozca los principales fabricantes de elevadores con los que nos asociamos para ofrecer soluciones de elevadores de alta calidad en todo el sur de Florida."
      }
    },
    fr: {
      title: "Nos Marques de Confiance",
      subtitle: "Nous travaillons avec les principaux fabricants de l'industrie",
      description: "Chez Solutions Tech pour Ascenseurs, nous collaborons avec les principaux fabricants d'ascenseurs du monde pour vous fournir des solutions d'ascenseurs fiables, de haute qualité et innovantes. Nos partenariats avec ces marques garantissent que nous pouvons offrir une large gamme d'options pour répondre à vos besoins et préférences spécifiques.",
      brandsTitle: "Nos Marques Partenaires",
      brands: [
        { name: "Otis", description: "Leader mondial dans la fabrication d'ascenseurs avec un héritage d'innovation et de qualité." },
        { name: "Schindler", description: "Multinationale suisse offrant des solutions d'ascenseurs et d'escaliers mécaniques de pointe." },
        { name: "KONE", description: "Entreprise finlandaise connue pour ses systèmes d'ascenseurs et d'escaliers mécaniques économes en énergie." },
        { name: "ThyssenKrupp", description: "Excellence en ingénierie allemande dans la technologie des ascenseurs et la mobilité urbaine." },
        { name: "Mitsubishi Electric", description: "Ingénierie de précision japonaise pour des systèmes d'ascenseurs à grande vitesse et grande hauteur." },
        { name: "Fujitec", description: "Fabricant japonais spécialisé dans les solutions d'ascenseurs personnalisées." }
      ],
      quality: "Qualité Assurée",
      qualityText: "Toutes nos marques partenaires respectent ou dépassent les normes et réglementations de sécurité de l'industrie. Nous ne travaillons qu'avec des fabricants qui démontrent un engagement envers la qualité, l'innovation et la satisfaction du client.",
      meta: {
        title: "Marques Partenaires | Solutions Tech pour Ascenseurs",
        description: "Découvrez les principaux fabricants d'ascenseurs avec lesquels nous nous associons pour fournir des solutions d'ascenseurs de haute qualité dans tout le sud de la Floride."
      }
    },
    de: {
      title: "Unsere Vertrauenswürdigen Marken",
      subtitle: "Wir arbeiten mit den führenden Herstellern der Branche",
      description: "Bei Aufzug Tech Lösungen arbeiten wir mit den weltweit führenden Aufzugsherstellern zusammen, um Ihnen zuverlässige, hochwertige und innovative Aufzugslösungen zu bieten. Unsere Markenpartnerschaften stellen sicher, dass wir eine breite Palette von Optionen anbieten können, um Ihre spezifischen Bedürfnisse und Vorlieben zu erfüllen.",
      brandsTitle: "Unsere Partnermarken",
      brands: [
        { name: "Otis", description: "Globaler Marktführer in der Aufzugsherstellung mit einer Tradition von Innovation und Qualität." },
        { name: "Schindler", description: "Schweizer Multinational, der modernste Aufzugs- und Fahrtreppenlösungen anbietet." },
        { name: "KONE", description: "Finnisches Unternehmen, bekannt für energieeffiziente Aufzugs- und Fahrtreppensysteme." },
        { name: "ThyssenKrupp", description: "Deutsche Ingenieursexzellenz in der Aufzugstechnologie und urbanen Mobilität." },
        { name: "Mitsubishi Electric", description: "Japanische Präzisionstechnik für Hochgeschwindigkeits- und Hochhausaufzugssysteme." },
        { name: "Fujitec", description: "Japanischer Hersteller, spezialisiert auf maßgeschneiderte Aufzugslösungen." }
      ],
      quality: "Qualität Gesichert",
      qualityText: "Alle unsere Partnermarken erfüllen oder übertreffen die Sicherheitsstandards und -vorschriften der Branche. Wir arbeiten nur mit Herstellern zusammen, die ein Engagement für Qualität, Innovation und Kundenzufriedenheit zeigen.",
      meta: {
        title: "Partnermarken | Aufzug Tech Lösungen",
        description: "Erfahren Sie mehr über die führenden Aufzugshersteller, mit denen wir zusammenarbeiten, um hochwertige Aufzugslösungen in ganz Süd-Florida zu liefern."
      }
    }
  };

  const text = translations[language] || translations.en;

  return (
    <>
      <Helmet>
        <title>{text.meta.title}</title>
        <meta name="description" content={text.meta.description} />
      </Helmet>
      
      <div className="bg-blue-900 py-20 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{text.title}</h1>
            <p className="text-xl text-blue-200">{text.subtitle}</p>
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
            <p className="text-xl text-gray-600">{text.description}</p>
          </motion.div>
          
          <h2 className="text-3xl font-bold text-center mb-12">{text.brandsTitle}</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-16">
            {text.brands.map((brand, index) => (
              <motion.div
                key={index}
                className="border border-gray-200 rounded-lg p-6 text-center hover:shadow-lg transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                whileHover={{ y: -5 }}
              >
                <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  {/* Placeholder for brand logo */}
                  <span className="text-2xl font-bold text-blue-600">{brand.name[0]}</span>
                </div>
                <h3 className="text-xl font-bold mb-2">{brand.name}</h3>
                <p className="text-gray-600 text-sm">{brand.description}</p>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            className="bg-blue-50 rounded-lg p-8 text-center max-w-4xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <h3 className="text-2xl font-bold text-blue-800 mb-4">{text.quality}</h3>
            <p className="text-gray-700">{text.qualityText}</p>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Brands;