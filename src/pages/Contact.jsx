import React, { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

const Contact = () => {
  const { language } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  const translations = {
    en: {
      title: "Contact Us",
      subtitle: "We're here to help with all your elevator needs",
      form: {
        heading: "Send Us a Message",
        name: "Your Name",
        email: "Email Address",
        phone: "Phone Number",
        service: "Service Required",
        serviceOptions: {
          select: "Select a Service",
          installation: "New Installation",
          maintenance: "Maintenance",
          repair: "Repair",
          modernization: "Modernization",
          inspection: "Inspection",
          consultation: "Consultation",
          other: "Other"
        },
        message: "Your Message",
        button: "Submit Request",
        buttonSending: "Sending...",
        required: "Required",
        success: "Thank you! Your message has been sent successfully. We'll be in touch shortly.",
        error: "There was an error sending your message. Please try again or contact us directly."
      },
      contact: {
        heading: "Contact Information",
        address: {
          title: "Address",
          line: "123 Main Street, Suite 456, Miami, FL 33101"
        },
        phone: {
          title: "Phone",
          line: "+1 (305) 555-1234"
        },
        email: {
          title: "Email",
          line: "info@elevatortechsolutions.com"
        },
        hours: {
          title: "Business Hours",
          line1: "Monday-Friday: 8:00 AM - 6:00 PM",
          line2: "Saturday: 9:00 AM - 2:00 PM",
          line3: "Sunday: Closed",
          line4: "24/7 Emergency Service Available"
        }
      },
      meta: {
        title: "Contact Us | Elevator Tech Solutions",
        description: "Get in touch with Elevator Tech Solutions for all your elevator installation, maintenance, and repair needs in South Florida."
      }
    },
    es: {
      title: "Contáctenos",
      subtitle: "Estamos aquí para ayudarle con todas sus necesidades de elevadores",
      form: {
        heading: "Envíenos un Mensaje",
        name: "Su Nombre",
        email: "Dirección de Correo Electrónico",
        phone: "Número de Teléfono",
        service: "Servicio Requerido",
        serviceOptions: {
          select: "Seleccione un Servicio",
          installation: "Nueva Instalación",
          maintenance: "Mantenimiento",
          repair: "Reparación",
          modernization: "Modernización",
          inspection: "Inspección",
          consultation: "Consultoría",
          other: "Otro"
        },
        message: "Su Mensaje",
        button: "Enviar Solicitud",
        buttonSending: "Enviando...",
        required: "Requerido",
        success: "¡Gracias! Su mensaje ha sido enviado con éxito. Nos pondremos en contacto en breve.",
        error: "Hubo un error al enviar su mensaje. Por favor, inténtelo de nuevo o contáctenos directamente."
      },
      contact: {
        heading: "Información de Contacto",
        address: {
          title: "Dirección",
          line: "123 Main Street, Suite 456, Miami, FL 33101"
        },
        phone: {
          title: "Teléfono",
          line: "+1 (305) 555-1234"
        },
        email: {
          title: "Correo Electrónico",
          line: "info@elevatortechsolutions.com"
        },
        hours: {
          title: "Horario de Atención",
          line1: "Lunes-Viernes: 8:00 AM - 6:00 PM",
          line2: "Sábado: 9:00 AM - 2:00 PM",
          line3: "Domingo: Cerrado",
          line4: "Servicio de Emergencia 24/7 Disponible"
        }
      },
      meta: {
        title: "Contáctenos | Soluciones Tech para Elevadores",
        description: "Póngase en contacto con Soluciones Tech para Elevadores para todas sus necesidades de instalación, mantenimiento y reparación de elevadores en el sur de Florida."
      }
    },
    fr: {
      title: "Contactez-Nous",
      subtitle: "Nous sommes là pour vous aider avec tous vos besoins en ascenseurs",
      form: {
        heading: "Envoyez-nous un Message",
        name: "Votre Nom",
        email: "Adresse E-mail",
        phone: "Numéro de Téléphone",
        service: "Service Requis",
        serviceOptions: {
          select: "Sélectionnez un Service",
          installation: "Nouvelle Installation",
          maintenance: "Entretien",
          repair: "Réparation",
          modernization: "Modernisation",
          inspection: "Inspection",
          consultation: "Consultation",
          other: "Autre"
        },
        message: "Votre Message",
        button: "Soumettre la Demande",
        buttonSending: "Envoi en cours...",
        required: "Requis",
        success: "Merci! Votre message a été envoyé avec succès. Nous vous contacterons bientôt.",
        error: "Une erreur s'est produite lors de l'envoi de votre message. Veuillez réessayer ou nous contacter directement."
      },
      contact: {
        heading: "Informations de Contact",
        address: {
          title: "Adresse",
          line: "123 Main Street, Suite 456, Miami, FL 33101"
        },
        phone: {
          title: "Téléphone",
          line: "+1 (305) 555-1234"
        },
        email: {
          title: "E-mail",
          line: "info@elevatortechsolutions.com"
        },
        hours: {
          title: "Heures d'Ouverture",
          line1: "Lundi-Vendredi: 8:00 AM - 6:00 PM",
          line2: "Samedi: 9:00 AM - 2:00 PM",
          line3: "Dimanche: Fermé",
          line4: "Service d'Urgence 24/7 Disponible"
        }
      },
      meta: {
        title: "Contactez-Nous | Solutions Tech pour Ascenseurs",
        description: "Contactez Solutions Tech pour Ascenseurs pour tous vos besoins d'installation, d'entretien et de réparation d'ascenseurs dans le sud de la Floride."
      }
    },
    de: {
      title: "Kontaktieren Sie Uns",
      subtitle: "Wir sind für alle Ihre Aufzugsbedürfnisse da",
      form: {
        heading: "Senden Sie uns eine Nachricht",
        name: "Ihr Name",
        email: "E-Mail-Adresse",
        phone: "Telefonnummer",
        service: "Benötigter Service",
        serviceOptions: {
          select: "Wählen Sie einen Service",
          installation: "Neuinstallation",
          maintenance: "Wartung",
          repair: "Reparatur",
          modernization: "Modernisierung",
          inspection: "Inspektion",
          consultation: "Beratung",
          other: "Andere"
        },
        message: "Ihre Nachricht",
        button: "Anfrage Senden",
        buttonSending: "Wird gesendet...",
        required: "Erforderlich",
        success: "Vielen Dank! Ihre Nachricht wurde erfolgreich gesendet. Wir werden uns in Kürze bei Ihnen melden.",
        error: "Beim Senden Ihrer Nachricht ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut oder kontaktieren Sie uns direkt."
      },
      contact: {
        heading: "Kontaktinformationen",
        address: {
          title: "Adresse",
          line: "123 Main Street, Suite 456, Miami, FL 33101"
        },
        phone: {
          title: "Telefon",
          line: "+1 (305) 555-1234"
        },
        email: {
          title: "E-Mail",
          line: "info@elevatortechsolutions.com"
        },
        hours: {
          title: "Geschäftszeiten",
          line1: "Montag-Freitag: 8:00 - 18:00 Uhr",
          line2: "Samstag: 9:00 - 14:00 Uhr",
          line3: "Sonntag: Geschlossen",
          line4: "24/7 Notdienst Verfügbar"
        }
      },
      meta: {
        title: "Kontaktieren Sie Uns | Aufzug Tech Lösungen",
        description: "Nehmen Sie Kontakt mit Aufzug Tech Lösungen für alle Ihre Aufzugsinstallations-, Wartungs- und Reparaturbedürfnisse in Süd-Florida auf."
      }
    }
  };

  const text = translations[language] || translations.en;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitSuccess(false);
    setSubmitError(false);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: ""
      });
    }, 1500);
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-lg shadow-lg p-8"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">{text.form.heading}</h2>
              
              {submitSuccess && (
                <div className="bg-green-50 border border-green-200 text-green-800 p-4 rounded-md mb-6">
                  {text.form.success}
                </div>
              )}
              
              {submitError && (
                <div className="bg-red-50 border border-red-200 text-red-800 p-4 rounded-md mb-6">
                  {text.form.error}
                </div>
              )}
              
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                    {text.form.name} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                      {text.form.email} <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                      {text.form.phone}
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
                
                <div className="mb-4">
                  <label htmlFor="service" className="block text-gray-700 font-medium mb-2">
                    {text.form.service} <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">{text.form.serviceOptions.select}</option>
                    <option value="installation">{text.form.serviceOptions.installation}</option>
                    <option value="maintenance">{text.form.serviceOptions.maintenance}</option>
                    <option value="repair">{text.form.serviceOptions.repair}</option>
                    <option value="modernization">{text.form.serviceOptions.modernization}</option>
                    <option value="inspection">{text.form.serviceOptions.inspection}</option>
                    <option value="consultation">{text.form.serviceOptions.consultation}</option>
                    <option value="other">{text.form.serviceOptions.other}</option>
                  </select>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                    {text.form.message} <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 text-white py-3 px-6 rounded-md font-bold hover:bg-blue-700 transition-colors disabled:bg-blue-400"
                >
                  {isSubmitting ? text.form.buttonSending : text.form.button}
                </button>
              </form>
            </motion.div>
            
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="bg-blue-900 text-white rounded-lg shadow-lg p-8 h-full">
                <h2 className="text-2xl font-bold mb-8">{text.contact.heading}</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="shrink-0 bg-blue-800 p-3 rounded-full mr-4">
                      <i className="ri-map-pin-line text-xl"></i>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">{text.contact.address.title}</h3>
                      <p className="text-blue-100 mt-1">{text.contact.address.line}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="shrink-0 bg-blue-800 p-3 rounded-full mr-4">
                      <i className="ri-phone-line text-xl"></i>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">{text.contact.phone.title}</h3>
                      <p className="text-blue-100 mt-1">{text.contact.phone.line}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="shrink-0 bg-blue-800 p-3 rounded-full mr-4">
                      <i className="ri-mail-line text-xl"></i>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">{text.contact.email.title}</h3>
                      <p className="text-blue-100 mt-1">{text.contact.email.line}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="shrink-0 bg-blue-800 p-3 rounded-full mr-4">
                      <i className="ri-time-line text-xl"></i>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">{text.contact.hours.title}</h3>
                      <p className="text-blue-100 mt-1">{text.contact.hours.line1}</p>
                      <p className="text-blue-100">{text.contact.hours.line2}</p>
                      <p className="text-blue-100">{text.contact.hours.line3}</p>
                      <p className="text-blue-100 font-semibold mt-2">{text.contact.hours.line4}</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-10 flex justify-center space-x-4">
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="bg-blue-800 p-3 rounded-full hover:bg-blue-700 transition-colors">
                    <i className="ri-facebook-fill text-xl"></i>
                  </a>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="bg-blue-800 p-3 rounded-full hover:bg-blue-700 transition-colors">
                    <i className="ri-twitter-fill text-xl"></i>
                  </a>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="bg-blue-800 p-3 rounded-full hover:bg-blue-700 transition-colors">
                    <i className="ri-instagram-line text-xl"></i>
                  </a>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="bg-blue-800 p-3 rounded-full hover:bg-blue-700 transition-colors">
                    <i className="ri-linkedin-fill text-xl"></i>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;