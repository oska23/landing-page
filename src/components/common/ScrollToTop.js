// src/components/common/ScrollToTop.js
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// This component will scroll the window to the top on route change
// and also handle hash navigation for in-page sections
const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // Handle hash navigation (scrolling to sections)
    if (hash) {
      // Give the DOM time to render before scrolling
      setTimeout(() => {
        const id = hash.replace("#", "");
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 0);
    } else {
      // If no hash, scroll to top of the page
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;
