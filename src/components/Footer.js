import React from "react";

function Footer() {
    return (
        <div>
            <footer className="contact" id="contact-me">
                <nav className="navbar navbar-light bg-light row justify-content-center">
                    <h3 class="text-dark col-12 col-lg-2 text-center">I look forward to connecting with you.</h3>
                    <a class="navbar-link text-dark col-12 col-lg-2 text-center" href="tel:+4693580710" target="_blank" rel="noreferrer">469-358-0710</a>
                    <a class="navbar-link text-dark col-12 col-lg-2 text-center"
                        href="mailto:michelle.berta@att.net" target="_blank" rel="noreferrer">michelle.berta@att.net</a>
                    <a class="navbar-link text-dark col-12 col-lg-2 text-center" href="https://github.com/MichelleBerta" target="_blank" rel="noreferrer">GitHub</a>
                    <a class="navbar-link text-dark col-12 col-lg-2 text-center"
                        href="https://www.linkedin.com/in/michelle-berta" target="_blank" rel="noreferrer">LinkedIn</a>
                </nav>
            </footer>
        </div>
    );
}

export default Footer;
