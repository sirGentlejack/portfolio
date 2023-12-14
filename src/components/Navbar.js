import React from "react";
import Me from "../images/lemo_B.png"

export default function Navbar() {
  return (
    <div >
      <div className="hero">
      <div className="hero-section1">
      <h1 className="name">Fagbemi <span className="name2">Ilemobayo</span> Collins</h1>
      <p className="profession">
        <span className="front-end">Front-End</span> Developer
      </p>
      <div className="cv-section">
        
        <a
          href="https://docs.google.com/document/d/1tZuOnX9kOgY71RBAFpym443Q4Ji4cOcF/edit?usp=share_link&ouid=115436436016632980091&rtpof=true&sd=true"
          target="_blank"
          rel="noreferrer"
        >
          <span className="cv-btn">Open CV</span>
        </a>
        
      </div>
      </div>
      <div className="hero-section2">
        <img src={Me} alt="Myself" className="hero-img" />
      </div>
      </div>
    </div>
  );
}
