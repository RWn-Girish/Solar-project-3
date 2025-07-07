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
  const textAlign = center ? "text-center" : "text-start";
  const textColor = center ? "text-black" : "text-white";

  return (
    <div
      className="banner-wrapper d-flex align-items-center"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      <div className="banner-overlay">
        <Container>
          <div className={`banner-content ${textAlign}`}>
            {smallHeading && <p className={`small-heading ${textColor}`}>{smallHeading}</p>}
            <h1 className={`banner-heading ${textColor}`}>{heading}</h1>
            {subheading && <p className={`subheading ${textColor}`}>{subheading}</p>}

            {listItems.length > 0 && (
              <ul className={`checklist list-unstyled ${textColor}`}>
                {listItems.map((item, index) => (
                  <li key={index} className="check-item d-flex align-items-start justify-content-center justify-content-md-start pb-3">
                    <FaRegCheckCircle className="check-icon me-2 mt-1" />
                    <span className="check-text">{item}</span>
                  </li>
                ))}
              </ul>
            )}

            {buttonText && (
              <div className={center ? "text-center" : ""}>
                <CustomButton
                  text={buttonText}
                  className={center ? "outline-dark-rounded" : "fs-6 fw-medium"}
                />
              </div>
            )}
          </div>
        </Container>
      </div>
    </div>
  );
}

export default Banner;
