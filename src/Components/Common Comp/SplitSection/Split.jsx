import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaCheckCircle } from "react-icons/fa";
import "./Split.css"

const Split = ({
  bgImage,
  subtitle,
  title,
  points = [],
  buttonText,
  textColor = "white", // "black" or "white"
}) => {
  const textClass = textColor === "black" ? "text-black" : "text-white";
  const buttonClass = textColor === "black" ? "btn-dark" : "btn-light";

  return (
    <div
      className="image-overlay-section d-flex align-items-start"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        position: "relative",
        color: textColor,
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          backgroundColor: "rgba(0, 0, 0, 0.4)", // optional dark overlay
          zIndex: 1,
        }}
      ></div>

      <Container fluid="lg" style={{ position: "relative", zIndex: 2 }}>
        <Row className="pt-5 mt-5">
          <Col
            md={6}
            className={`px-4 pt-5 mt-5 ${
              textColor === "black" ? "text-start" : "text-start"
            }`}
          >
            {subtitle && (
              <p
                className={`text-uppercase fw-bold small mb-1 ${textClass}`}
              >
                {subtitle}
              </p>
            )}
            <h1 className={`display-4 fw-medium mb-5 mt-3 ${textClass}`}>
              {title}
            </h1>

            {points.length > 0 && (
              <ul className={`list-unstyled fs-5 mb-4 ${textClass}`}>
                {points.map((point, index) => (
                  <li key={index} className="mb-3 d-flex align-items-start">
                    <FaCheckCircle className={`me-2 mt-1 ${textClass}`} />
                    {point}
                  </li>
                ))}
              </ul>
            )}

            {buttonText && (
              <button
                className={`btn ${buttonClass} px-4 py-2 rounded-pill`}
              >
                {buttonText}
              </button>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Split;


