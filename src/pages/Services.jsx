import React from "react";
import { useLanguage } from "../context/LanguageContext";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

const Services = () => {
  const { language } = useLanguage();

  const translations = {
    en: {
      title: "Our Services",
      subtitle: "Professional Elevator Solutions",
      intro: "We offer a comprehensive range of elevator services to meet all your needs:",
      services: [
        {
          title: "Installation",
          description: "Expert installation of new elevator systems for residential and commercial buildings.",
          icon: "ri-building-line",
          features: ["Professional team", "Quality equipment", "On-time completion", "Safety compliance"]
        },
        {
          title: "Maintenance",
          description: "Regular maintenance to ensure your elevator systems run smoothly and safely.",
          icon: "ri-tools-line",
          features: ["Preventive maintenance", "24/7 emergency service", "Detailed inspections", "Performance optimization"]
        },
        {
          title: "Repair",
          description: "Quick and efficient repair services to minimize downtime and restore functionality.",
          icon: "ri-service-line",
          features: ["Fast response times", "Genuine parts", "Expert diagnostics", "Warranty on repairs"]
        },
        {
          title: "Modernization",
          description: "Update your existing elevator systems with the latest technology and safety features.",
          icon: "ri-refresh-line",
          features: ["Energy efficiency", "Enhanced safety", "Improved performance", "Modern aesthetics"]
        },
        {
          title: "Inspection",
          description: "Thorough inspections to ensure compliance with all safety regulations and standards.",
          icon: "ri-search-line",
          features: ["Compliance verification", "Detailed reports", "Risk assessment", "Certification"]
        },
        {
          title: "Consultation",
          description: "Expert advice on elevator systems for new construction or renovation projects.",
          icon: "ri-question-answer-line",
          features: ["Design assistance", "Traffic analysis", "Cost estimation", "Project planning"]
        }
      ],
      cta: "Contact us today for a free consultation",
      buttonText: "Get in Touch",
      meta: {
        title: "Services | Elevator Tech Solutions",
        description: "Comprehensive elevator services including installation, maintenance, repair, modernization, and more - serving South Florida."
      }
    },
    es: {
      title: "Nuestros Servicios",
      subtitle: "Soluciones Profesionales para Elevadores",
      intro: "Ofrecemos una amplia gama de servicios para elevadores para satisfacer todas sus necesidades:",
      services: [
        {
          title: "Instalación",
          description: "Instalación experta de nuevos sistemas de elevadores para edificios residenciales y comerciales.",
          icon: "ri-building-line",
          features: ["Equipo profesional", "Equipamiento de calidad", "Finalización a tiempo", "Cumplimiento de seguridad"]
        },
        {
          title: "Mantenimiento",
          description: "Mantenimiento regular para garantizar que sus sistemas de elevadores funcionen sin problemas y de manera segura.",
          icon: "ri-tools-line",
          features: ["Mantenimiento preventivo", "Servicio de emergencia 24/7", "Inspecciones detalladas", "Optimización del rendimiento"]
        },
        {
          title: "Reparación",
          description: "Servicios de reparación rápidos y eficientes para minimizar el tiempo de inactividad y restaurar la funcionalidad.",
          icon: "ri-service-line",
          features: ["Tiempos de respuesta rápidos", "Piezas originales", "Diagnósticos expertos", "Garantía en reparaciones"]
        },
        {
          title: "Modernización",
          description: "Actualice sus sistemas de elevadores existentes con la última tecnología y características de seguridad.",
          icon: "ri-refresh-line",
          features: ["Eficiencia energética", "Seguridad mejorada", "Rendimiento mejorado", "Estética moderna"]
        },
        {
          title: "Inspección",
          description: "Inspecciones exhaustivas para garantizar el cumplimiento de todas las normas y estándares de seguridad.",
          icon: "ri-search-line",
          features: ["Verificación de cumplimiento", "Informes detallados", "Evaluación de riesgos", "Certificación"]
        },
        {
          title: "Consultoría",
          description: "Asesoramiento experto sobre sistemas de elevadores para proyectos de nueva construcción o renovación.",
          icon: "ri-question-answer-line",
          features: ["Asistencia en diseño", "Análisis de tráfico", "Estimación de costos", "Planificación de proyectos"]
        }
      ],
      cta: "Contáctenos hoy para una consulta gratuita",
      buttonText: "Póngase en Contacto",
      meta: {
        title: "Servicios | Soluciones Tech para Elevadores",
        description: "Servicios completos de elevadores, incluyendo instalación, mantenimiento, reparación, modernización y más - sirviendo al sur de Florida."
      }
    },
    fr: {
      title: "Nos Services",
      subtitle: "Solutions Professionnelles pour Ascenseurs",
      intro: "Nous proposons une gamme complète de services d'ascenseurs pour répondre à tous vos besoins :",
      services: [
        {
          title: "Installation",
          description: "Installation experte de nouveaux systèmes d'ascenseurs pour bâtiments résidentiels et commerciaux.",
          icon: "ri-building-line",
          features: ["Équipe professionnelle", "Équipement de qualité", "Achèvement dans les délais", "Conformité de sécurité"]
        },
        {
          title: "Entretien",
          description: "Entretien régulier pour assurer le fonctionnement fluide et sécurisé de vos systèmes d'ascenseurs.",
          icon: "ri-tools-line",
          features: ["Maintenance préventive", "Service d'urgence 24/7", "Inspections détaillées", "Optimisation des performances"]
        },
        {
          title: "Réparation",
          description: "Services de réparation rapides et efficaces pour minimiser les temps d'arrêt et restaurer la fonctionnalité.",
          icon: "ri-service-line",
          features: ["Temps de réponse rapides", "Pièces d'origine", "Diagnostics experts", "Garantie sur les réparations"]
        },
        {
          title: "Modernisation",
          description: "Mettez à jour vos systèmes d'ascenseurs existants avec les dernières technologies et fonctionnalités de sécurité.",
          icon: "ri-refresh-line",
          features: ["Efficacité énergétique", "Sécurité améliorée", "Performance améliorée", "Esthétique moderne"]
        },
        {
          title: "Inspection",
          description: "Inspections approfondies pour assurer la conformité à toutes les réglementations et normes de sécurité.",
          icon: "ri-search-line",
          features: ["Vérification de conformité", "Rapports détaillés", "Évaluation des risques", "Certification"]
        },
        {
          title: "Consultation",
          description: "Conseils d'experts sur les systèmes d'ascenseurs pour les projets de nouvelle construction ou de rénovation.",
          icon: "ri-question-answer-line",
          features: ["Assistance à la conception", "Analyse du trafic", "Estimation des coûts", "Planification de projet"]
        }
      ],
      cta: "Contactez-nous aujourd'hui pour une consultation gratuite",
      buttonText: "Prendre Contact",
      meta: {
        title: "Services | Solutions Tech pour Ascenseurs",
        description: "Services d'ascenseurs complets comprenant l'installation, l'entretien, la réparation, la modernisation et plus - desservant le sud de la Floride."
      }
    },
    de: {
      title: "Unsere Leistungen",
      subtitle: "Professionelle Aufzugslösungen",
      intro: "Wir bieten umfassende Aufzugsdienstleistungen, um alle Ihre Bedürfnisse zu erfüllen:",
      services: [
        {
          title: "Installation",
          description: "Fachkundige Installation neuer Aufzugsanlagen für Wohn- und Geschäftsgebäude.",
          icon: "ri-building-line",
          features: ["Professionelles Team", "Qualitätsausrüstung", "Termingerechte Fertigstellung", "Sicherheitskonformität"]
        },
        {
          title: "Wartung",
          description: "Regelmäßige Wartung, um sicherzustellen, dass Ihre Aufzugsanlagen reibungslos und sicher laufen.",
          icon: "ri-tools-line",
          features: ["Vorbeugende Wartung", "24/7 Notdienst", "Detaillierte Inspektionen", "Leistungsoptimierung"]
        },
        {
          title: "Reparatur",
          description: "Schnelle und effiziente Reparaturdienste, um Ausfallzeiten zu minimieren und die Funktionalität wiederherzustellen.",
          icon: "ri-service-line",
          features: ["Schnelle Reaktionszeiten", "Originalteile", "Expertendiagnostik", "Garantie auf Reparaturen"]
        },
        {
          title: "Modernisierung",
          description: "Aktualisieren Sie Ihre bestehenden Aufzugsanlagen mit neuester Technologie und Sicherheitsfunktionen.",
          icon: "ri-refresh-line",
          features: ["Energieeffizienz", "Verbesserte Sicherheit", "Verbesserte Leistung", "Moderne Ästhetik"]
        },
        {
          title: "Inspektion",
          description: "Gründliche Inspektionen, um die Einhaltung aller Sicherheitsvorschriften und -standards zu gewährleisten.",
          icon: "ri-search-line",
          features: ["Konformitätsprüfung", "Detaillierte Berichte", "Risikobewertung", "Zertifizierung"]
        },
        {
          title: "Beratung",
          description: "Fachkundige Beratung zu Aufzugsanlagen für Neubauten oder Renovierungsprojekte.",
          icon: "ri-question-answer-line",
          features: ["Designunterstützung", "Verkehrsanalyse", "Kostenschätzung", "Projektplanung"]
        }
      ],
      cta: "Kontaktieren Sie uns noch heute für eine kostenlose Beratung",
      buttonText: "Kontakt Aufnehmen",
      meta: {
        title: "Leistungen | Aufzug Tech Lösungen",
        description: "Umfassende Aufzugsdienstleistungen einschließlich Installation, Wartung, Reparatur, Modernisierung und mehr - für ganz Süd-Florida."
      }
    }
  };

  const text = translations[language] || translations.en;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

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
          <motion.p 
            className="text-center text-xl text-gray-600 mb-12 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {text.intro}
          </motion.p>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {text.services.map((service, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                variants={itemVariants}
              >
                <div className="bg-blue-600 text-white p-6">
                  <i className={`${service.icon} text-4xl`}></i>
                  <h3 className="text-2xl font-bold mt-4">{service.title}</h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-700">
                        <i className="ri-check-line text-green-500 mr-2"></i>
                        {feature}
                      </li>
                    ))}
                  </ul>
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
            <p className="text-xl text-gray-700 mb-6">{text.cta}</p>
            <a 
              href="/contact" 
              className="inline-block bg-blue-600 text-white py-3 px-8 rounded-md shadow-md font-bold hover:bg-blue-700 transition-colors"
            >
              {text.buttonText}
            </a>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Services;