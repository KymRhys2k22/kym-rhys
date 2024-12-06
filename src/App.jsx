import { useState, useEffect } from "react";
import Hero from "./components/Hero";
import ProjectsSection from "./components/ProjectsSection";
import SkillsSection from "./components/SkillsSection";
import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import NavBar from "./components/NavBar";
import Aside from "./components/Aside";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

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
