import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Expertise from "@/components/Expertise";
import Project from "@/components/Project";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Skills />
        <Expertise />
        <Project />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
