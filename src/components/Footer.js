import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm.js";
import logo from "../assets/img/logo.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/palak-chandak-32a250256/">
                <img src={navIcon1} alt="" />
              </a>
              <a href="mailto:palakchandak1805@gmail.com">
                <img src={navIcon2} alt="" />
              </a>
              <a href="https://github.com/githubpalak">
                <img src={navIcon3} alt="" />
              </a>
            </div>
            <p>Copyright {currentYear}. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};