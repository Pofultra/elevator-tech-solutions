import React, { useRef, useEffect, useState } from "react";
import brandlogo1 from "/images/Alphacontrollers_logo.png";
import brandlogo2 from "/images/EC-logo-home.png";
import brandlogo3 from "/images/email-logo-horizon.png";
import brandlogo4 from "/images/schindler.png";
import brandlogo5 from "/images/R.png";
import brandlogo6 from "/images/brand_tke.png";
import brandlogo7 from "/images/MCE_Logo_w_tagline_colored.png";

const BrandCarousel = () => {
  const containerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const startXRef = useRef(0); // Posición inicial del cursor al arrastrar
  const scrollPositionRef = useRef(0); // Posición actual del scroll
  const animationFrameIdRef = useRef(null); // Referencia para cancelar la animación

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

  // Auto-scroll animation
  useEffect(() => {
    if (!containerRef.current) return;

    let lastTimestamp = 0;
    const speed = 0.5; // pixels per frame
    const totalWidth = containerRef.current.scrollWidth / 2;

    const animate = (timestamp) => {
      if (!isDragging) {
        const delta = timestamp - lastTimestamp;
        if (lastTimestamp !== 0 && delta > 0) {
          // Incrementar la posición basada en el tiempo transcurrido
          scrollPositionRef.current += speed * (delta / 16); // Normalize to 60fps

          // Resetear la posición cuando se alcanza el final del primer conjunto
          if (scrollPositionRef.current >= totalWidth) {
            scrollPositionRef.current = 0;
          }

          if (containerRef.current) {
            containerRef.current.scrollLeft = scrollPositionRef.current;
          }
        }
        lastTimestamp = timestamp;
      } else {
        // Al arrastrar, actualizar la posición actual del scroll
        scrollPositionRef.current = containerRef.current.scrollLeft;
        lastTimestamp = 0; // Resetear el timestamp para continuar suavemente
      }

      animationFrameIdRef.current = requestAnimationFrame(animate);
    };

    animationFrameIdRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrameIdRef.current);
    };
  }, [isDragging]);

  // Manual scrolling handlers
  const handleMouseDown = (e) => {
    if (!containerRef.current) return;

    setIsDragging(true);
    startXRef.current = e.pageX - containerRef.current.offsetLeft; // Guardar posición inicial
    containerRef.current.style.cursor = "grabbing";
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    if (containerRef.current) {
      containerRef.current.style.cursor = "grab";
    }
  };

  const handleMouseMove = (e) => {
    if (!isDragging || !containerRef.current) return;

    e.preventDefault();
    const currentX = e.pageX - containerRef.current.offsetLeft;
    const walk = (currentX - startXRef.current) * 2; // Multiplicador para efecto más rápido

    // Actualizar scrollLeft directamente
    containerRef.current.scrollLeft -= walk;
    startXRef.current = currentX; // Actualizar posición inicial para el siguiente movimiento
  };

  // Touch events for mobile devices
  const handleTouchStart = (e) => {
    if (!containerRef.current) return;

    setIsDragging(true);
    startXRef.current = e.touches[0].pageX - containerRef.current.offsetLeft;
  };

  const handleTouchMove = (e) => {
    if (!isDragging || !containerRef.current) return;

    const currentX = e.touches[0].pageX - containerRef.current.offsetLeft;
    const walk = (currentX - startXRef.current) * 2;

    containerRef.current.scrollLeft -= walk;
    startXRef.current = currentX;
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  // Handle mouse leave
  const handleMouseLeave = () => {
    if (isDragging) {
      setIsDragging(false);
      if (containerRef.current) {
        containerRef.current.style.cursor = "grab";
      }
    }
  };

  return (
    <div className="w-full overflow-hidden py-8">
      {/* Carousel container with grab cursor and event handlers */}
      <div
        ref={containerRef}
        className="flex cursor-grab"
        style={{
          scrollBehavior: "auto",
          overflowX: "hidden",
        }}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* First set of brands in a grid */}
        <div className="grid grid-cols-7 gap-4 min-w-max">
          {brands.map((brand) => (
            <div
              key={brand.id}
              className="w-32 h-16 flex items-center justify-center grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            >
              <img
                src={brand.image}
                alt={brand.name}
                className="h-12 w-auto object-contain"
                draggable="false" // Prevent image dragging interfering with carousel drag
              />
            </div>
          ))}
        </div>

        {/* Duplicated set for infinite effect */}
        <div className="grid grid-cols-7 gap-4 min-w-max">
          {brands.map((brand) => (
            <div
              key={`${brand.id}-clone`}
              className="w-32 h-16 flex items-center justify-center grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            >
              <img
                src={brand.image}
                alt={brand.name}
                className="h-12 w-auto object-contain"
                draggable="false" // Prevent image dragging
              />
            </div>
          ))}
        </div>
      </div>

      {/* Visual indicators */}
      <div className="flex justify-center mt-4 space-x-2">
        <div className="w-8 h-1 bg-blue-500 rounded"></div>
        <div className="w-8 h-1 bg-gray-300 rounded"></div>
        <div className="w-8 h-1 bg-gray-300 rounded"></div>
      </div>
    </div>
  );
};

export default BrandCarousel;