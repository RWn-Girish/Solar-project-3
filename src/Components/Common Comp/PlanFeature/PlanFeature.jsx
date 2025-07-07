import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import "./PlanFeature.css";
import { FaRegCheckCircle } from "react-icons/fa";
import CustomButton from "../ButtonComp";

const PlanFeature = ({
  image,
  titel,
  heading,
  subheading,
  features = [],
}) => {
  return (
    <div className="plan-feature-section py-5">
      <Container>
        <Row className="align-items-center">
          <Col md={6} className="mb-4 mb-md-0">
            <div className="image-box rounded overflow-hidden">
              <Image src={image} alt="plan" fluid className="w-100 h-100 object-fit-cover"/>
            </div>
          </Col>
          <Col md={6}>
            {titel && (
              <p className="text-uppercase fw-semibold text-muted mb-1">
                {titel}
              </p>
            )}
            <h2 className="fw-bold display-5 mb-3">{heading}</h2>
            <p className="text-muted mb-4">{subheading}</p>
            <ul className="list-unstyled mb-4">
              {features.map((item, idx) => (
                <li key={idx} className="d-flex align-items-start mb-3" style={{ fontSize: "1.2rem" }}>
                  <span className="me-2 mt-1 text-primary">
                    <FaRegCheckCircle />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <CustomButton text="Compare Plans" variant="light"className="fs-6 fw-medium"style={{ color: '#1F2647', 
                             backgroundColor: 'transparent',  border: '1px solid #1F2647' }} />

          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default PlanFeature;
