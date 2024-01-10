import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { CiDark } from "react-icons/ci";
import { CiLight } from "react-icons/ci";
import { FiMenu } from "react-icons/fi";
import { TiCancel } from "react-icons/ti";

export default function Navbar({ darkMode, toggleDarkMode }) {
  const navRef = useRef();

  function showNavbar() {
    navRef.current.classList.toggle("responsive_nav");
  }

  return (
    <div className="nav-bar">
      <hr />
      <div className={`navbar ${darkMode ? "dark-mode" : "light-mode"}`}>
        <Link to="/" className="logo">
          FIC
        </Link>
        <nav ref={navRef}>
          <ul className="menu">
            <li>
              <Link to="/">
                <b>Home</b>
              </Link>
            </li>
            <li>
              <Link to="/aboutMe">
                <b>About Me</b>
              </Link>
            </li>
            <li>
              <Link to="/projects">
                <b>Projects</b>
              </Link>
            </li>
            <li>
              <Link to="/contact" className="contacts">
                <b>Contact Me</b>
              </Link>
            </li>
          </ul>

          <button className="menu-btn menu-close">
            <TiCancel className="menu-btn menu-close" onClick={showNavbar} />
          </button>
          <ul className="wide-menu">
            <li>
              <Link to="/">
                <b>Home</b>
              </Link>
            </li>
            <li>
              <Link to="/aboutMe">
                <b>About Me</b>
              </Link>
            </li>
            <li>
              <Link to="/projects">
                <b>Projects</b>
              </Link>
            </li>
            <li>
              <Link to="/contact" className="contacts">
                <b>Contact Me</b>
              </Link>
            </li>
          </ul>
        </nav>

        <button onClick={toggleDarkMode} className="theme-btn">
          {darkMode ? (
            <CiLight className="theme" />
          ) : (
            <CiDark className="theme" />
          )}
        </button>
        <button>
          <FiMenu className="menu-btn" onClick={showNavbar} />
        </button>
        <ul className="wide-menu">
          <li>
            <Link to="/">
              <b>Home</b>
            </Link>
          </li>
          <li>
            <Link to="/aboutMe">
              <b>About Me</b>
            </Link>
          </li>
          <li>
            <Link to="/projects">
              <b>Projects</b>
            </Link>
          </li>
          <li>
            <Link to="/contact" className="contacts">
              <b>Contact Me</b>
            </Link>
          </li>
        </ul>
      </div>
      <hr />
    </div>
  );
}
