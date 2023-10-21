import React from "react";

export default function Navbar() {
  return (
    <div>
      <h1 className="name">Fagbemi Collins</h1>
      <p className="profession">
        <span className="front-end">Front-End</span> Developer
      </p>
      <div className="cv-section">
        
        <a
          href="https://docs.google.com/document/d/1tZuOnX9kOgY71RBAFpym443Q4Ji4cOcF/edit?usp=share_link&ouid=115436436016632980091&rtpof=true&sd=true"
          target="_blank"
          rel="noreferrer"
        >
          <span className="cv-btn">CV Download</span>
        </a>
        
      </div>
      
    </div>
  );
}
