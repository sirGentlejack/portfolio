import React from "react";
import Opay from "../images/OpayScreenshot.png";
import RealEstate from "../images/RealEstateScreenshot.png";
import LoanCal from "../images/LoanCalScreenshot.png";
import BMI from "../images/BMIScreenshot.png";
import Airbnb from "../images/AirbnbScreenshot.png";
import Flak from "../images/FlakScreenshot.png";


export default function Projects() {
  return (
    <div>
      <h3 className="sub-topic" id="projects">My Projects</h3>
      <div className="grid-container">
        <div className="project">
          <a href="https://lively-strudel-dd7f7a.netlify.app/" target="_blank" rel="noreferrer">
            <img src={Opay} className="project-img" alt="screenshot showing project" />
            <br />
            <span className="project-name"><b>Opay Demo</b></span>
          </a>
        </div>
        <div className="project" >
          <a href="https://clinquant-alpaca-76679d.netlify.app/#" target="_blank" rel="noreferrer">
            <img src={RealEstate} className="project-img" alt="screenshot showing project" />
            <br />
            <span className="project-name"><b>Real Estate</b></span>
          </a>
        </div>
        <div className="project">
          <a href="https://stellar-croissant-74a254.netlify.app/" target="_blank" rel="noreferrer">
            <img src={LoanCal} className="project-img" alt="screenshot showing project" />
            <br />
            <span className="project-name"><b>Loan calculator</b></span>
          </a>
        </div>
        <div className="project">
          <a href="https://roaring-valkyrie-539f49.netlify.app/" target="_blank" rel="noreferrer">
            <img src={BMI} className="project-img" alt="screenshot showing project" />
            <br />
            <span className="project-name"><b>BMI calculator</b></span>
          </a>
        </div>
        <div className="project">
          <a href="https://beautiful-parfait-5775d5.netlify.app/" target="_blank" rel="noreferrer">
            <img src={Airbnb} className="project-img" alt="screenshot showing project" />
            <br />
            <span className="project-name"><b>Airbnb Demo</b></span>
          </a>
        </div>
        <div className="project">
          <a href="https://unrivaled-cocada-faf0ee.netlify.app/asset/enroll/" target="_blank" rel="noreferrer">
            <img src={Flak} className="project-img" alt="screenshot showing project" />
            <br />
            <span className="project-name"><b>Flak skill A.</b></span>
          </a>
        </div>
      </div>
    </div>
  );
}
// 