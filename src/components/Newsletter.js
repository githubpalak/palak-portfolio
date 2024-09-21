import { Col, Row } from "react-bootstrap";

export const Newsletter = ({ status, message, onValidated }) => {
  return (
    <Col lg={12}>
      <div className="newsletter-bx wow slideInUp">
        <Row>
          <h4>
            “Welcome to my portfolio ! I'm a passionate beginner coder exploring the world of programming and web development. Here, you'll find my projects showcasing my skills as well as my journey in learning new technologies. 
            Thank You for visiting !”
            <br />
            <br></br> <span> - Palak Chandak </span>
          </h4>
        </Row>
      </div>
    </Col>
  );
};