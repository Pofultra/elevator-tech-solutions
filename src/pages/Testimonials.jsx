import React, { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

const Testimonials = () => {
  const { language } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);

  const translations = {
    en: {
      title: "Customer Testimonials",
      subtitle: "What our clients say about us",
      testimonials: [
        {
          name: "David Rodriguez",
          position: "Property Manager, Oasis Tower",
          quote: "Elevator Tech Solutions has been maintaining our building's elevators for over 5 years. Their response time is exceptional, and their technicians are highly skilled and professional. They've saved us from many potential issues with their preventive maintenance approach.",
          image: "/api/placeholder/64/64",
          rating: 5
        },
        {
          name: "Laura Johnson",
          position: "Developer, Skyline Properties",
          quote: "We've worked with Elevator Tech Solutions on multiple new construction projects. Their team always delivers on time and within budget. The quality of their installations is outstanding, and their after-sales service is reliable.",
          image: "/api/placeholder/64/64",
          rating: 5
        },
        {
          name: "Carlos Mendez",
          position: "HOA President, Marina Palms",
          quote: "When our 20-year-old elevators needed modernization, Elevator Tech Solutions provided us with multiple options that fit our budget. The modernization was completed with minimal disruption to our residents, and the results have been fantastic.",
          image: "/api/placeholder/64/64",
          rating: 5
        },
        {
          name: "Jennifer Williams",
          position: "Hotel Operations Manager",
          quote: "In the hospitality industry, elevator downtime is not an option. Elevator Tech Solutions understands this and provides us with prompt service whenever needed. Their maintenance program has significantly reduced our elevator issues.",
          image: "/api/placeholder/64/64",
          rating: 4
        },
        {
          name: "Michael Taylor",
          position: "Homeowner, Key Biscayne",
          quote: "The team at Elevator Tech Solutions designed and installed a beautiful panoramic elevator in our home. The process from design to installation was smooth, and the end result exceeded our expectations.",
          image: "/api/placeholder/64/64",
          rating: 5
        }
      ],
      contactCTA: "Ready to experience our exceptional service?",
      contactButton: "Contact Us Today",
      meta: {
        title: "Testimonials | Elevator Tech Solutions",
        description: "Read what our satisfied clients have to say about our elevator installation, maintenance, and repair services in South Florida."
      }
    },
    es: {
      title: "Testimonios de Clientes",
      subtitle: "Lo que nuestros clientes dicen sobre nosotros",
      testimonials: [
        {
          name: "David Rodriguez",
          position: "Administrador de Propiedades, Oasis Tower",
          quote: "Soluciones Tech para Elevadores ha estado manteniendo los elevadores de nuestro edificio por más de 5 años. Su tiempo de respuesta es excepcional, y sus técnicos son altamente calificados y profesionales. Nos han salvado de muchos problemas potenciales con su enfoque de mantenimiento preventivo.",
          image: "/api/placeholder/64/64",
          rating: 5
        },
        {
          name: "Laura Johnson",
          position: "Desarrolladora, Skyline Properties",
          quote: "Hemos trabajado con Soluciones Tech para Elevadores en múltiples proyectos de nueva construcción. Su equipo siempre entrega a tiempo y dentro del presupuesto. La calidad de sus instalaciones es sobresaliente, y su servicio postventa es confiable.",
          image: "/api/placeholder/64/64",
          rating: 5
        },
        {
          name: "Carlos Mendez",
          position: "Presidente de HOA, Marina Palms",
          quote: "Cuando nuestros elevadores de 20 años necesitaban modernización, Soluciones Tech para Elevadores nos proporcionó múltiples opciones que se ajustaban a nuestro presupuesto. La modernización se completó con una interrupción mínima para nuestros residentes, y los resultados han sido fantásticos.",
          image: "/api/placeholder/64/64",
          rating: 5
        },
        {
          name: "Jennifer Williams",
          position: "Gerente de Operaciones de Hotel",
          quote: "En la industria hotelera, el tiempo de inactividad del elevador no es una opción. Soluciones Tech para Elevadores entiende esto y nos proporciona un servicio rápido cuando es necesario. Su programa de mantenimiento ha reducido significativamente nuestros problemas con los elevadores.",
          image: "/api/placeholder/64/64",
          rating: 4
        },
        {
          name: "Michael Taylor",
          position: "Propietario, Key Biscayne",
          quote: "El equipo de Soluciones Tech para Elevadores diseñó e instaló un hermoso elevador panorámico en nuestra casa. El proceso desde el diseño hasta la instalación fue fluido, y el resultado final superó nuestras expectativas.",
          image: "/api/placeholder/64/64",
          rating: 5
        }
      ],
      contactCTA: "¿Listo para experimentar nuestro servicio excepcional?",
      contactButton: "Contáctenos Hoy",
      meta: {
        title: "Testimonios | Soluciones Tech para Elevadores",
        description: "Lea lo que nuestros clientes satisfechos tienen que decir sobre nuestros servicios de instalación, mantenimiento y reparación de elevadores en el sur de Florida."
      }
    },
    fr: {
      title: "Témoignages de Clients",
      subtitle: "Ce que nos clients disent de nous",
      testimonials: [
        {
          name: "David Rodriguez",
          position: "Gestionnaire de Propriété, Oasis Tower",
          quote: "Solutions Tech pour Ascenseurs entretient les ascenseurs de notre bâtiment depuis plus de 5 ans. Leur temps de réponse est exceptionnel, et leurs techniciens sont hautement qualifiés et professionnels. Ils nous ont sauvés de nombreux problèmes potentiels grâce à leur approche de maintenance préventive.",
          image: "/api/placeholder/64/64",
          rating: 5
        },
        {
          name: "Laura Johnson",
          position: "Développeuse, Skyline Properties",
          quote: "Nous avons travaillé avec Solutions Tech pour Ascenseurs sur plusieurs projets de nouvelle construction. Leur équipe livre toujours à temps et dans les limites du budget. La qualité de leurs installations est exceptionnelle, et leur service après-vente est fiable.",
          image: "/api/placeholder/64/64",
          rating: 5
        },
        {
          name: "Carlos Mendez",
          position: "Président de l'Association, Marina Palms",
          quote: "Lorsque nos ascenseurs de 20 ans avaient besoin de modernisation, Solutions Tech pour Ascenseurs nous a fourni plusieurs options adaptées à notre budget. La modernisation a été réalisée avec un minimum de perturbations pour nos résidents, et les résultats ont été fantastiques.",
          image: "/api/placeholder/64/64",
          rating: 5
        },
        {
          name: "Jennifer Williams",
          position: "Responsable des Opérations Hôtelières",
          quote: "Dans l'industrie hôtelière, le temps d'arrêt des ascenseurs n'est pas une option. Solutions Tech pour Ascenseurs comprend cela et nous fournit un service rapide lorsque nécessaire. Leur programme de maintenance a considérablement réduit nos problèmes d'ascenseur.",
          image: "/api/placeholder/64/64",
          rating: 4
        },
        {
          name: "Michael Taylor",
          position: "Propriétaire, Key Biscayne",
          quote: "L'équipe de Solutions Tech pour Ascenseurs a conçu et installé un magnifique ascenseur panoramique dans notre maison. Le processus, de la conception à l'installation, a été fluide, et le résultat final a dépassé nos attentes.",
          image: "/api/placeholder/64/64",
          rating: 5
        }
      ],
      contactCTA: "Prêt à expérimenter notre service exceptionnel?",
      contactButton: "Contactez-Nous Aujourd'hui",
      meta: {
        title: "Témoignages | Solutions Tech pour Ascenseurs",
        description: "Lisez ce que nos clients satisfaits ont à dire sur nos services d'installation, d'entretien et de réparation d'ascenseurs dans le sud de la Floride."
      }
    },
    de: {
      title: "Kundenbewertungen",
      subtitle: "Was unsere Kunden über uns sagen",
      testimonials: [
        {
          name: "David Rodriguez",
          position: "Immobilienverwalter, Oasis Tower",
          quote: "Aufzug Tech Lösungen wartet seit über 5 Jahren die Aufzüge unseres Gebäudes. Ihre Reaktionszeit ist außergewöhnlich, und ihre Techniker sind hochqualifiziert und professionell. Sie haben uns mit ihrem vorbeugenden Wartungsansatz vor vielen potenziellen Problemen bewahrt.",
          image: "/api/placeholder/64/64",
          rating: 5
        },
        {
          name: "Laura Johnson",
          position: "Entwicklerin, Skyline Properties",
          quote: "Wir haben mit Aufzug Tech Lösungen an mehreren Neubauprojekten gearbeitet. Ihr Team liefert immer pünktlich und innerhalb des Budgets. Die Qualität ihrer Installationen ist hervorragend, und ihr Kundendienst ist zuverlässig.",
          image: "/api/placeholder/64/64",
          rating: 5
        },
        {
          name: "Carlos Mendez",
          position: "Vorsitzender der Eigentümergemeinschaft, Marina Palms",
          quote: "Als unsere 20 Jahre alten Aufzüge modernisiert werden mussten, bot uns Aufzug Tech Lösungen mehrere Optionen an, die in unser Budget passten. Die Modernisierung wurde mit minimaler Störung für unsere Bewohner durchgeführt, und die Ergebnisse waren fantastisch.",
          image: "/api/placeholder/64/64",
          rating: 5
        },
        {
          name: "Jennifer Williams",
          position: "Hotel-Betriebsleiterin",
          quote: "In der Hotelbranche ist Aufzugsausfallzeit keine Option. Aufzug Tech Lösungen versteht dies und bietet uns bei Bedarf prompten Service. Ihr Wartungsprogramm hat unsere Aufzugsprobleme erheblich reduziert.",
          image: "/api/placeholder/64/64",
          rating: 4
        },
        {
          name: "Michael Taylor",
          position: "Hausbesitzer, Key Biscayne",
          quote: "Das Team von Aufzug Tech Lösungen hat einen wunderschönen Panoramaaufzug in unserem Haus entworfen und installiert. Der Prozess vom Design bis zur Installation verlief reibungslos, und das Endergebnis übertraf unsere Erwartungen.",
          image: "/api/placeholder/64/64",
          rating: 5
        }
      ],
      contactCTA: "Bereit, unseren außergewöhnlichen Service zu erleben?",
      contactButton: "Kontaktieren Sie Uns Heute",
      meta: {
        title: "Kundenbewertungen | Aufzug Tech Lösungen",
        description: "Lesen Sie, was unsere zufriedenen Kunden über unsere Aufzugsinstallations-, Wartungs- und Reparaturdienste in Süd-Florida zu sagen haben."
      }
    }
  };

  const text = translations[language] || translations.en;

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === text.testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? text.testimonials.length - 1 : prevIndex - 1
    );
  };

  // Generate star ratings
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <i 
          key={i} 
          className={`ri-star-${i <= rating ? 'fill' : 'line'} text-yellow-500`}
        ></i>
      );
    }
    return stars;
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
      
      <div className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          {/* Featured Testimonial */}
          <div className="relative max-w-4xl mx-auto mb-16">
            <div className="absolute inset-0 bg-blue-600 opacity-5 rounded-lg transform rotate-1"></div>
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="relative bg-white p-8 md:p-12 rounded-lg shadow-lg"
            >
              <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                <div className="shrink-0">
                  <img 
                    src={text.testimonials[currentIndex].image} 
                    alt={text.testimonials[currentIndex].name} 
                    className="w-16 h-16 rounded-full border-4 border-blue-100"
                  />
                </div>
                <div>
                  <div className="flex mb-2">
                    {renderStars(text.testimonials[currentIndex].rating)}
                  </div>
                  <blockquote className="text-xl md:text-2xl text-gray-700 italic mb-6">
                    "{text.testimonials[currentIndex].quote}"
                  </blockquote>
                  <div>
                    <p className="font-bold text-gray-900">{text.testimonials[currentIndex].name}</p>
                    <p className="text-gray-600">{text.testimonials[currentIndex].position}</p>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-center mt-6 gap-2">
                <button 
                  onClick={prevTestimonial}
                  className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors"
                  aria-label="Previous testimonial"
                >
                  <i className="ri-arrow-left-s-line text-gray-700"></i>
                </button>
                <button 
                  onClick={nextTestimonial}
                  className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors"
                  aria-label="Next testimonial"
                >
                  <i className="ri-arrow-right-s-line text-gray-700"></i>
                </button>
              </div>
            </motion.div>
          </div>
          
          {/* Testimonial Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {text.testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className={`bg-white p-6 rounded-lg shadow-md ${
                  index === currentIndex ? 'ring-2 ring-blue-500' : ''
                }`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                whileHover={{ y: -5 }}
                onClick={() => setCurrentIndex(index)}
              >
                <div className="flex mb-4">
                  {renderStars(testimonial.rating)}
                </div>
                <blockquote className="text-gray-700 mb-4 line-clamp-4">
                  "{testimonial.quote}"
                </blockquote>
                <div className="flex items-center">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-10 h-10 rounded-full mr-3"
                  />
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-gray-600 text-sm">{testimonial.position}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Call to Action */}
          <motion.div
            className="text-center mt-16 bg-blue-50 p-8 rounded-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <h3 className="text-2xl font-bold text-blue-900 mb-4">{text.contactCTA}</h3>
            <a 
              href="/contact" 
              className="inline-block bg-blue-600 text-white py-3 px-8 rounded-md shadow-md font-bold hover:bg-blue-700 transition-colors"
            >
              {text.contactButton}
            </a>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;