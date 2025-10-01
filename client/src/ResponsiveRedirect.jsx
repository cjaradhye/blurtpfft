import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const ResponsiveRedirect = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const checkScreenSize = () => {
      const isMobile = window.matchMedia("(max-width: 768px)").matches;
      const currentPath = location.pathname;

      // Prevent redundant navigation to avoid infinite loop
      if (isMobile && currentPath !== "/blurtmobile") {
        setTimeout(() => navigate("/blurtmobile", { replace: true }), 100);
      } else if (!isMobile && currentPath !== "/blurt") {
        setTimeout(() => navigate("/blurt", { replace: true }), 100);
      }
    };

    checkScreenSize(); // Run on mount
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, [navigate, location.pathname]); // Depend only on `pathname`

  return null;
};

export default ResponsiveRedirect;
