import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollControl = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Prevent scroll restoration on page refresh
    const navigation = performance.getEntriesByType(
      "navigation"
    )[0] as PerformanceNavigationTiming;
    if (navigation && navigation.type === "reload") {
      return;
    }

    // Disable the browser's default scroll restoration
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }

    // Only scroll to top on route changes
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollControl;
