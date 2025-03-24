// src/components/BrandCarousel.jsx
import React from "react";

const BrandCarousel = () => {
  // Sample brand logos - replace with actual paths
  const brands = [
    { id: 1, name: "Brand 1", image: "/api/placeholder/192/38" },
    { id: 2, name: "Brand 2", image: "/api/placeholder/190/56" },
    { id: 3, name: "Brand 3", image: "/api/placeholder/66/56" },
    { id: 4, name: "Brand 4", image: "/api/placeholder/147/56" },
    { id: 5, name: "Brand 5", image: "/api/placeholder/95/31" },
    { id: 6, name: "Brand 6", image: "/api/placeholder/192/38" },
  ];

  // Duplicar las marcas para un carrusel infinito
  const duplicatedBrands = [...brands, ...brands];

  return (
    <div className="w-full overflow-hidden relative py-8">
      {/* Carrusel usando Tailwind y CSS incorporado */}
      <div className="inline-flex animate-slide w-[200%]">
        {/* Primera copia de marcas */}
        <div className="flex items-center justify-around w-1/2">
          {brands.map(brand => (
            <div 
              key={brand.id} 
              className="mx-8 flex-shrink-0 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            >
              <img 
                src={brand.image} 
                alt={brand.name} 
                className="h-12 w-auto object-contain" 
              />
            </div>
          ))}
        </div>
        
        {/* Segunda copia de marcas para el efecto infinito */}
        <div className="flex items-center justify-around w-1/2">
          {brands.map(brand => (
            <div 
              key={`${brand.id}-clone`} 
              className="mx-8 flex-shrink-0 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            >
              <img 
                src={brand.image} 
                alt={brand.name} 
                className="h-12 w-auto object-contain" 
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Necesitamos agregar la animación personalizada en tu archivo tailwind.config.js
// Añade esto en la sección 'extend' de 'theme':
/*
extend: {
  animation: {
    slide: 'slide 30s linear infinite',
  },
  keyframes: {
    slide: {
      '0%': { transform: 'translateX(0)' },
      '100%': { transform: 'translateX(-50%)' },
    }
  }
}
*/

export default BrandCarousel;