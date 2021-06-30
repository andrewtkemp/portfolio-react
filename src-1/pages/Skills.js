import React from "react";
import { Row, Col } from "react-bootstrap";

function Skills() {
  return (
    <div className="skills container" id="skills">
      <Row>
        <h4>SKILLS INCLUDE:</h4>
        <Col>
          FRONT END:
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>jQuery</li>
            <li>Bootstrap</li>
            <li>Materialize</li>
            <li>React.js</li>
          </ul>
        </Col>
        <Col>
          DATABASES:
          <ul>
            <li>MySQL</li>
            <li>MongoDB</li>
          </ul>
        </Col>
        <Col>
          BACK END:
          <ul>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>MVC</li>
            <li>ORM</li>
          </ul>
        </Col>
        <Col>
          API INTERACTION:
          <ul>
            <li>JSON</li>
            <li>AJAX</li>
          </ul>
        </Col>
        <Col>
          DEV TOOLS:
          <ul>
            <li>Heroku</li>
            <li>Git</li>
            <li>GitHub</li>
          </ul>
        </Col>
      </Row>
    </div>
  );
}

export default Skills;
