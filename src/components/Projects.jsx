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
          src="https://raw.githubusercontent.com/aunpeerawat/myresume/main/public/assets/Project-Resume.png"
          style={{ width: '286.4px', height: '179px' }}
        />
        <Card.Body>
          <Card.Title>
            <b>My Resume</b>
          </Card.Title>
          <Card.Text>
          Front-end web project utilizing Bootstrap, HTML, CSS, and JavaScript. The project encompasses sections for showcasing my profile, skills, code experiences, certificates, projects, and activities. 
            <br /><a href="https://myresume-sage.vercel.app/">
              Live web page
            </a><br /><a href="https://github.com/aunpeerawat/myresume">
              Project on Github
            </a>
          </Card.Text>
        </Card.Body>
      </Card>

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
          Front-end web project utilizing React.js, Bootstrap, HTML, CSS, and JavaScript. The module efficiently computes the final order price by applying diverse discount campaigns to items in the shopping cart. 
            <br /><a href="https://discount-module-ten.vercel.app/">
              Live web page
            </a><br /><a href="https://github.com/aunpeerawat/discount-module">
              Project on Github
            </a>
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className="certificate" >
        <Card.Img
          variant="top"
          src="https://raw.githubusercontent.com/aunpeerawat/myresume/main/public/assets/Favorite-Pokemon.png"
          style={{ width: '286.4px', height: '179px' }}
        />
        <Card.Body>
          <Card.Title>
            <b>My Favorite Pokemon</b>
          </Card.Title>
          <Card.Text>
          Developed a Pokemon Favorites Page using HTML, JavaScript, Tailwind CSS, and React. Utilized Axios to fetch data from The RESTful Pokémon API, allowing users to effortlessly add their favorite Pokemon.
            <br /><a href="https://favorite-pokemon-one.vercel.app/">
              Live web page
            </a><br /><a href="https://github.com/aunpeerawat/favorite-pokemon">
              Project on Github
            </a>
          </Card.Text>
        </Card.Body>
      </Card>


      </div>
      
    </div>
  );
}
export default Projects;
