import React from "react";
import { Link } from "react-router-dom";

export default function Navbar({darkMode, toggleDarkMode}) {
 
  return (
    <div className={`navbar ${darkMode ? "dark-mode" : "light-mode" }`}>
      <hr />
      <ul className="menu">
      <li>
            <Link to="/" ><b>Home</b></Link>
          </li>
        <li>
           
            <Link to="/aboutMe" > <b>About Me</b></Link>
          
        </li>
        <li>
          <Link to="/projects">
            <b>Projects</b>
          </Link>
        </li>
        <li>
        <Link to="/contact"  className="contacts"> <b>Contact Me</b></Link>
        </li>
      </ul>
      <button onClick={toggleDarkMode}>{darkMode ? "Light" : "Dark"}</button>
      <hr />
    </div>
  );
}
