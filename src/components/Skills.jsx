import React from "react";
import Badge from "react-bootstrap/Badge";
import Stack from "react-bootstrap/Stack";

function Skills() {
  return (
    <div className="container-fluid ">
      <Badge
        bg=""
        
        className="d-flex section-topic"
        id="skillsSection"
      >
        <text className="">Skills</text>
      </Badge>
      <Stack
        direction="horizontal"
        gap={2}
        style={{ marginBottom: "30px" }}
      ></Stack>
      <Badge
        bg=""
        style={{
          backgroundColor: "#412B15",
          marginBottom: "10px",
        }}
        className="skill-topic"
      >
        Programming Languages
      </Badge>
      <Stack direction="horizontal" gap={2} style={{ marginBottom: "30px" }} className="d-flex flex-wrap">
        <Badge bg=""  className="skill-element">
          Javascript (ES6)
        </Badge>
        <Badge bg=""  className="skill-element">
          HTML5
        </Badge>
        <Badge bg=""  className="skill-element">
          CSS3
        </Badge>
        <Badge bg=""  className="skill-element">
          SQL
        </Badge>
        <Badge bg=""  className="skill-element">
          Python
        </Badge>
        <Badge bg=""  className="skill-element">
          R
        </Badge>
        <Badge bg=""  className="skill-element">
          C/C++
        </Badge>
      </Stack>
      <Badge
        bg=""
        className="skill-topic"
      >
        Front-End Technologies
      </Badge>
      <Stack direction="horizontal" gap={2} style={{ marginBottom: "30px" }}>
        <Badge bg=""  className="skill-element">
          React.js
        </Badge>
        <Badge bg=""  className="skill-element">
          Bootstrap
        </Badge>
      </Stack>
      <Badge
        bg=""
        className="skill-topic"
      >
        Back-End Technologies
      </Badge>
      <Stack direction="horizontal" gap={2} style={{ marginBottom: "30px" }}>
        <Badge bg=""  className="skill-element">
          Node.js
        </Badge>
        <Badge bg=""  className="skill-element">
          Express.js
        </Badge>
        <Badge bg=""  className="skill-element">
          Postman
        </Badge>
      </Stack>
      <Badge
        bg=""
        className="skill-topic"
      >
        Database Management
      </Badge>
      <Stack direction="horizontal" gap={2} style={{ marginBottom: "30px" }}>
        <Badge bg=""  className="skill-element">
          React.js
        </Badge>
        <Badge bg=""  className="skill-element">
          PostgreSQL
        </Badge>
      </Stack>
      <Badge
        bg=""
        className="skill-topic"
      >
        Languages
      </Badge>
      <Stack direction="horizontal" gap={2} style={{ marginBottom: "50px" }}>
        <Badge bg=""  className="skill-element">
          Thai (Native proficiency)
        </Badge>
        <Badge bg=""  className="skill-element">
          English (TOEIC 825)
        </Badge>
      </Stack>
    </div>
  );
}

export default Skills;