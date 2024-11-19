import { useState, useEffect } from "react";

import Hero from "./components/Hero";
import ProjectsSection from "./components/ProjectsSection";
import SkillsSection from "./components/SkillsSection";
import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import LoadingSpinner from "./components/LoadingSpinner";
import NavBar from "./components/NavBar";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  //!const doc_ready = window.document.readyState

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // 2 seconds loading time

    return () => clearTimeout(timer);
  }, []);




  /* useEffect(() => {
    if (doc_ready === 'complete') {
      setIsLoading(false);
      if (doc_ready !== 'interactive') {
        setIsLoading(false)
      } else {
        setIsLoading(true);
        setIsLoading(true)
      }
    }
  }, [doc_ready]); */



  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="min-h-screen bg-gray-50 ">
      <NavBar />
      <main>
        <Hero />
        <ProjectsSection />
        <SkillsSection />
        <AboutSection />
        <ContactSection />
      </main>
    </div>
  );
};

export default App;
