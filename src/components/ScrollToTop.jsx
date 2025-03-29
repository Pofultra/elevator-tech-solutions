import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Este componente detecta los cambios de ruta y hace scroll al inicio
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Cuando cambia la ruta, hacemos scroll hacia el inicio
    window.scrollTo(0, 0);
  }, [pathname]);

  return null; // Este componente no renderiza nada visible
}

export default ScrollToTop;