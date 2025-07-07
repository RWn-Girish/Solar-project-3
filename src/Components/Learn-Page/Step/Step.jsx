import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Steps.css";
import step1 from "../../../assets/Images/step1.webp";
import step2 from "../../../assets/Images/step2.webp";
import step3 from "../../../assets/Images/step3.webp";
import step4 from "../../../assets/Images/step4.webp";

const steps = [
  {
    img: step1,
    title: "Step 1",
    text: "We assess the best solar or solar-plus-storage solution to meet your household’s energy needs, today and tomorrow.",
  },
  {
    img: step2,
    title: "Step 2",
    text: "Our team designs and installs a customized system for your home.",
  },
  {
    img: step3,
    title: "Step 3",
    text: "You pick the payment plan that works for you—from predictable monthly payments, little to no money down, and no debt options.",
  },
  {
    img: step4,
    title: "Step 4",
    text: "We handle the rest—with extended guarantees, 24/7 system monitoring, and dedicated customer support. Together, we can create a planet run by the sun.",
  },
];

const Steps = () => {
  return (
    <div className="steps-section py-5">
      <Container style={{width: '1320px' }}>
        <div className="text-start mb-5">
          <h2 className="steps-heading display-4">Simple steps, big impact</h2>
          <p className="steps-subheading">
            Going solar can feel complicated. At Sunrun, we make it simple.
          </p>
        </div>
        <Row className="g-4">
          {steps.map((step, index) => (
            <Col md={6} xs={12} key={index}>
              <div className="step-card">
                <img src={step.img} alt={step.title} className="step-img" />
                <h5 className="mt-3 fw-medium">{step.title}</h5>
                <p className=" mt-2 fw-medium">{step.text}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Steps;

