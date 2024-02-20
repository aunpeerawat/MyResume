import React from "react";
import Badge from "react-bootstrap/Badge";
import Carousel from 'react-bootstrap/Carousel';
import Card from "react-bootstrap/Card";
function Activities(){


    return(<div className="container-fluid mb-4">
    <Badge
      bg=""
      style={{
        display: "flex",
      }}
      className="section-topic"
      id="activitySection"
    >
      Activities
    </Badge>
    <div className="group-certificate d-flex flex-wrap gap-3">
    <Card className="certificate" >
      <Carousel>
      <Carousel.Item>
        <img
          className="d-block"
          src="holder.js/800x400?text=First slide&bg=f5f5f5"
          alt="First slide"
        /></Carousel.Item>
      </Carousel>
      <Card.Body>
        <Card.Title>
          <b>The Complete 2024 Web Development Bootcamp</b>
        </Card.Title>
        <Card.Text>
          <a href="https://udemy-certificate.s3.amazonaws.com/image/UC-5e512ecd-06c6-4496-9634-f8f3e6f76163.jpg?v=1706428109000">
            Certificate Link
          </a>
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
    </div>
    );
}

export default Activities;