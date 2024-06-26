import React from "react";
import { FaGithub } from "react-icons/fa";

export default function Projects(props) {
  const { item } = props;
  return (
    <div>
      <div className="project">
        <div className="project-sub1">
          <img
            src={require(`../images/${item.coverImg}`)}
            className="project-img"
            alt="screenshot showing project"
          />
          <br />
          <span className="project-name">
            <b>{item.title}</b>
          </span>
        </div>
        <div className="project-sub2">
          {/* preview url */}
          <a
            href={item.url}
            target="_blank"
            rel="noreferrer"
            className="project-name"
          >
            Live Preview
          </a>
          {/* github url */}
          <a
            href={item.GitHub}
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub className=" project-github" />
          </a>
        </div>
      </div>
    </div>
  );
}
//
