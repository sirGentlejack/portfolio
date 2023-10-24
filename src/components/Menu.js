import React from "react";

export default function Menu() {
  return (
    <div>
      <ul className="menu">
        <li>
          <a href="/#about" target="_self"
          rel="noreferrer">
            <b>About</b>
          </a>
        </li>
        <li>
          <a href="/#projects" target="_self"
          rel="noreferrer">
            <b>Projects</b>
          </a>
        </li>
        <li>
          <a href="/#contact" target="_self"
          rel="noreferrer">
            <b>Contact</b>
          </a>
        </li>
      </ul>
      <hr />
    </div>
  );
}
