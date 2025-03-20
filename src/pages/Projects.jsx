import React, { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

const Projects = () => {
  const { language } = useLanguage();
  const [activeCategory, setActiveCategory] = useState("all");

  const translations = {
    en: {
      title: "Our Projects",
      subtitle: "See our work in action",
      categories: {
        all: "All Projects",
        residential: "Residential",
        commercial: "Commercial",
        modernization: "Modernization",
        repair: "Repair"
      },
      projects: [
        {
          id: 1,
          title: "Luxury Residence Elevator",
          category: "residential",
          description: "Installation of a custom luxury elevator in a high-end Miami Beach residence.",
          image: "/images/rectangle2.webp",
          location: "Miami Beach, FL"
        },
        {
          id: 2,
          title: "Office Building Modernization",
          category: "commercial",
          description: "Complete modernization of 5 elevators in a 15-story office building.",
          image: "/images/rectangle2.webp",
          location: "Brickell, Miami, FL"
        },
        {
          id: 3,
          title: "Hotel Elevator Replacement",
          category: "commercial",
          description: "Replacement of outdated elevators with modern, energy-efficient systems.",
          image: "/images/rectangle2.webp",
          location: "Fort Lauderdale, FL"
        },
        {
          id: 4,
          title: "Residential Building Upgrade",
          category: "modernization",
          description: "Upgrading control systems and cab interiors in a condominium building.",
          image: "/images/rectangle2.webp",
          location: "Coral Gables, FL"
        },
        {
          id: 5,
          title: "Emergency Repair Service",
          category: "repair",
          description: "Emergency repair and restoration of service after a system failure.",
          image: "/images/rectangle2.webp",
          location: "West Palm Beach, FL"
        },
        {
          id: 6,
          title: "Private Villa Elevator",
          category: "residential",
          description: "Design and installation of a panoramic glass elevator in a luxury villa.",
          image: "/images/rectangle2.webp",
          location: "Key Biscayne, FL"
        }
      ],
      viewMore: "View More",
      meta: {
        title: "Projects | Elevator Tech Solutions",
        description: "Explore our portfolio of elevator installation, modernization, and repair projects throughout South Florida."
      }
    },
    es: {
      title: "Nuestros Proyectos",
      subtitle: "Vea nuestro trabajo en acción",
      categories: {
        all: "Todos los Proyectos",
        residential: "Residencial",
        commercial: "Comercial",
        modernization: "Modernización",
        repair: "Reparación"
      },
      projects: [
        {
          id: 1,
          title: "Elevador para Residencia de Lujo",
          category: "residential",
          description: "Instalación de un elevador de lujo personalizado en una residencia de alto nivel en Miami Beach.",
          image: "/images/rectangle2.webp",
          location: "Miami Beach, FL"
        },
        {
          id: 2,
          title: "Modernización de Edificio de Oficinas",
          category: "commercial",
          description: "Modernización completa de 5 elevadores en un edificio de oficinas de 15 pisos.",
          image: "/images/rectangle2.webp",
          location: "Brickell, Miami, FL"
        },
        {
          id: 3,
          title: "Reemplazo de Elevador de Hotel",
          category: "commercial",
          description: "Reemplazo de elevadores obsoletos por sistemas modernos y energéticamente eficientes.",
          image: "/images/rectangle2.webp",
          location: "Fort Lauderdale, FL"
        },
        {
          id: 4,
          title: "Actualización de Edificio Residencial",
          category: "modernization",
          description: "Actualización de sistemas de control e interiores de cabina en un edificio de condominios.",
          image: "/images/rectangle2.webp",
          location: "Coral Gables, FL"
        },
        {
          id: 5,
          title: "Servicio de Reparación de Emergencia",
          category: "repair",
          description: "Reparación de emergencia y restauración del servicio después de una falla del sistema.",
          image: "/images/rectangle2.webp",
          location: "West Palm Beach, FL"
        },
        {
          id: 6,
          title: "Elevador para Villa Privada",
          category: "residential",
          description: "Diseño e instalación de un elevador panorámico de vidrio en una villa de lujo.",
          image: "/images/rectangle2.webp",
          location: "Key Biscayne, FL"
        }
      ],
      viewMore: "Ver Más",
      meta: {
        title: "Proyectos | Soluciones Tech para Elevadores",
        description: "Explore nuestra cartera de proyectos de instalación, modernización y reparación de elevadores en todo el sur de Florida."
      }
    },
    fr: {
      title: "Nos Projets",
      subtitle: "Voir notre travail en action",
      categories: {
        all: "Tous les Projets",
        residential: "Résidentiel",
        commercial: "Commercial",
        modernization: "Modernisation",
        repair: "Réparation"
      },
      projects: [
        {
          id: 1,
          title: "Ascenseur pour Résidence de Luxe",
          category: "residential",
          description: "Installation d'un ascenseur de luxe personnalisé dans une résidence haut de gamme à Miami Beach.",
          image: "/images/rectangle2.webp",
          location: "Miami Beach, FL"
        },
        {
          id: 2,
          title: "Modernisation d'Immeuble de Bureaux",
          category: "commercial",
          description: "Modernisation complète de 5 ascenseurs dans un immeuble de bureaux de 15 étages.",
          image: "/images/rectangle2.webp",
          location: "Brickell, Miami, FL"
        },
        {
          id: 3,
          title: "Remplacement d'Ascenseur d'Hôtel",
          category: "commercial",
          description: "Remplacement d'ascenseurs obsolètes par des systèmes modernes et économes en énergie.",
          image: "/images/rectangle2.webp",
          location: "Fort Lauderdale, FL"
        },
        {
          id: 4,
          title: "Mise à Niveau d'Immeuble Résidentiel",
          category: "modernization",
          description: "Mise à niveau des systèmes de contrôle et des intérieurs de cabine dans un immeuble en copropriété.",
          image: "/images/rectangle2.webp",
          location: "Coral Gables, FL"
        },
        {
          id: 5,
          title: "Service de Réparation d'Urgence",
          category: "repair",
          description: "Réparation d'urgence et restauration du service après une panne du système.",
          image: "/images/rectangle2.webp",
          location: "West Palm Beach, FL"
        },
        {
          id: 6,
          title: "Ascenseur de Villa Privée",
          category: "residential",
          description: "Conception et installation d'un ascenseur panoramique en verre dans une villa de luxe.",
          image: "/images/rectangle2.webp",
          location: "Key Biscayne, FL"
        }
      ],
      viewMore: "Voir Plus",
      meta: {
        title: "Projets | Solutions Tech pour Ascenseurs",
        description: "Explorez notre portefeuille de projets d'installation, de modernisation et de réparation d'ascenseurs dans tout le sud de la Floride."
      }
    },
    de: {
      title: "Unsere Projekte",
      subtitle: "Sehen Sie unsere Arbeit in Aktion",
      categories: {
        all: "Alle Projekte",
        residential: "Wohngebäude",
        commercial: "Gewerbegebäude",
        modernization: "Modernisierung",
        repair: "Reparatur"
      },
      projects: [
        {
          id: 1,
          title: "Luxusresidenzen-Aufzug",
          category: "residential",
          description: "Installation eines maßgefertigten Luxusaufzugs in einer hochwertigen Residenz in Miami Beach.",
          image: "/images/rectangle2.webp",
          location: "Miami Beach, FL"
        },
        {
          id: 2,
          title: "Bürogebäude-Modernisierung",
          category: "commercial",
          description: "Komplette Modernisierung von 5 Aufzügen in einem 15-stöckigen Bürogebäude.",
          image: "/images/rectangle2.webp",
          location: "Brickell, Miami, FL"
        },
        {
          id: 3,
          title: "Hotel-Aufzugsersatz",
          category: "commercial",
          description: "Ersatz veralteter Aufzüge durch moderne, energieeffiziente Systeme.",
          image: "/images/rectangle2.webp",
          location: "Fort Lauderdale, FL"
        },
        {
          id: 4,
          title: "Wohngebäude-Upgrade",
          category: "modernization",
          description: "Aufrüstung von Steuerungssystemen und Kabineneinrichtungen in einem Eigentumswohnungsgebäude.",
          image: "/images/rectangle2.webp",
          location: "Coral Gables, FL"
        },
        {
          id: 5,
          title: "Notfall-Reparaturservice",
          category: "repair",
          description: "Notfallreparatur und Wiederherstellung des Betriebs nach einem Systemausfall.",
          image: "/images/rectangle2.webp",
          location: "West Palm Beach, FL"
        },
        {
          id: 6,
          title: "Privatvilla-Aufzug",
          category: "residential",
          description: "Design und Installation eines Panorama-Glasaufzugs in einer Luxusvilla.",
          image: "/images/rectangle2.webp",
          location: "Key Biscayne, FL"
        }
      ],
      viewMore: "Mehr Anzeigen",
      meta: {
        title: "Projekte | Aufzug Tech Lösungen",
        description: "Entdecken Sie unser Portfolio an Aufzugsinstallations-, Modernisierungs- und Reparaturprojekten in ganz Süd-Florida."
      }
    }
  };

  const text = translations[language] || translations.en;

  const filteredProjects = activeCategory === 'all' 
    ? text.projects 
    : text.projects.filter(project => project.category === activeCategory);

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
          {/* Filter Categories */}
          <div className="flex flex-wrap justify-center mb-12 gap-2">
            {Object.entries(text.categories).map(([key, value]) => (
              <motion.button
                key={key}
                className={`px-4 py-2 rounded-md ${
                  activeCategory === key 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
                onClick={() => setActiveCategory(key)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {value}
              </motion.button>
            ))}
          </div>
          
          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map(project => (
              <motion.div
                key={project.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
              >
                <div className="h-56 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500 flex items-center">
                      <i className="ri-map-pin-line mr-1"></i> {project.location}
                    </span>
                    <span className="text-sm px-3 py-1 bg-blue-100 text-blue-800 rounded-full">
                      {text.categories[project.category]}
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
              {text.viewMore}
            </motion.button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;