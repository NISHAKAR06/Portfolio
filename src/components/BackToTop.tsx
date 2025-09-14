import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronUp } from "lucide-react";

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled up to given distance
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set the scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <Button
          className="fixed bottom-8 right-8 z-50 rounded-full w-12 h-12 bg-primary/90 hover:bg-primary backdrop-blur-sm shadow-lg hover:scale-110 transition-all duration-300 animate-fade-in"
          onClick={scrollToTop}
          size="icon"
          aria-label="Back to top"
        >
          <ChevronUp className="w-6 h-6 text-primary-foreground" />
        </Button>
      )}
    </>
  );
};

export default BackToTop;
