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

  // This will run one time after the component mounts
  /* useEffect(() => {
    // callback function to call when event triggers
    const onPageLoad = () => {
      console.log('page loaded');
      setIsLoading(false);
      // do something else
    };

    // Check if the page has already loaded
    if (document.readyState === 'complete') {
      onPageLoad();
    } else {
      window.addEventListener('load', onPageLoad, false);
      // Remove the event listener when component unmounts
      return () => window.removeEventListener('load', onPageLoad);
    }
  }, []); */

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // 2 seconds loading time

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
      </main>
      <ContactSection />
    </div>
  );
};

export default App;
