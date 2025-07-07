import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import "./CleanEnergyFeatures.css"; // optional styles

const CleanEnergyFeatures = ({ heading, features = [] }) => {
  return (
    <div className="py-5" style={{ backgroundColor: "#fefcf8" }}>
      <Container>
        <h2 className="fw-bold mb-5 text-center text-md-start">{heading}</h2>
        <Row className="g-4">
          {features.map((item, index) => (
            <Col lg={4} md={6} sm={12} key={index} className="text-center text-md-start">
              <Image
                src={item.image}
                alt={item.title}
                fluid
                rounded
                className="mb-3 feature-image"
              />
              <h5 className="fw-bold feature-title my-4">{item.title}</h5>
              <p className="text-muted">{item.description}</p>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default CleanEnergyFeatures;
