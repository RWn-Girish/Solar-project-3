import React from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import "./PlanFeature.css"; // optional styles
import { FaRegCheckCircle } from "react-icons/fa";

const PlanFeature = ({
  image,
  titel,
  heading,
  subheading,
  features = [],
  buttonText,
  onButtonClick,
}) => {
  return (
    <div className="plan-feature-section py-5">
      <Container>
        <Row className="align-items-center">
          <Col md={6} className="mb-4 mb-md-0">
            <div className="image-box rounded overflow-hidden">
              <Image src={image} alt="plan" fluid className="w-100 h-100 object-fit-cover" />
            </div>
          </Col>

          <Col md={6}>
            <p className="text-uppercase fw-semibold text-muted mb-1">{titel}</p>
            <h2 className="fw-bold display-5 mb-3">{heading}</h2>
            <p className="text-muted mb-4">{subheading}</p>

            <ul className="list-unstyled mb-4">
              {features.map((item, idx) => (
                <li key={idx} className="d-flex align-items-start mb-2" style={{ fontSize: "24px"}}>
                  <span className="me-2" ><FaRegCheckCircle /></span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {buttonText && (
              <Button
                variant="outline-dark"
                className="rounded-pill px-4 py-4"
                onClick={onButtonClick}
              >
                {buttonText}
              </Button>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default PlanFeature;
