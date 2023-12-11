import React from "react";
import Opay from "../images/OpayScreenshot.png";
import Lemo_B from "../images/lemo_B.png";
import RealEstate from "../images/RealEstateScreenshot.png";
import Quote from "../images/myQuotes.png";
import meme from "../images/meme.png";
import Travel from "../images/travelJournal.png";
import Airbnb from "../images/AirbnbScreenshot.png";
import Flak from "../images/FlakScreenshot.png";


export default function Projects() {
  return (
    <div>
      <h3 className="sub-topic" id="projects">My Projects</h3>
      <div className="grid-container">
        <div className="project">
          <a href="https://opay-mobile-application-look.vercel.app/" target="_blank" rel="noreferrer">
            <img src={Opay} className="project-img" alt="screenshot showing project" />
            <br />
            <span className="project-name"><b>Opay Demo</b></span>
          </a>
        </div>
        <div className="project">
          <a href="https://lemo-b-couture.vercel.app/" target="_blank" rel="noreferrer">
            <img src={Lemo_B} className="project-img" alt="screenshot showing project" />
            <br />
            <span className="project-name"><b>Lemo_B Couture</b></span>
          </a>
        </div>
        <div className="project" >
          <a href="https://real-estate-website-challenge.vercel.app/" target="_blank" rel="noreferrer">
            <img src={RealEstate} className="project-img" alt="screenshot showing project" />
            <br />
            <span className="project-name"><b>Real Estate</b></span>
          </a>
        </div>
        <div className="project">
          <a href="https://quote-app-three-dusky.vercel.app/" target="_blank" rel="noreferrer">
            <img src={Quote} className="project-img" alt="screenshot showing project" />
            <br />
            <span className="project-name"><b>Quote App</b></span>
          </a>
        </div>
        <div className="project">
          <a href="https://mem-creator.vercel.app" target="_blank" rel="noreferrer">
            <img src={meme} className="project-img" alt="screenshot showing project" />
            <br />
            <span className="project-name"><b>Meme Creator</b></span>
          </a>
        </div>
        <div className="project">
          <a href="https://travel-journal-five-rho.vercel.app/" target="_blank" rel="noreferrer">
            <img src={Travel} className="project-img" alt="screenshot showing project" />
            <br />
            <span className="project-name"><b>Travel Journal</b></span>
          </a>
        </div>
        <div className="project">
          <a href="https://airbnd-demo.vercel.app/" target="_blank" rel="noreferrer">
            <img src={Airbnb} className="project-img" alt="screenshot showing project" />
            <br />
            <span className="project-name"><b>Airbnb Demo</b></span>
          </a>
        </div>
        <div className="project">
          <a href="https://flak-official.vercel.app" target="_blank" rel="noreferrer">
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