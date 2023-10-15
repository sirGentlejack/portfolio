import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaSquareXTwitter } from "react-icons/fa6";

export default function Bottom() {
  return (
    <div className="footer">
      <div>
        <a href="https://twitter.com" target="_blank">
          <FaSquareXTwitter className="social-icon" />
        </a>
      </div>
      <div>
        <a href="https://twitter.com" target="_blank">
          <FaGithub className="social-icon" />
        </a>
      </div>
      <div>
        <a href="https://twitter.com" target="_blank">
          <FaLinkedin className="social-icon" />
        </a>
      </div>
      <div>
        <a href="https://twitter.com" target="_blank">
          <SiGmail className="social-icon" />
        </a>
      </div>
    </div>
  );
}
