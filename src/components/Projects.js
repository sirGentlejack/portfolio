import React from "react";
import screenshot from "../images/screenshot.png";

export default function Projects() {
  return (
    <div>
      <h3 className="sub-topic">My Projects</h3>
      <div className="grid-container">
        <div className="project">
          <a href="https://lively-strudel-dd7f7a.netlify.app/" target="_blank" rel="noreferrer">
            <img src={screenshot} className="project-img"  />
            <br />
            <span>Opay Demo</span>
          </a>
        </div>
        <div className="project" >
          <a href="https://clinquant-alpaca-76679d.netlify.app/#" target="_blank" rel="noreferrer">
            <img src={screenshot} className="project-img"  />
            <br />
            <span>Real Estate</span>
          </a>
        </div>
        <div className="project">
          <a href="https://stellar-croissant-74a254.netlify.app/" target="_blank" rel="noreferrer">
            <img src={screenshot} className="project-img"  />
            <br />
            <span className="project-name">Loan calculator</span>
          </a>
        </div>
        <div className="project">
          <a href="https://roaring-valkyrie-539f49.netlify.app/" target="_blank" rel="noreferrer">
            <img src={screenshot} className="project-img"  />
            <br />
            <span>BMI calculator</span>
          </a>
        </div>
      </div>
    </div>
  );
}
