import React, { useState, useEffect } from "react";
import Home from "./components/Home";
import Bottom from "./components/Bottom";
import Navbar from "./components/Navbar";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import ProjectSection from "./sections/ProjectSection";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    document.body.classList.toggle("dark-mode", darkMode);
    document.body.classList.toggle("light-mode", !darkMode);
  }, [darkMode]);

  return (
    <Router>
      <div className={`App ${darkMode ? "dark-mode" : "light-mode"}`}>
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <ScrollToTop />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/projects" element={<ProjectSection />} />
          <Route path="/aboutMe" element={<AboutMe />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <Bottom />
      </div>
    </Router>
  );
}

export default App;
