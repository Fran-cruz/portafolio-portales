import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// React Router no hace scroll automático a los anclas (#hash) al navegar.
// Este componente lo resuelve para toda la app.
export default function ScrollToHash() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
        return;
      }
    }
    window.scrollTo({ top: 0 });
  }, [pathname, hash]);

  return null;
}
