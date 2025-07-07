import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import "./Storage.css";

const Storage = ({ heading, features = [] }) => {
  return (
    <div className="py-5" style={{ backgroundColor: "#fefcf8" }}>
      <Container>
        <Col md={6} className="mb-4 mb-md-0 text-center text-md-start">
        <h2 className="s-heading fw-bold mb-5 text-center text-md-start">{heading}</h2>
        </Col>
        <Col md={6}/>
        <Row className="g-4">
          {features.map((item, index) => (
            <Col key={index} xs={12} md={6} lg={3} className="text-center text-md-start">
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

export default Storage;
