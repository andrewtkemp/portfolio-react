
import React from "react";
import works from "../works.json";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from "react-bootstrap";

function Work() {
    // console.log(work);
    return (
        <div className="pt-1 mb-3 pb-5">
            <h2 class="mt-5 text-center">Check Out Some Of My Work</h2>
            <Card>
                {works.map(work => (
                    <Card.Item key={work.id}>
                        <img
                            className="testimonialImages d-block p-5 w-75 img-fluid rounded"
                            src={work.img}
                            alt={work.alt}
                        />
                        <Card.Caption>
                            <h3>{work.title}</h3>
                            <p>{work.description}</p>
                        </Card.Caption>
                    </Card.Item>
                ))}
            </Card>
        </div>
    );
}

export default Work;
