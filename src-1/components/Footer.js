import React from "react";

function Footer() {
  return (
    <div>
      <footer className="contact" id="contact-me">
        <nav className="navbar navbar-light bg-light row justify-content-center">
          <h2 className="text-dark col-12 col-lg-8 text-center">I look forward to connecting with you.</h2>
          <a className="navbar-link text-dark col-12 col-lg-2 text-center" href="tel:+4693580710" target="_blank" rel="noreferrer">
            469-358-0710 <br />
            <a className="navbar-link text-dark col-12 col-lg-2 text-center" href="mailto:michelle.berta@att.net" target="_blank" rel="noreferrer">
              michelle.berta@att.net
              <i className="fas fa-envelope-square"></i>
            </a>
          </a>

          <a className="navbar-link text-dark col-12 col-lg-2 text-center" href="https://github.com/MichelleBerta" target="_blank" rel="noreferrer">
            GitHub
            <i className="fab fa-github-square"></i> <br />
            <a href="https://www.linkedin.com/in/michelle-berta" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </a>
        </nav>
      </footer>
    </div>
  );
}

export default Footer;
