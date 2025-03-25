// src/components/BrandCarousel.jsx
import React, { useRef, useEffect } from "react";
import brandlogo1 from "/images/Alphacontrollers_logo.png";
import brandlogo2 from "/images/EC-logo-home.png";
import brandlogo3 from "/images/email-logo-horizon.png";
import brandlogo4 from "/images/schindler.png";
import brandlogo5 from "/images/R.png";
import brandlogo6 from "/images/brand_tke.png";
import brandlogo7 from "/images/MCE_Logo-Black-and-Red-r-500.webp";


const BrandCarousel = () => {
  const containerRef = useRef(null);
  
  // Sample brand logos - replace with actual paths
  const brands = [
    { id: 1, name: "Alpha Controllers", image: brandlogo1 },
    { id: 2, name: "EC", image: brandlogo2 },
    { id: 3, name: "Horizon", image: brandlogo3 },
    { id: 4, name: "Schindler", image: brandlogo4 },
    { id: 5, name: "Brand 5", image: brandlogo5 },
    { id: 6, name: "TKE", image: brandlogo6 },
    { id: 7, name: "MCE", image: brandlogo7 },
  ];

  // Optional: Manual animation if you prefer not to use CSS animations
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let position = 0;
    const speed = 0.5; // pixels per frame
    const totalWidth = container.scrollWidth / 2;

    const animate = () => {
      position += speed;
      
      // Reset position once we've scrolled through the first set
      if (position >= totalWidth) {
        position = 0;
      }
      
      container.style.transform = `translateX(-${position}px)`;
      requestAnimationFrame(animate);
    };

    const animation = requestAnimationFrame(animate);
    
    return () => cancelAnimationFrame(animation);
  }, []);

  return (
    <div className="w-full overflow-hidden py-8">
      {/* Using a grid layout with equal columns */}
      <div 
        ref={containerRef}
        className="flex" 
        // Remove this style if using the manual animation from useEffect
        style={{ animation: "carousel 30s linear infinite" }}
      >
        {/* First set of brands in a grid */}
        <div className="grid grid-cols-7 gap-4 min-w-max">
          {brands.map(brand => (
            <div 
              key={brand.id} 
              className="w-32 h-16 flex items-center justify-center grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            >
              <img 
                src={brand.image} 
                alt={brand.name} 
                className="h-12 w-auto object-contain" 
              />
            </div>
          ))}
        </div>
        
        {/* Duplicated set for infinite effect */}
        <div className="grid grid-cols-7 gap-4 min-w-max">
          {brands.map(brand => (
            <div 
              key={`${brand.id}-clone`} 
              className="w-32 h-16 flex items-center justify-center grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
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

export default BrandCarousel;