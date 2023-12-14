import React from "react";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Projects from "./components/Projects";
import Bottom from "./components/Bottom";
import Menu from "./components/Menu";
import "./App.css";

function App() {
  return (
    <div className="App">
        <Menu />
        <Navbar />
        <Main />
        <Projects />
        <Bottom />
    </div>
  );
}

export default App;
