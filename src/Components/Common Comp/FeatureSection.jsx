import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const FeatureSection = ({
  title,
  features,
  backgroundColor = "white",
  textColor = "black",
  className = "",
  variant = "cards", // 'cards' or 'stats'
}) => {
  return (
    <div
      style={{
        backgroundColor,
        color: textColor,
        padding: "4rem 0",
      }}
      className="py-5"
    >
      <Container className={className} style={{ width: "1320px" }}>
        <h1
          className="display-4 fw-medium mb-5"
          style={{ maxWidth: variant === "stats" ? "45%" : "50%" }}
        >
          {title}
        </h1>

        {variant === "stats" ? (
          <Row className="g-5">
            {features.map((feature, index) => (
              <Col
                key={index}
                md={3}
                className={`pe-4 ${index < features.length - 1 ? "border-end" : ""}`}
              >
                <h2 className="fw-bold display-6">{feature.title}</h2>
                <p className="fs-6 text-secondary w-75">{feature.description}</p>
              </Col>
            ))}
          </Row>
        ) : (
          <Row className="g-5">
            {features.map((feature, index) => (
              <Col
                key={index}
                md={3}
                className={`pe-4 ${index < features.length - 1 ? "border-end" : ""}`}
              >
                <div className="mb-3" style={{ fontSize: "2.5rem" }}>{feature.icon}</div>
                <h5 className="fs-5 fw-bold w-75">{feature.title}</h5>
                <p className="text-secondary fs-6 w-75">{feature.description}</p>
              </Col>
            ))}
          </Row>
        )}
      </Container>
    </div>
  );
};

export default FeatureSection;

