import React from "react";
import Hero from "../components/Hero";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <div>
        <Hero />
      </div>
      <div className="interest sections">
        <h3 className="sub-topic">Interest</h3>
        <p className="content">
          I am passionate about continuous learning, problem-solving, and
          contributing to an organisation’s growth while aligning with its
          values.
        </p>
      </div>
      <div className="service sections">
          <h3 className="sub-topic ">Services</h3>
        <div className="services">
          <div className="services-items">
            <h2>Design Website</h2>
          </div>
          <div className="services-items">
            <h2>Web application</h2>
          </div>
        </div>
      </div>
      <div className="technologies sections">
        <h3 className="sub-topic">Technologies</h3>
        <div className="tech-skills">
          <ul className="technologies">
            <li>Reactjs</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>javaScript</li>
          </ul>
          <ul className="technologies">
            <li>TailwindCSS</li>
            <li>Git Hub</li>
            <li>Slack</li>
            <li>Figma (UI/UX)</li>
          </ul>
        </div>
      </div>
      <div className="about sections">
        <h3 className="sub-topic" id="about">
          About Me
        </h3>
        <p className="content">
          Professionally, my journey as a Front-End Developer began in 2022. I
          am known for my strong work ethic and dedication to achieving goals
          and solving challenges. I take pride in my ability to collaborate
          effectively with teams and to adapt to new environment and
          technologies.
        </p>
        <Link to="/aboutMe" className="read-more">
          Read more...
        </Link>
      </div>
    </div>
  );
}
