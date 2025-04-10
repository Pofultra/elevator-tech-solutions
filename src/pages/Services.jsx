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
          title: "Elevator Repairs",
          description: "Fast and reliable repair services for all types of elevator systems to minimize downtime.",
          icon: "ri-tools-line",
          features: ["24/7 emergency response", "Complete system diagnosis", "Genuine replacement parts", "All elevator brands serviced"]
        },
        {
          title: "Elevator Certification",
          description: "Professional certification services to ensure your elevators meet all local and state regulations.",
          icon: "ri-award-line",
          features: ["Annual inspections", "Documentation preparation", "Code compliance verification", "Safety certification"]
        },
        {
          title: "Violations Corrections",
          description: "Expert solutions to address and resolve elevator code violations promptly and effectively.",
          icon: "ri-error-warning-line",
          features: ["Comprehensive violation assessment", "Correction plan development", "Swift implementation", "Regulatory compliance"]
        },
        {
          title: "Elevator Consulting",
          description: "Professional guidance for elevator systems in new construction or renovation projects.",
          icon: "ri-question-answer-line",
          features: ["System recommendations", "Budget planning", "Technical specifications", "Project oversight"]
        },
        {
          title: "Door Lock Monitoring System Installation",
          description: "Advanced door lock monitoring systems for enhanced elevator safety and security.",
          icon: "ri-door-lock-box-line",
          features: ["Code-compliant systems", "Real-time monitoring", "Malfunction alerts", "Enhanced passenger safety"]
        },
        {
          title: "3D Proximity Edge Installation",
          description: "State-of-the-art 3D proximity edge technology for improved door safety and operation.",
          icon: "ri-sensor-line",
          features: ["Advanced obstacle detection", "Reduced door incidents", "Seamless integration", "Extended equipment life"]
        },
        {
          title: "Electrical Work For Elevator Modernizations",
          description: "Comprehensive electrical services specifically for elevator system modernizations.",
          icon: "ri-plug-line",
          features: ["Wiring upgrades", "Control system updates", "Power supply modifications", "Code-compliant installations"]
        },
        {
          title: "Upgrade Electrical Main Disconnect In Machine Room",
          description: "Professional upgrades for machine room electrical disconnects to improve safety and reliability.",
          icon: "ri-flashlight-line",
          features: ["Modern safety features", "Code compliance", "Improved maintenance access", "Enhanced system protection"]
        },
        {
          title: "Door Equipment Replacement",
          description: "Complete replacement services for worn or outdated elevator door equipment.",
          icon: "ri-door-open-line",
          features: ["High-quality components", "Improved door operation", "Reduced noise levels", "Enhanced reliability"]
        },
        
        {
          title: "GAL Door Operator Upgrade",
          description: "Specialized upgrades for GAL door operators to enhance performance and reliability.",
          icon: "ri-settings-line",
          features: ["Latest GAL technology", "Improved door timing", "Reduced mechanical wear", "Enhanced passenger experience"]
        },
        {
          title: "Cellular Phone Installation",
          description: "Installation of reliable cellular phone systems in elevators for emergency communications.",
          icon: "ri-phone-line",
          features: ["Code-compliant systems", "Clear communication", "Reliable connectivity", "24/7 monitoring capability"]
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
          title: "Reparación de Elevadores",
          description: "Servicios de reparación rápidos y confiables para todo tipo de sistemas de elevadores para minimizar el tiempo de inactividad.",
          icon: "ri-tools-line",
          features: ["Respuesta de emergencia 24/7", "Diagnóstico completo del sistema", "Piezas de repuesto genuinas", "Servicio para todas las marcas de elevadores"]
        },
        {
          title: "Certificación de Elevadores",
          description: "Servicios profesionales de certificación para garantizar que sus elevadores cumplan con todas las regulaciones locales y estatales.",
          icon: "ri-certified-line",
          features: ["Inspecciones anuales", "Preparación de documentación", "Verificación de cumplimiento de códigos", "Certificación de seguridad"]
        },
        {
          title: "Correcciones de Violaciones",
          description: "Soluciones expertas para abordar y resolver violaciones de código de elevadores de manera rápida y efectiva.",
          icon: "ri-error-warning-line",
          features: ["Evaluación integral de violaciones", "Desarrollo de plan de corrección", "Implementación rápida", "Cumplimiento normativo"]
        },
        {
          title: "Consultoría de Elevadores",
          description: "Orientación profesional para sistemas de elevadores en proyectos de nueva construcción o renovación.",
          icon: "ri-question-answer-line",
          features: ["Recomendaciones de sistemas", "Planificación de presupuesto", "Especificaciones técnicas", "Supervisión de proyectos"]
        },
        {
          title: "Instalación de Sistema de Monitoreo de Cerraduras de Puertas",
          description: "Sistemas avanzados de monitoreo de cerraduras de puertas para mejorar la seguridad de los elevadores.",
          icon: "ri-door-lock-box-line",
          features: ["Sistemas conformes con los códigos", "Monitoreo en tiempo real", "Alertas de mal funcionamiento", "Mayor seguridad para pasajeros"]
        },
        {
          title: "Instalación de Bordes de Proximidad 3D",
          description: "Tecnología de vanguardia de bordes de proximidad 3D para mejorar la seguridad y operación de las puertas.",
          icon: "ri-sensor-line",
          features: ["Detección avanzada de obstáculos", "Reducción de incidentes con puertas", "Integración perfecta", "Mayor vida útil del equipo"]
        },
        {
          title: "Trabajo Eléctrico para Modernizaciones de Elevadores",
          description: "Servicios eléctricos integrales específicamente para modernizaciones de sistemas de elevadores.",
          icon: "ri-plug-line",
          features: ["Actualizaciones de cableado", "Actualizaciones de sistemas de control", "Modificaciones de suministro eléctrico", "Instalaciones conformes con códigos"]
        },
        {
          title: "Actualización de Desconexión Eléctrica Principal en Sala de Máquinas",
          description: "Actualizaciones profesionales para desconexiones eléctricas de salas de máquinas para mejorar la seguridad y confiabilidad.",
          icon: "ri-switch-line",
          features: ["Características de seguridad modernas", "Cumplimiento de códigos", "Mejor acceso para mantenimiento", "Protección mejorada del sistema"]
        },
        {
          title: "Reemplazo de Equipos de Puertas",
          description: "Servicios completos de reemplazo para equipos de puertas de elevadores desgastados u obsoletos.",
          icon: "ri-door-open-line",
          features: ["Componentes de alta calidad", "Operación mejorada de puertas", "Niveles de ruido reducidos", "Confiabilidad mejorada"]
        },
        
        {
          title: "Actualización de Operadores de Puertas GAL",
          description: "Actualizaciones especializadas para operadores de puertas GAL para mejorar el rendimiento y la confiabilidad.",
          icon: "ri-settings-line",
          features: ["Última tecnología GAL", "Temporización de puertas mejorada", "Desgaste mecánico reducido", "Experiencia mejorada para pasajeros"]
        },
        {
          title: "Instalación de Teléfono Celular",
          description: "Instalación de sistemas de teléfono celular confiables en elevadores para comunicaciones de emergencia.",
          icon: "ri-phone-line",
          features: ["Sistemas conformes con códigos", "Comunicación clara", "Conectividad confiable", "Capacidad de monitoreo 24/7"]
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
          title: "Réparation d'Ascenseurs",
          description: "Services de réparation rapides et fiables pour tous types de systèmes d'ascenseurs afin de minimiser les temps d'arrêt.",
          icon: "ri-tools-line",
          features: ["Réponse d'urgence 24/7", "Diagnostic complet du système", "Pièces de rechange d'origine", "Service pour toutes marques d'ascenseurs"]
        },
        {
          title: "Certification d'Ascenseurs",
          description: "Services de certification professionnels pour garantir que vos ascenseurs respectent toutes les réglementations locales et nationales.",
          icon: "ri-certified-line",
          features: ["Inspections annuelles", "Préparation de documentation", "Vérification de conformité aux codes", "Certification de sécurité"]
        },
        {
          title: "Corrections de Violations",
          description: "Solutions expertes pour traiter et résoudre rapidement et efficacement les violations de code d'ascenseur.",
          icon: "ri-error-warning-line",
          features: ["Évaluation complète des violations", "Développement de plan de correction", "Mise en œuvre rapide", "Conformité réglementaire"]
        },
        {
          title: "Consultation d'Ascenseurs",
          description: "Conseil professionnel pour les systèmes d'ascenseurs dans les projets de construction nouvelle ou de rénovation.",
          icon: "ri-question-answer-line",
          features: ["Recommandations de systèmes", "Planification budgétaire", "Spécifications techniques", "Supervision de projet"]
        },
        {
          title: "Installation de Système de Surveillance de Verrouillage de Porte",
          description: "Systèmes avancés de surveillance de verrouillage de porte pour une sécurité et une sûreté accrues des ascenseurs.",
          icon: "ri-door-lock-box-line",
          features: ["Systèmes conformes aux codes", "Surveillance en temps réel", "Alertes de dysfonctionnement", "Sécurité accrue des passagers"]
        },
        {
          title: "Installation de Bords de Proximité 3D",
          description: "Technologie de pointe de bords de proximité 3D pour améliorer la sécurité et le fonctionnement des portes.",
          icon: "ri-sensor-line",
          features: ["Détection avancée d'obstacles", "Réduction des incidents de porte", "Intégration transparente", "Durée de vie prolongée de l'équipement"]
        },
        {
          title: "Travaux Électriques Pour Modernisations d'Ascenseurs",
          description: "Services électriques complets spécifiquement pour les modernisations de systèmes d'ascenseurs.",
          icon: "ri-plug-line",
          features: ["Mises à niveau de câblage", "Mises à jour de système de contrôle", "Modifications d'alimentation électrique", "Installations conformes aux codes"]
        },
        {
          title: "Mise à Niveau de la Déconnexion Électrique Principale en Salle des Machines",
          description: "Mises à niveau professionnelles pour les déconnexions électriques en salle des machines afin d'améliorer la sécurité et la fiabilité.",
          icon: "ri-switch-line",
          features: ["Caractéristiques de sécurité modernes", "Conformité aux codes", "Meilleur accès pour l'entretien", "Protection améliorée du système"]
        },
        {
          title: "Remplacement d'Équipement de Porte",
          description: "Services complets de remplacement pour les équipements de porte d'ascenseur usés ou obsolètes.",
          icon: "ri-door-open-line",
          features: ["Composants de haute qualité", "Fonctionnement amélioré des portes", "Niveaux de bruit réduits", "Fiabilité améliorée"]
        },
        {
          title: "Installation de Bords de Sécurité (Proximité)",
          description: "Installation de bords de sécurité à proximité pour prévenir les accidents de fermeture de porte et améliorer le fonctionnement.",
          icon: "ri-safe-line",
          features: ["Technologie avancée de capteurs", "Détection sans contact", "Entretien facile", "Durée de vie prolongée"]
        },
        {
          title: "Mise à Niveau d'Opérateurs de Porte GAL",
          description: "Mises à niveau spécialisées pour les opérateurs de porte GAL afin d'améliorer les performances et la fiabilité.",
          icon: "ri-settings-line",
          features: ["Dernière technologie GAL", "Synchronisation améliorée des portes", "Usure mécanique réduite", "Expérience passager améliorée"]
        },
        {
          title: "Installation de Téléphone Cellulaire",
          description: "Installation de systèmes de téléphone cellulaire fiables dans les ascenseurs pour les communications d'urgence.",
          icon: "ri-phone-line",
          features: ["Systèmes conformes aux codes", "Communication claire", "Connectivité fiable", "Capacité de surveillance 24/7"]
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
          title: "Aufzugsreparaturen",
          description: "Schnelle und zuverlässige Reparaturdienste für alle Arten von Aufzugsanlagen zur Minimierung von Ausfallzeiten.",
          icon: "ri-tools-line",
          features: ["24/7 Notfalldienst", "Vollständige Systemdiagnose", "Original-Ersatzteile", "Service für alle Aufzugsmarken"]
        },
        {
          title: "Aufzugszertifizierung",
          description: "Professionelle Zertifizierungsdienste, um sicherzustellen, dass Ihre Aufzüge allen lokalen und staatlichen Vorschriften entsprechen.",
          icon: "ri-certified-line",
          features: ["Jährliche Inspektionen", "Dokumentationsvorbereitung", "Überprüfung der Einhaltung von Vorschriften", "Sicherheitszertifizierung"]
        },
        {
          title: "Behebung von Verstößen",
          description: "Fachmännische Lösungen zur schnellen und effektiven Behebung von Aufzugscode-Verstößen.",
          icon: "ri-error-warning-line",
          features: ["Umfassende Bewertung von Verstößen", "Entwicklung von Korrekturplänen", "Schnelle Umsetzung", "Einhaltung von Vorschriften"]
        },
        {
          title: "Aufzugsberatung",
          description: "Professionelle Beratung für Aufzugsanlagen bei Neubauten oder Renovierungsprojekten.",
          icon: "ri-question-answer-line",
          features: ["Systemempfehlungen", "Budgetplanung", "Technische Spezifikationen", "Projektüberwachung"]
        },
        {
          title: "Installation von Türverriegelungsüberwachungssystemen",
          description: "Fortschrittliche Türverriegelungsüberwachungssysteme für erhöhte Aufzugssicherheit.",
          icon: "ri-door-lock-box-line",
          features: ["Vorschriftskonforme Systeme", "Echtzeit-Überwachung", "Fehlfunktionsalarme", "Verbesserte Fahrgastsicherheit"]
        },
        {
          title: "3D-Näherungskanten-Installation",
          description: "Hochmoderne 3D-Näherungskantentechnologie für verbesserte Türsicherheit und -funktion.",
          icon: "ri-sensor-line",
          features: ["Fortschrittliche Hinderniserkennung", "Reduzierte Türvorfälle", "Nahtlose Integration", "Verlängerte Geräte-Lebensdauer"]
        },
        {
          title: "Elektroarbeiten für Aufzugsmodernisierungen",
          description: "Umfassende Elektrodienstleistungen speziell für Aufzugssystemmodernisierungen.",
          icon: "ri-plug-line",
          features: ["Verkabelungs-Upgrades", "Steuerungssystem-Updates", "Stromversorgungsänderungen", "Vorschriftskonforme Installationen"]
        },
        {
          title: "Upgrade der elektrischen Hauptabschaltung im Maschinenraum",
          description: "Professionelle Upgrades für elektrische Abschaltungen im Maschinenraum zur Verbesserung der Sicherheit und Zuverlässigkeit.",
          icon: "ri-switch-line",
          features: ["Moderne Sicherheitsfunktionen", "Vorschriftskonformität", "Verbesserter Wartungszugang", "Erhöhter Systemschutz"]
        },
        {
          title: "Türausrüstungsersatz",
          description: "Komplette Ersatzdienste für verschlissene oder veraltete Aufzugstürausrüstung.",
          icon: "ri-door-open-line",
          features: ["Hochwertige Komponenten", "Verbesserte Türfunktion", "Reduzierte Geräuschpegel", "Erhöhte Zuverlässigkeit"]
        },
        {
          title: "Sicherheitskanten-Installation (Näherung)",
          description: "Installation von Näherungssicherheitskanten zur Verhinderung von Türschließunfällen und zur Verbesserung des Betriebs.",
          icon: "ri-safe-line",
          features: ["Fortschrittliche Sensortechnologie", "Berührungslose Erkennung", "Einfache Wartung", "Verlängerte Lebensdauer"]
        },
        {
          title: "GAL-Türantrieb-Upgrade",
          description: "Spezialisierte Upgrades für GAL-Türantriebe zur Verbesserung der Leistung und Zuverlässigkeit.",
          icon: "ri-settings-line",
          features: ["Neueste GAL-Technologie", "Verbesserte Türzeiten", "Reduzierter mechanischer Verschleiß", "Verbesserte Fahrgasterfahrung"]
        },
        {
          title: "Mobiltelefon-Installation",
          description: "Installation zuverlässiger Mobiltelefonsysteme in Aufzügen für Notfallkommunikation.",
          icon: "ri-phone-line",
          features: ["Vorschriftskonforme Systeme", "Klare Kommunikation", "Zuverlässige Konnektivität", "24/7-Überwachungsfähigkeit"]
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