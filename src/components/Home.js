import React from "react";
import Hero from "../components/Hero";
import { Link } from "react-router-dom";
import { FaBootstrap } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
// import { RiTailwindCssFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaFigma } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si"
import { SiFirebase } from "react-icons/si";
import { SiSass } from "react-icons/si";


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
            <li className="tech-skill"><FaReact /> Reactjs</li>
            <li className="tech-skill"> <FaHtml5 />HTML</li>
            <li className="tech-skill"> <FaCss3Alt /> CSS</li>
            <li className="tech-skill"> <IoLogoJavascript /> javaScript</li>
            <li className="tech-skill"> <SiFirebase /> Firebase</li>
          </ul>
          <ul className="technologies">
            <li className="tech-skill"><SiTailwindcss /> TailwindCSS</li>
            <li className="tech-skill"> <FaGithub />Git Hub</li>
            <li className="tech-skill"><FaBootstrap /> BootStrap</li>
            <li className="tech-skill"> <FaFigma /> Figma (UI/UX)</li>
            <li className="tech-skill"><SiSass /> Sass</li>
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
          <Link to="/aboutMe" className="read-more">
            Read more...
          </Link>
        </p>
      </div>
    </div>
  );
}
