
import React from "react";
import works from "../works.json";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button } from "react-bootstrap";

function Work() {
    // console.log(work)------need to add repo, deployed and or demo;
    return (
        <div className="container pt-5">
            <div className="row justify-content-center">
                <h4 className="col-12">Feel free to check out some of my work</h4>
            <Card className="col-12"style={{ width: '18rem' }}>
                {works.map(work => (
                    <>
                        <Card.Img variant="top" 
                            className="testimonialImages d-block p-5 w-75 img-fluid rounded"
                            src={work.img}
                            alt={work.alt}
                        />
                        <Card.Body>
                            <Card.Title>{work.title}</Card.Title>
                            <Card.Text>{work.description, work.technology}</Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                            
                    </Card.Body>
                    </>
                ))}
            </Card>
        </div>
        </div>
    );
}

export default Work;
