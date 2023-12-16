import React,{useState, useEffect} from "react";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Bottom from "./components/Bottom";
import Navbar from "./components/Navbar";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [darkMode,setDarkMode] = useState(false);

  const toggleDarkMode =()=> {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    document.body.classList.toggle("dark-mode", darkMode);
    document.body.classList.toggle("light-mode", !darkMode);
  }, [darkMode]);
  return (
    <Router>
      <div className={`App ${darkMode ? "dark-mode" : "light-mode" }`}>
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>

        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/aboutMe" element={<AboutMe />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <Bottom />
      </div>
    </Router>
  );
}

export default App;
