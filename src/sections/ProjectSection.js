import React from "react";
import Projects from "../components/Projects";
import Data from "../Data";

export default function ProjectSection() {
  return (
    <>
      <h3 className="sub-topic" id="projects">
        My Most Recent Apps
      </h3>
      <div className="grid-container">
        
            {Data.map((item) => (
               <Projects key={item.id} item={item} /> 
            ))}
          
        
      </div>
    </>
  );
}
