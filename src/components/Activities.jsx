import React,{useState} from "react";
import Badge from "react-bootstrap/Badge";
import Carousel from 'react-bootstrap/Carousel';
function Activities(){
    const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

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

    <Carousel activeIndex={index} onSelect={handleSelect} className="col-md-10 col-lg-6 mx-auto">
    <Carousel.Item >
      <img
          className="d-block w-100 mt-3"
          src="https://raw.githubusercontent.com/aunpeerawat/myresume/main/public/assets/activities/LINE_ALBUM_Stage%20Actor%20%20FE%20Camp_2306042.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 style={{color:"white", WebkitTextStroke:"1px black"}}>13th FE Camp (Stage Performer)</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item >
      <img
          className="d-block w-100 mt-3"
          src="https://raw.githubusercontent.com/aunpeerawat/myresume/main/public/assets/activities/LINE_ALBUM_Stage%20Actor%20%20FE%20Camp_230604.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3 style={{color:"white", WebkitTextStroke:"1px black"}}>13th FE Camp (Stage Performer)</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item >
      <img
          className="d-block w-100 mt-3"
          src="https://raw.githubusercontent.com/aunpeerawat/myresume/main/public/assets/activities/MVCUCAMP-75.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3 style={{color:"white", WebkitTextStroke:"1px black"}}>6th CU Movie Camp (Performer)</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item >
      <img
          className="d-block w-100 mt-3"
          src="https://raw.githubusercontent.com/aunpeerawat/myresume/main/public/assets/activities/MVCUCAMP-95.jpg"
          alt="Fourth slide"
        />
        <Carousel.Caption>
          <h3 style={{color:"white", WebkitTextStroke:"1px black"}}>6th CU Movie Camp (Performer)</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item >
      <img
          className="d-block w-100 mt-3"
          src="https://raw.githubusercontent.com/aunpeerawat/myresume/main/public/assets/activities/83773227_10158135284977425_5045967380249837568_n.jpg"
          alt="Fifth slide"
        />
        <Carousel.Caption>
          <h3 style={{color:"white", WebkitTextStroke:"1px black"}}>19th Larngear Camp (Staff)</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item >
      <img
          className="d-block w-100 mt-3"
          src="https://raw.githubusercontent.com/aunpeerawat/myresume/main/public/assets/activities/83944417_10158135271257425_8824958908993896448_n.jpg"
          alt="Sixth slide"
        />
        <Carousel.Caption>
          <h3 style={{color:"white", WebkitTextStroke:"1px black"}}>19th Larngear Camp (Staff)</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item >
      <img
          className="d-block w-100 mt-3"
          src="https://raw.githubusercontent.com/aunpeerawat/myresume/main/public/assets/activities/LINE_ALBUM_____230604.jpg"
          alt="Seventh slide"
        />
        <Carousel.Caption>
          <h3 style={{color:"white", WebkitTextStroke:"1px black"}}>Taekwondo Club (Member)</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item >
      <img
          className="d-block w-100 mt-3"
          src="https://raw.githubusercontent.com/aunpeerawat/myresume/main/public/assets/activities/LINE_ALBUM_1092562%20BE_230604.jpg"
          alt="Eight slide"
        />
        <Carousel.Caption>
          <h3 style={{color:"white", WebkitTextStroke:"1px black"}}>Taekwondo Club (Member)</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
    );
}

export default Activities;