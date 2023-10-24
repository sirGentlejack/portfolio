import React from "react";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Projects from "./components/Projects";
import Bottom from "./components/Bottom";
import Menu from "./components/Menu";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Menu />
        <Main />
        <Projects />
        <Bottom />
        
      </Router>
    </div>
  );
}

export default App;
