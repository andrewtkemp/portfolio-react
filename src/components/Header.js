import React from "react";
import { Link, Route, useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();

  return (
    <nav className="navbar navbar-expand-lg fixed-top navbar-light bg-light">
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarTogglerDemo01"
        aria-controls="navbarTogglerDemo01"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse justify-content-center" id="navbarTogglerDemo01">
        <a className="navbar-brand">Michelle Berta</a>
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
          <li class="nav-item">
            <Link to="/about" className={location.pathname === "/about" ? "nav-link active" : "nav-link"}>
              About Me
            </Link>
          </li>
          <li className="nav-item">
            <Link to="//skills" className={location.pathname === "//skills" ? "nav-link active" : "nav-link"}>
              Skills
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/work" className={location.pathname === "/work" ? "nav-link active" : "nav-link"}>
              Work
            </Link>
          </li>
          <li className="nav-item">
            <a class="nav-link" href="../../public/assets/Michelle-Berta-resume.pdf" target="_blank" rel="noreferrer">
              Resume
            </a>
          </li>
          <li className="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Contact
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <a className="dropdown-item" href="tel:+4693580710" target="_blank" rel="noreferrer">
                469-358-0710
              </a>
              <a className="dropdown-item" href="mailto:mailto:michelle.berta@att.net" target="_blank" rel="noreferrer">
                michelle.berta@att.net
              </a>
              <Link to="https://github.com/MichelleBerta" target="_blank" rel="noreferrer">
                GitHub
              </Link>
              <a className="dropdown-item" href="https://github.com/MichelleBerta" target="_blank" rel="noreferrer">
                GitHub
              </a>
              <a className="dropdown-item" href="https://www.linkedin.com/in/michelle-berta" target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
