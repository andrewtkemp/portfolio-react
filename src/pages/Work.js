import React from "react";
import workFull from "../workFull";
import workBack from "../workBack";
import workFront from "../workFront";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Button } from "react-bootstrap";

function Work() {
  // console.log(work)------need tech and image;
  return (
    <div className="container pt-5" id="work">
      <div className="row justify-content-center">
        <h2 className="col-12">
          Please feel free to look at some of my work.
        </h2>
        <div className="row justify-content-center" id="full">
          {workFull.map((workFull) => (
            <Card className="col-12" style={{ width: "25rem" }}>
              <Card.Img variant="top" className="testimonialImages d-block p-5 w-100 img-fluid rounded" src={workFull.image} alt={workFull.alt} />
              <Card.Body>
                <Card.Title>{workFull.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Full Stack Application</Card.Subtitle>
                <Card.Text>{workFull.description}</Card.Text>
                <Card.Text>TECHNOLOGIES USED:  {workFull.technology}</Card.Text>
                <Button target="_blank" href={workFull.deployed}>See the App</Button>
        
                <Button target="_blank" href={workFull.repo}>See the Repo</Button>
              </Card.Body>
            </Card>
          ))}
        </div>

        <div className="row justify-content-center" id="back">
          {workBack.map((workBack) => (
            <Card className="col-12" style={{ width: "25rem" }}>
             
              <Card.Body>
                <Card.Title>{workBack.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Backend Application</Card.Subtitle>
                <Card.Text>{workBack.description}</Card.Text>
                <Card.Text>TECHNOLOGIES USED:  {workBack.technology}</Card.Text>
                <Button target="_blank" href={workBack.repo}>See the Repo</Button>
                <Button target="_blank" href={workBack.demo}>See a Demo</Button>
              </Card.Body>
            </Card>
          ))}
        </div>

        <div className="row justify-content-center" id="front">
          {workFront.map((workFront) => (
            <Card className="col-12" style={{ width: "25rem" }}>
              <Card.Img variant="top" className="testimonialImages d-block p-5 w-100 img-fluid rounded" src={workFront.image} alt={workFront.alt} />
              <Card.Body>
                <Card.Title>{workFront.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Front Stack Application</Card.Subtitle>
                <Card.Text>{workFront.description}</Card.Text>
                <Card.Text>TECHNOLOGIES USED:  {workFront.technology}</Card.Text>
                <Button target="_blank" href={workFront.deployed}>See the App</Button>
        
                <Button target="_blank" href={workFront.repo}>See the Repo</Button>
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Work;
