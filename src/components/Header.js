import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";


function Header() {
  return (
    <Navbar className="p-2" bg="light" expand="lg">
     
   
      <Navbar.Brand href="#about">Michelle Berta</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#skills">Skills</Nav.Link>
          <Nav.Link href="#work">Work</Nav.Link>
          <NavDropdown title="Contact" id="basic-nav-dropdown">
            <NavDropdown.Item href="tel:+4693580710" target="_blank">
              469-358-0710
            </NavDropdown.Item>
            <NavDropdown.Item href="mailto:michelle.berta@att.net" target="_blank">
              michelle.berta@att.net
            </NavDropdown.Item>
            <NavDropdown.Item href="https://github.com/MichelleBerta" target="_blank">
              GitHub
            </NavDropdown.Item>
            <NavDropdown.Item href="https://www.linkedin.com/in/michelle-berta" target="_blank">
              LinkedIn
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
      </Navbar>
  );
}

export default Header;
