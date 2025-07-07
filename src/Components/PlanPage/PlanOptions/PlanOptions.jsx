import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import "./PlanOptions.css";
import Plan_1 from "../../../assets/Images/Plan-1.webp";
import Plan_2 from "../../../assets/Images/Plan-2.webp"; 
import Plan_3 from "../../../assets/Images/Plan-3.webp";

const plans = [
  {
    title: "Sunrun Subscription Plan",
    subtitle: "America’s favorite solar lease",
    image: Plan_1,
    highlight: true,
  },
  {
    title: "Monthly solar loan",
    subtitle: "Solar ownership with simple monthly payments",
    image: Plan_2,
    highlight: false,
  },
  {
    title: "Full ownership",
    subtitle: "Take charge of your energy and your savings",
    image: Plan_3,
    highlight: false,
  },
];

const PlanOptions = () => {

  return (
    <Container fluid="md" className="my-5">

      {/* Top Text Section */}
      <div className="text-center text-lg-start mb-4">
        <p className="fw-bold  small m-0">PICK THE RIGHT PLAN FOR YOU</p>
        <h2 className="fw-bold display-5  ">Power life on your terms</h2>
        <p className="lead ">
          Our tailored payment plans make home solar more affordable with predictable monthly payments, little to no money down, and no debt options.
        </p>
      </div>

      {/* Plan Cards */}
      <Row className="g-4">
        {plans.map((plan, index) => (
         <Col xl={4} md={6} sm={12} key={index}>

        <div className="PlanOption-Card" >
            <div className="text-strat  plan-card p-4">
              <Image src={plan.image} alt={plan.title} rounded className="mb-3 plan-image" />
              <h5 className={`fw-bold text-strat ${plan.highlight ? " text-decoration-underline " : "text-dark text-decoration-underline"}`}>
                <a href="#" className="plan-text">{plan.title}</a>
              </h5>
              <p className={`mb-0 ${plan.highlight ? "" : "text-muted"}`}>{plan.subtitle}</p>
            </div>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default PlanOptions;
