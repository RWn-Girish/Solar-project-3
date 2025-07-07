import React from "react";
import { Container } from "react-bootstrap";
import "./Banner.css";
import CustomButton from "./ButtonComp";
import { FaRegCheckCircle } from "react-icons/fa";

function Banner({
  bgImage,
  heading,
  subheading,
  buttonText,
  center = false,
  smallHeading,
  listItems = [], 
}) {
  const wrapperStyle = {
    backgroundImage: `url(${bgImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100vh",
    display: "flex",
    alignItems: "center",
    color: center ? "#000" : "#fff",
  };

  const contentStyle = {
    maxWidth: "800px",
    textAlign: center ? "center" : "left",
    margin: center ? "0 auto" : "0",
  };

  const headingStyle = {
    fontSize: "60px",
    fontWeight: "500",
    marginBottom: "20px",
    color: center ? "#000" : "#fff",
  };

  const subheadingStyle = {
    fontSize: "1.1rem",
    marginBottom: "1.5rem",
    color: center ? "#555" : "#fff",
  };

  const smallHeadingStyle = {
    textTransform: "uppercase",
    letterSpacing: "1px",
    fontSize: "13px",
    fontWeight: "600",
    marginBottom: "0.5rem",
    color: center ? "#555" : "#fff",
  };

  const listStyle = {
    color: center ? "#555" : "#fff",
    paddingLeft: center ? "0" : "20px",
    textAlign: center ? "center" : "left",
    listStylePosition: "inside",
    marginBottom: "1.5rem",
  };

  return (
    <div className="banner-wrapper" style={wrapperStyle}>
      <Container>
        <div style={contentStyle} className={`banner-content ${center ? "text-center" : "text-start"}`}>
          {smallHeading && <p style={smallHeadingStyle}>{smallHeading}</p>}
          <h1 style={headingStyle}>{heading}</h1>
          {subheading && <p style={subheadingStyle}>{subheading}</p>}
          <ul className="checklist list-unstyled">
          {listItems.map((item, index) => (
          <li key={index} className="check-item d-flex align-items-start pb-3">
          <FaRegCheckCircle className="check-icon me-2 mt-1" />
          <span className="check-text">{item}</span>
          </li>
        ))}
        </ul>
          {buttonText && (
            <CustomButton text={buttonText} className={center ? "outline-dark-rounded" : "fs-6 fw-medium"}/>
          )}
        </div>
      </Container>
    </div>
  );
}

export default Banner;
