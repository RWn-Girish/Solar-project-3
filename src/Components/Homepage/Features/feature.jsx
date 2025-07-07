import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const FeatureSection = ({
  title,
  features = [],
  backgroundColor = "#fff",
  textColor = "#000",
  variant = "cards",
}) => {
  return (
    <section style={{ backgroundColor, color: textColor, padding: "4rem 0" }}>
      <Container>
        {title && (
          <h2 className="text-center mb-5" style={{ color: textColor }}>
            {title}
          </h2>
        )}

        <Row className="g-4 justify-content-center">
          {features.map((feature, index) => (
            <Col key={index} xs={12} sm={6} md={6} lg={3}>
              {variant === "cards" ? (
                <Card
                  className="h-100 text-center border-0 shadow-sm"
                  style={{ backgroundColor: "transparent", color: textColor }}
                >
                  <Card.Body>
                    <div className="mb-3" style={{ fontSize: "2rem" }}>
                      {feature.icon}
                    </div>
                    <Card.Title className="fs-5 fw-bold mb-3">
                      {feature.title}
                    </Card.Title>
                    <Card.Text>{feature.description}</Card.Text>
                  </Card.Body>
                </Card>
              ) : (
                <div className="text-center">
                  <div className="mb-2" style={{ fontSize: "2rem" }}>
                    {feature.icon}
                  </div>
                  <h4>{feature.title}</h4>
                  <p>{feature.description}</p>
                </div>
              )}
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default FeatureSection;
