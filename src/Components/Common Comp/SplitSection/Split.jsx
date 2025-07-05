import React from "react";
import { Container } from "react-bootstrap";
import { FaCheckCircle } from "react-icons/fa";

const Split = ({
  bgImage,
  subtitle,
  title,
  points = [],
  buttonText,
  textColor = "white", // "black" or "white"
}) => {
  const textClass = textColor === "black" ? "text-black" : "text-white";

  return (
    <div
      className="image-overlay-section d-flex align-items-start"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        position: "relative",
        color: textColor,
      }}
    >
     
      <Container
        style={{
          position: "relative",
          zIndex: 2,
          width: "1320px",
        }}
      >
        <div className="col-md-6 px-4 pt-5 mt-5">
          {subtitle && (
            <p className={`text-uppercase fw-bold small mb-1 ${textClass}`}>
              {subtitle}
            </p>
          )}
          <h1 className={`display-4 fw-medium mb-5 mt-5 ${textClass}`}>{title}</h1>

          {points.length > 0 && (
            <ul className={`list-unstyled fs-5 mb-4 ${textClass}`}>
              {points.map((point, index) => (
                <li key={index} className="mb-3 d-flex align-items-start">
                  <FaCheckCircle
                    className={`me-2 mt-1 ${textClass}`}
                  />
                  {point}
                </li>
              ))}
            </ul>
          )}

          {buttonText && (
            <button className="btn btn-outline-light px-4 py-2 rounded-pill">
              {buttonText}
            </button>
          )}
        </div>
      </Container>
    </div>
  );
};

export default Split;


