import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./context/LanguageContext";
import { HelmetProvider } from "react-helmet-async";
import ScrollToTop from "./components/ScrollToTop";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Lazy load pages
const Home = React.lazy(() => import("./pages/Home"));
const About = React.lazy(() => import("./pages/About"));
const Projects = React.lazy(() => import("./pages/Projects"));
const Contact = React.lazy(() => import("./pages/Contact"));
const Services = React.lazy(() => import("./pages/Services"));
const Brands = React.lazy(() => import("./pages/Brands"));
const Testimonials = React.lazy(() => import("./pages/Testimonials"));

// Styles
import "./App.css";
import "./index.css";

function App() {
  return (
    <HelmetProvider>
      <LanguageProvider>
      <Router>
          <ScrollToTop />
          <div className="flex flex-col min-h-screen bg-gray-100 text-gray-900">
            <Navbar />
            <main className="flex-grow">
              <Suspense
                fallback={
                  <div className="h-screen flex items-center justify-center">
                    Loading...
                  </div>
                }
              >
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/services" element={<Services />} />
                  <Route path="/projects" element={<Projects />} />
                  <Route path="/brands" element={<Brands />} />
                  <Route path="/testimonials" element={<Testimonials />} />
                  <Route path="/contact" element={<Contact />} />
                </Routes>
              </Suspense>
            </main>
            <Footer />
          </div>
        </Router>
      </LanguageProvider>
    </HelmetProvider>
  );
}

export default App;
