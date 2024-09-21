import React from "react";
import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, link }) => {
  const handleLinkClick = (e) => {
    e.preventDefault();
    window.open(link, "_blank");
  };

  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt="" />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          {link && (
            <h6>
              <a
                href={link}
                target="_blank" // Opens the link in a new tab/window
                rel="noopener noreferrer" // Recommended for security reasons
                style={{
                  color: "#ffffff",
                  textDecoration: "none",
                  transition: "color 0.3s ease",
                }}
                onMouseOut={(e) => {
                  e.target.style.color = "#ffffff";
                  e.target.style.textDecoration = "underline";
                }}
                onMouseOver={(e) => {
                  e.target.style.color = "#64C7FC";
                  e.target.style.textDecoration = "underline";
                }}
                onClick={handleLinkClick} // Handle click event
              >
                Project Link
              </a>
            </h6>
          )}
        </div>
      </div>
    </Col>
  );
};