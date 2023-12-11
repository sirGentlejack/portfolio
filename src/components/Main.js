import React from "react";

export default function Main() {
  return (
    <div>
      <div>
        <h3 className="sub-topic">Interest</h3>
        <p className="content">
          I am passionate about continuous learning, problem-solving, and
          contributing to an organisation’s growth while aligning with its
          values.
        </p>
      </div>
      <div>
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
            <li>Git</li>
            <li>Slack</li>
            <li>Figma (UI/UX)</li>
          </ul>
        </div>
      </div>
      <div>
        <h3 className="sub-topic" id="about">About Me</h3>
        <p className="content">
          I am an individual with a diverse range of interests and experiences.
          My passion for learning and curiosity has driven me to explore various
          aspects of life. I enjoy delving into different cultures, cuisines,
          and languages, which has not only broadened my horizons but also
          enriched my global perspective.
        </p>
        <p className="content">
          Professionally, my journey as a Front-End Developer began in 2022. 
          I am known for my strong work ethic and dedication to achieving
          goals and solving challenges. I take pride in my ability to
          collaborate effectively with teams and to adapt to new environment and
          technologies.</p>
          <p className="content">
          Beyond the realm of coding, I am a devoted Fashion Designer, which
          bring balance to my life, offering a channel for relaxation and creativity.
        </p>
        <p className="content">
          In summary, I am a curious and dedicated individual with a passion for
          lifelong learning, a strong professional background, and a commitment
          to making a positive impact in my community. I look forward to new
          experiences and opportunities that life has to offer.
        </p>
      </div>
    </div>
  );
}
