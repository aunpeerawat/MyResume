import React from "react";
import Badge from "react-bootstrap/Badge";
import Card from "react-bootstrap/Card";

function Projects() {
  return (
    <div className="container-fluid mb-4 certificate-element">
      <Badge
        bg=""
        style={{
          display: "flex",
        }}
        className="section-topic"
        id="projectSection"
      >
        Projects
      </Badge>
      <div className="group-certificate d-flex flex-wrap gap-3">
      <Card className="certificate" >
        <Card.Img
          variant="top"
          src="https://raw.githubusercontent.com/aunpeerawat/myresume/main/public/assets/discount-module.png"
        />
        <Card.Body>
          <Card.Title>
            <b>My Discount Module</b>
          </Card.Title>
          <Card.Text>
            <a href="https://discount-module-ten.vercel.app/">
              My Discount Module Link
            </a>
          </Card.Text>
        </Card.Body>
      </Card>

      </div>
      
    </div>
  );
}
export default Projects;