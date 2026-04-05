import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [activeSection, setActiveSection] = useState("home");

  // Intersection observer logic to highlight active nav links
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let currentId = "home";
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 150) {
          currentId = section.getAttribute("id");
        }
      });
      setActiveSection(currentId);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-dark min-h-screen text-slate-200 font-sans selection:bg-accent selection:text-dark">
      <Navbar activeSection={activeSection} />
      <main>
        <Hero id="home" />
        <About id="about" />
        <Skills id="skills" />
        <Projects id="projects" />
        <Services id="services" />
        <Contact id="contact" />
      </main>
      <Footer />
    </div>
  );
}

export default App;
