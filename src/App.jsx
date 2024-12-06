import { useState } from "react";
import Hero from "./components/Hero";
import ProjectsSection from "./components/ProjectsSection";
import SkillsSection from "./components/SkillsSection";
import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";

import NavBar from "./components/NavBar";
import Aside from "./components/Aside";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

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

  /* useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // 2 seconds loading time

    return () => clearTimeout(timer);
  }, []); */

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

  /*  if (isLoading) {
    return <LoadingSpinner />;
  }
 */

  return (
    <div
      className={`min-h-screen   bg-gray-950 overflow-x-hidden ${
        darkMode ? "dark" : ""
      } `}>
      <NavBar setDarkMode={setDarkMode} darkMode={darkMode} />
      <Aside />
      <main>
        <Hero darkMode={darkMode} />
        <ProjectsSection />
        <SkillsSection />
        <AboutSection />
      </main>
      <ContactSection />
    </div>
  );
};

export default App;
