import React,{useState} from "react";
import Badge from "react-bootstrap/Badge";
import Card from "react-bootstrap/Card";
import Carousel from 'react-bootstrap/Carousel';

function CodeExperience(){
    const [index, setIndex] = useState(0);
    const [indexTwo, setIndexTwo] = useState(0);

    const handleSelect = (selectedIndex) => {
      setIndex(selectedIndex);
    };
    const handleSelectTwo = (selectedIndex) =>{
      setIndexTwo(selectedIndex);
    }

    return (<div className="container-fluid mb-4">
    <Badge
      bg=""
      style={{
        display: "flex",
      }}
      className="section-topic"
      id="code-exSection"
    >
      Coding Experiences
    </Badge>
    <div className="group-certificate d-flex flex-wrap gap-3">
    <Card className="certificate" >
    <Carousel activeIndex={index} onSelect={handleSelect} className="mx-auto">
    <Carousel.Item >
      <img
          className="d-block w-100 code-experience"
          src="https://raw.githubusercontent.com/aunpeerawat/myresume/main/public/assets/experiences/Scanner_IMG_2018-11-25%2011-17-49.tsv.jpg"
          alt="First slide"
        /></Carousel.Item>
        <Carousel.Item >
      <img
          className="d-block w-100 code-experience"
          src="https://raw.githubusercontent.com/aunpeerawat/myresume/main/public/assets/experiences/FB_IMG_1522288594533.jpg"
          alt="Second slide"
        /></Carousel.Item>
        </Carousel>
      <Card.Body>
        <Card.Title >
          <b ><span className="itim">สอวน. คอมพิวเตอร์ ค่ายที่ 2</span> (POSN Camp 2)</b>
        </Card.Title>
      </Card.Body>
    </Card>

    <Card className="certificate">
      <Card.Img
        variant="top"
        src="https://raw.githubusercontent.com/aunpeerawat/myresume/main/public/assets/experiences/%E0%B9%80%E0%B8%81%E0%B8%B5%E0%B8%A2%E0%B8%A3%E0%B8%95%E0%B8%B4%E0%B8%9A%E0%B8%B1%E0%B8%95%E0%B8%A3_page-0001.jpg"
        className="code-experience"
      />
      <Card.Body>
        <Card.Title>
          <b>Suankularb Olympiad of Informatic 2017 (SKOI &rsquo;17)</b>
        </Card.Title>
      </Card.Body>
    </Card>

    <Card className="certificate">
      <Card.Img
        variant="top"
        src="https://raw.githubusercontent.com/aunpeerawat/myresume/main/public/assets/experiences/%E0%B8%9E%E0%B8%B5%E0%B8%A3%E0%B8%A7%E0%B8%B1%E0%B8%AA%20%E0%B9%82%E0%B8%AD%E0%B8%AC%E0%B8%B2%E0%B8%A3%E0%B8%81%E0%B8%B4%E0%B8%88%E0%B8%A7%E0%B8%B2%E0%B8%99%E0%B8%B4%E0%B8%8A_page-0001.jpg"
        className="code-experience"
      />
      <Card.Body>
        <Card.Title>
          <b>SIT Code Challenge 2017</b>
        </Card.Title>
      </Card.Body>
    </Card>
    <Card className="certificate" >
    <Carousel activeIndex={indexTwo} onSelect={handleSelectTwo} className="mx-auto">
    <Carousel.Item >
      <img
          className="d-block w-100 code-experience"
          src="https://raw.githubusercontent.com/aunpeerawat/myresume/main/public/assets/experiences/FB_IMG_1490512774508-transformed.png"
          alt="First slide"
        /></Carousel.Item>
        <Carousel.Item >
      <img
          className="d-block w-100 code-experience"
          src="https://raw.githubusercontent.com/aunpeerawat/myresume/main/public/assets/experiences/20170326_090130.jpg"
          alt="Second slide"
        /></Carousel.Item>
        </Carousel>
      <Card.Body>
        <Card.Title >
          <b >ICT Junior Camp #9</b>
        </Card.Title>
      </Card.Body>
    </Card>
    
    </div>
    
  </div>);
}

export default CodeExperience;