import React from "react";
import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <div>
      <ul className="menu">
        <li>
          <Link to="/#about">
            <b>About</b>
          </Link>
        </li>
        <li>
          <Link to="/#projects">
            <b>Projects</b>
          </Link>
        </li>
        <li>
          <Link to="/#contact">
            <b>Contact</b>
          </Link>
        </li>
      </ul>
      <hr />
    </div>
  );
}
