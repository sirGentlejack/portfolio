import React from "react";
import screenshot from "../images/screenshot.png";

export default function Projects() {
  return (
    <div>
      <h3 className="sub-topic">My Projects</h3>
      <div className="grid-container">
        <div className="project">
          <a href="">
            <img src={screenshot} className="project-img" alt="" />
            <br />
            <span>Opay Demo</span>
          </a>
        </div>
        <div className="project">
          <a href="">
            <img src={screenshot} className="project-img" alt="" />
            <br />
            <span>Opay Demo</span>
          </a>
        </div>
        <div className="project">
          <a href="">
            <img src={screenshot} className="project-img" alt="" />
            <br />
            <span className="project-name">Opay Demo</span>
          </a>
        </div>
        <div className="project">
          <a href="">
            <img src={screenshot} className="project-img" alt="" />
            <br />
            <span>Opay Demo</span>
          </a>
        </div>
      </div>
    </div>
  );
}
