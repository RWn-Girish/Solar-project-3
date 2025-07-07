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
    >
      <Container fluid="lg" className={className}>
        <h1 className="display-5 fw-medium mb-5" style={{ maxWidth: "800px" }}>
          {title}
        </h1>

        <Row className="g-4">
          {features.map((feature, index) => (
            <Col
              key={index}
              xs={12}
              sm={6}
              md={variant === "stats" ? 6 : 4}
              lg={variant === "stats" ? 3 : 3}
              className={`${index < features.length - 1 && variant === "stats" ? "border-end" : ""}`}
            >
              {variant === "stats" ? (
                <>
                  <h2 className="fw-bold display-6">{feature.title}</h2>
                  <p className="fs-6 text-secondary" style={{ maxWidth: "320px" }}>
                    {feature.description}
                  </p>
                </>
              ) : (
                <>
                  <div className="mb-3" style={{ fontSize: "2.5rem" }}>{feature.icon}</div>
                  <h5 className="fs-5 fw-bold">{feature.title}</h5>
                  <p className="text-secondary fs-6" style={{ maxWidth: "320px" }}>
                    {feature.description}
                  </p>
                </>
              )}
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default FeatureSection;


