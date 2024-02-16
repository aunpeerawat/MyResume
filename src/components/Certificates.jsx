import React from "react";
import Container from 'react-bootstrap/Container';
import Badge from "react-bootstrap/Badge";
import Stack from "react-bootstrap/Stack";
import Card from "react-bootstrap/Card";

function Certificates() {
  return (
    <div>
      <Badge
        bg=""
        style={{
          fontSize: "30px",
          backgroundColor: "#2A1B0E",
          marginBottom: "10px",
          display: "flex",
          alignItems: "center",
          padding: "10px 10px 10px 30px",
        }}
      >
        Certificates
      </Badge>
      <div className="group-certificate d-flex flex-wrap gap-3">
      <Card className="certificate" >
        <Card.Img
          variant="top"
          src="https://udemy-certificate.s3.amazonaws.com/image/UC-5e512ecd-06c6-4496-9634-f8f3e6f76163.jpg?v=1706428109000"
        />
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

      <Card className="certificate">
        <Card.Img
          variant="top"
          src="https://raw.githubusercontent.com/aunpeerawat/myresume/main/public/assets/IBM-Resume.jpg"
        />
        <Card.Body>
          <Card.Title>
            <b>IBM Data Analyst Specialization</b>
          </Card.Title>
          <Card.Text>
            <a href="https://www.coursera.org/account/accomplishments/specialization/certificate/74UVYDB8MYT8">
              Certificate Link
            </a>
          </Card.Text>
        </Card.Body>
      </Card>

      <Card className="certificate">
        <Card.Img
          variant="top"
          src="https://raw.githubusercontent.com/aunpeerawat/myresume/main/public/assets/UCDavis-Resume.jpg"
        />
        <Card.Body>
          <Card.Title>
            <b>Introduction to Web Development</b>
          </Card.Title>
          <Card.Text>
            <a href="https://www.coursera.org/account/accomplishments/verify/LBL82RJN3Y5X">
              Certificate Link
            </a>
          </Card.Text>
        </Card.Body>
      </Card>
      </div>
      
    </div>
  );
}
export default Certificates;