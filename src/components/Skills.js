import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import react from "../assets/img/react.svg";
import js from "../assets/img/js.svg";
import java from "../assets/img/java.svg";
import cpp from "../assets/img/csharp.svg"
import python from "../assets/img/python.svg";
import django from "../assets/img/django.svg";
import mysql from "../assets/img/mysql.svg";
import aws from "../assets/img/aws.svg";
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  // Array of items to be rendered in the carousel
  const items = [
    { image: react, title: "React" },
    { image: js, title: "JavaScript" },
    { image: java, title: "Java" },
    { image: cpp, title: "C++" },
    { image: python, title: "Python" },
    { image: django, title: "Django" },
    { image: mysql, title: "MySQL" },
    { image: aws, title: "AWS Services" },
  ];
return (
  <section className="skill" id="skills">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="skill-bx wow zoomIn">
            <h2>Skills</h2>
            <p>
              Here are the skills I've developed as a beginner coder, reflecting my journey and passion for programming and web development.
            </p>
            <Carousel
              responsive={responsive}
              infinite={true}
              className="owl-carousel owl-theme skill-slider"
            >
              {/* Mapping items dynamically */}
              {items.map((item, index) => (
                <div key={index} className="item">
                  <img src={item.image} alt="skillsets" />
                  <h5>{item.title}</h5>
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </div>
    <img className="background-image-left" src={colorSharp} alt="Bg-skills" />
  </section>
);
};