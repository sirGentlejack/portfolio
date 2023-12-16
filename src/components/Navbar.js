import React from "react";
import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <div className="navbar">
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
      <hr />
    </div>
  );
}
