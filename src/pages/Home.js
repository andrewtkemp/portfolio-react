import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";

function Home() {
  return (
    <div>
      <Hero backgroundImage="https://i.imgur.com/qkdpN.jpg">
        <h1>Hi! I'm Michelle</h1>
        <h2>A JR. WEB DEVELOPER 
          <br />with a passion for learning.</h2>
      </Hero>
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-12">
            <h1>Welcome to my workspace!</h1>
            <h2>This is where I like to make creations that are fun and interactive.</h2>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <ul>
              SKILLS INCLUDE:
              <li>React</li>
              <li>NodeJS</li>
              <li>MySQL</li>
              <li>MongoDB</li>
              <li>JQuery</li>
              <li>Bootstrap</li>
              <li>Materialize</li>
            </ul>
          </Col>
          
        </Row>
      </Container>
    </div>
  );
}

export default Home;
