import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./context/LanguageContext";
import { HelmetProvider } from "react-helmet-async";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import Brands from "./pages/Brands";
import Testimonials from "./pages/Testimonials";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Styles
import "./App.css";
import "./index.css";

function App() {
  return (
    <HelmetProvider>
      <LanguageProvider>
        <Router basename="/elevator-tech-solutions">
          <div className="flex flex-col min-h-screen bg-gray-100 text-gray-900">
            <Navbar />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/brands" element={<Brands />} />
                <Route path="/testimonials" element={<Testimonials />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </LanguageProvider>
    </HelmetProvider>
  );
}

export default App;