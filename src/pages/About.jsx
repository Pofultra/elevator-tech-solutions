import React from "react";
import { useLanguage } from "../context/LanguageContext";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

const About = () => {
  const { language } = useLanguage();

  const translations = {
    en: {
      title: "About Us",
      subtitle: "Professional Elevator Solutions",
      history: "Our History",
      historyText: "Founded in 2010, Elevator Tech Solutions has grown from a small maintenance company to a full-service elevator solution provider throughout South Florida. With over 15 years of industry experience, we've built our reputation on reliability, expertise, and customer satisfaction.",
      mission: "Our Mission",
      missionText: "Our mission is to provide safe, efficient, and reliable elevator solutions that exceed industry standards while delivering exceptional service to our clients.",
      team: "Our Team",
      teamText: "Our team consists of certified technicians, experienced engineers, and dedicated support staff who work together to ensure every project is completed to the highest standards.",
      values: "Our Values",
      valuesList: [
        { title: "Safety", description: "Safety is our top priority in every project we undertake." },
        { title: "Quality", description: "We use only the finest materials and cutting-edge technology." },
        { title: "Reliability", description: "Our team is committed to being there when you need us." },
        { title: "Innovation", description: "We continuously research and implement the latest advancements." }
      ],
      meta: {
        title: "About Us | Elevator Tech Solutions",
        description: "Learn about Elevator Tech Solutions, our history, mission, and values as South Florida's premier elevator service provider."
      }
    },
    es: {
      title: "Sobre Nosotros",
      subtitle: "Soluciones Profesionales para Elevadores",
      history: "Nuestra Historia",
      historyText: "Fundada en 2010, Soluciones Tech para Elevadores ha crecido de una pequeña empresa de mantenimiento a un proveedor completo de soluciones para elevadores en todo el sur de Florida. Con más de 15 años de experiencia en la industria, hemos construido nuestra reputación en confiabilidad, experiencia y satisfacción del cliente.",
      mission: "Nuestra Misión",
      missionText: "Nuestra misión es proporcionar soluciones de elevadores seguras, eficientes y confiables que excedan los estándares de la industria mientras ofrecemos un servicio excepcional a nuestros clientes.",
      team: "Nuestro Equipo",
      teamText: "Nuestro equipo consta de técnicos certificados, ingenieros experimentados y personal de apoyo dedicado que trabajan juntos para garantizar que cada proyecto se complete con los más altos estándares.",
      values: "Nuestros Valores",
      valuesList: [
        { title: "Seguridad", description: "La seguridad es nuestra máxima prioridad en cada proyecto que emprendemos." },
        { title: "Calidad", description: "Utilizamos solo los mejores materiales y tecnología de vanguardia." },
        { title: "Confiabilidad", description: "Nuestro equipo está comprometido a estar allí cuando nos necesite." },
        { title: "Innovación", description: "Continuamente investigamos e implementamos los últimos avances." }
      ],
      meta: {
        title: "Sobre Nosotros | Soluciones Tech para Elevadores",
        description: "Conozca más sobre Soluciones Tech para Elevadores, nuestra historia, misión y valores como el principal proveedor de servicios para elevadores en el sur de Florida."
      }
    },
    fr: {
      title: "À Propos de Nous",
      subtitle: "Solutions Professionnelles pour Ascenseurs",
      history: "Notre Histoire",
      historyText: "Fondée en 2010, Solutions Tech pour Ascenseurs est passée d'une petite entreprise de maintenance à un fournisseur complet de solutions d'ascenseurs dans tout le sud de la Floride. Avec plus de 15 ans d'expérience dans l'industrie, nous avons bâti notre réputation sur la fiabilité, l'expertise et la satisfaction du client.",
      mission: "Notre Mission",
      missionText: "Notre mission est de fournir des solutions d'ascenseurs sûres, efficaces et fiables qui dépassent les normes de l'industrie tout en offrant un service exceptionnel à nos clients.",
      team: "Notre Équipe",
      teamText: "Notre équipe est composée de techniciens certifiés, d'ingénieurs expérimentés et de personnel de soutien dévoué qui travaillent ensemble pour garantir que chaque projet est réalisé selon les normes les plus élevées.",
      values: "Nos Valeurs",
      valuesList: [
        { title: "Sécurité", description: "La sécurité est notre priorité absolue dans chaque projet que nous entreprenons." },
        { title: "Qualité", description: "Nous utilisons uniquement les meilleurs matériaux et les technologies de pointe." },
        { title: "Fiabilité", description: "Notre équipe s'engage à être présente lorsque vous en avez besoin." },
        { title: "Innovation", description: "Nous recherchons et mettons en œuvre continuellement les dernières avancées." }
      ],
      meta: {
        title: "À Propos de Nous | Solutions Tech pour Ascenseurs",
        description: "Découvrez Solutions Tech pour Ascenseurs, notre histoire, notre mission et nos valeurs en tant que premier fournisseur de services d'ascenseurs du sud de la Floride."
      }
    },
    de: {
      title: "Über Uns",
      subtitle: "Professionelle Aufzugslösungen",
      history: "Unsere Geschichte",
      historyText: "Aufzug Tech Lösungen wurde 2010 gegründet und hat sich von einem kleinen Wartungsunternehmen zu einem Komplettanbieter für Aufzugslösungen in ganz Süd-Florida entwickelt. Mit über 15 Jahren Branchenerfahrung haben wir unseren Ruf auf Zuverlässigkeit, Fachwissen und Kundenzufriedenheit aufgebaut.",
      mission: "Unsere Mission",
      missionText: "Unsere Mission ist es, sichere, effiziente und zuverlässige Aufzugslösungen anzubieten, die die Branchenstandards übertreffen und gleichzeitig einen außergewöhnlichen Service für unsere Kunden bieten.",
      team: "Unser Team",
      teamText: "Unser Team besteht aus zertifizierten Technikern, erfahrenen Ingenieuren und engagierten Mitarbeitern, die zusammenarbeiten, um sicherzustellen, dass jedes Projekt nach höchsten Standards abgeschlossen wird.",
      values: "Unsere Werte",
      valuesList: [
        { title: "Sicherheit", description: "Sicherheit hat bei jedem unserer Projekte oberste Priorität." },
        { title: "Qualität", description: "Wir verwenden nur die besten Materialien und modernste Technologie." },
        { title: "Zuverlässigkeit", description: "Unser Team ist bestrebt, da zu sein, wenn Sie uns brauchen." },
        { title: "Innovation", description: "Wir erforschen und implementieren kontinuierlich die neuesten Fortschritte." }
      ],
      meta: {
        title: "Über Uns | Aufzug Tech Lösungen",
        description: "Erfahren Sie mehr über Aufzug Tech Lösungen, unsere Geschichte, Mission und Werte als führender Aufzugsdienstleister in Süd-Florida."
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
      
      <div className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">{text.history}</h2>
              <p className="text-gray-600 mb-6">{text.historyText}</p>
              
              <h2 className="text-3xl font-bold text-gray-900 mb-4">{text.mission}</h2>
              <p className="text-gray-600">{text.missionText}</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">{text.team}</h2>
              <p className="text-gray-600 mb-6">{text.teamText}</p>
              
              <h2 className="text-3xl font-bold text-gray-900 mb-4">{text.values}</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {text.valuesList.map((value, index) => (
                  <motion.div
                    key={index}
                    className="bg-gray-100 p-4 rounded-lg shadow-sm"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  >
                    <h3 className="text-xl font-bold text-blue-600 mb-2">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
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