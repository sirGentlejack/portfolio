import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaSquareXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function Bottom() {
  return (
    <div className="footer">
      <h3 className="contact_me sub-topic ">Contact Me</h3>
      <div className="bottom-contact">
        <h1 className="bottom-contact-text">Lets talk about your project</h1>
        <Link to="/contact" className="contacts ">
          <b>Contact</b>
        </Link>
      </div>

      <div className="footer_icons" id="contact">
        <div>
          <a
            href="https://twitter.com/gentlejack_b?s=21"
            target="_blank"
            rel="noreferrer"
          >
            <FaSquareXTwitter className="social-icon" />
          </a>
        </div>
        <div>
          <a
            href="https://github.com/sirGentlejack"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub className="social-icon" />
          </a>
        </div>
        <div>
          <a
            href="http://linkedin.com/in/ilemobayo1"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin className="social-icon" />
          </a>
        </div>
        <div>
          <a
            href="mailto:fagbemiilemobayo4@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <SiGmail className="social-icon" />
          </a>
        </div>
      </div>
    </div>
  );
}
