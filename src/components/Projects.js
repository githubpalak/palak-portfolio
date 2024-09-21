import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import LearnTech from "../assets/img/LearnTech.png";
import portfolio from "../assets/img/portfolio.png";
import todolist from "../assets/img/todolist.png";
import hospital from "../assets/img/hospital.png";
import waterpump from "../assets/img/waterpump.png";
import emfdetector from "../assets/img/emfdetector.png";
import lasersecurity from "../assets/img/lasersecurity.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";
import { Hospital } from "react-bootstrap-icons";

export const Projects = () => {

  const all = [
    {
      title: "Personal Portfolio",
      description:
        "Design & Developed a responsive personal portfolio website using React, ensuring clean HTML and CSS coding practices for enhanced user experience.",
      imgUrl: portfolio,
      link: "",
    },
    {
      title: "Hospital Management System",
      description:
        "Developed a seamless full-stack Hospital Management System using Python - Djnago, React, and MySQL, facilitating efficient management of hospital service analyzing data of patients, doctors, and appointments.",
      imgUrl: hospital,
      link: "https://github.com/githubpalak/hospital-management-system",
    },
    {
      title: "To Do List",
      description:
        "Design & Developed a responsive To Do List website using Javascript, ensuring clean HTML and CSS coding practices for enhanced user experience.",
      imgUrl: todolist,
      link: "https://github.com/githubpalak/To-DoList-using-HTML-and-CSS",
    },
    {
      title: "LearnTech The Learning Website",
      description:
        "Design & Developed a learning website, ensuring clean HTML and CSS coding practices for enhanced user experience and explore various coding courses.",
      imgUrl: LearnTech,
      link: "https://github.com/githubpalak/Learning-Website",
    },
    {
      title: "Soil Moisture Level Based Automatic Water Pump using Arduino",
      description:
        "Design & Developed a Electronics System using Arduino UNO that turns water pump On and Off based on the soil moisture level.",
      imgUrl: waterpump,
      link: "https://github.com/githubpalak/Water-Pump",
    },
    {
      title: "EMF Detector",
      description:
        "Developed a Electronics System that detects emf near devices.",
      imgUrl: emfdetector,
      link: "",
    },
    {
      title: "Laser Security Alarm",
      description:
        "Design & Developed a Electronics Alarm System that gets triggered when Laser beam gets interrupted.",
      imgUrl: lasersecurity,
      link: "",
    },
  ];

  const software = [
    {
      title: "Personal Portfolio",
      description:
        "Design & Developed a responsive personal portfolio website using React, ensuring clean HTML and CSS coding practices for enhanced user experience.",
      imgUrl: portfolio,
      link: "",
    },
    {
      title: "Hospital Management System",
      description:
        "Developed a seamless full-stack Hospital Management System using JPython - Djnago, React, and MySQL, facilitating efficient management of hospital service analyzing data of patients, doctors, and appointments.",
      imgUrl: hospital,
      link: "https://github.com/githubpalak/hospital-management-system",
    },
    {
      title: "To Do List",
      description:
        "Design & Developed a responsive To Do List website using Javascript, ensuring clean HTML and CSS coding practices for enhanced user experience.",
      imgUrl: todolist,
      link: "https://github.com/githubpalak/To-DoList-using-HTML-and-CSS",
    },
    {
      title: "LearnTech The Learning Website",
      description:
        "Design & Developed a learning website, ensuring clean HTML and CSS coding practices for enhanced user experience and explore various coding courses.",
      imgUrl: LearnTech,
      link: "https://github.com/githubpalak/Learning-Website",
    },
  ];
  const electronics = [
    {
      title: "Soil Moisture Level Based Automatic Water Pump using Arduino",
      description:
        "Design & Developed a Electronics System using Arduino UNO that turns water pump On and Off based on the soil moisture level.",
      imgUrl: waterpump,
      link: "https://github.com/githubpalak/Water-Pump",
    },
    {
      title: "EMF Detector",
      description:
        "Developed a Electronics System that detects emf near devices.",
      imgUrl: emfdetector,
      link: "",
    },
    {
      title: "Laser Security Alarm",
      description:
        "Design & Developed a Electronics Alarm System that gets triggered when Laser beam gets interrupted.",
      imgUrl: lasersecurity,
      link: "",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    I've developed various software applications
                    using JavaScript, Python, Java, and C++, ensuring
                    proper understanding of their concepts and practical implementations. Employing
                    React, Node.js and Django. Database management strategies focused on data
                    organization and security, leveraging MySQL and MongoDB. While Git and GitHub facilitated efficient
                    deployment and collaborative coding practices.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">
                          All Projects
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Software </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Electronics</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {all.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {software.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <Row>
                          {electronics.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img
        className="background-image-right"
        src={colorSharp2}
        alt="bg-right-proj"
      ></img>
    </section>
  );
};