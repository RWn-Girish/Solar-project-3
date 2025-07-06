import React from "react";
import { Container, Row, Col, Card, Button, Badge } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./SolarComparison.css"; 
import { FaCheckCircle } from "react-icons/fa";

const SolarComparison = () => (
  <Container className="container plan py-5">
    <Row className="mb-4 ">
      <Col md={10} lg={6}>
        <h1 className="main-title">
          Sunrun Subscription Plan vs. solar panels ownership
        </h1>
        <p className="subtitle">
          Our solar lease subscription plan offers predictable, affordable rates for as little as $0 down in upfront costs, or you could purchase solar panels outright.
        </p>
      </Col>
    </Row>
    <Row className="g-4 justify-content-center">
      <Col xs={12} md={6} lg={5} className="card-1">
        <Card className="comparison-card  ">
          <Card.Body>
            <Badge  text="dark" className="mb-2 popup " style={{
               fontWeight: 600, color: "#333", padding: "0.5rem 1rem", borderRadius: "20px"}}>
              Most popular
            </Badge>
            <Card.Title as="h2" className="card-title">
              Sunrun Subscription Plan
            </Card.Title>
            <div className="card-subtitle mb-2">Leasing solar panels</div>
            <div>
              <div className="section-title pt-2">Benefits</div>
              <ul className="benefits-list">
                <li><FaCheckCircle className="me-2" />

                  <b>Predictable, affordable payments</b></li>
                <li><FaCheckCircle className="me-2 my-3" />Protect against rising utility costs</li>
                <li><FaCheckCircle className="me-2 " />
                  Extended Sunrun warranties including workmanship and energy production guarantee for life of contract, 10 year roof penetration warranty, 24/7 system monitoring
                </li>
              </ul>
            </div>
            <div>
              <div className="section-title">Who maintains?</div>
              <ul>
                <li>Sunrun owns and maintains</li>
                <li>Plan transfers to new owners if you sell your home</li>
              </ul>
            </div>
            <div>
              <div className="section-title">Payments</div>
              <ul>
                <li>$0 to little down</li>
                <li>Locked in monthly solar lease</li>
              </ul>
            </div>
            <div className="d-flex gap-2 mt-3">
              <Button variant="outline-dark" className="rounded-pill">Get a quote</Button>
              <Button variant="outline-dark" className="rounded-pill">Learn more</Button>
            </div>
          </Card.Body>
        </Card>
      </Col>
      <Col xs={12} md={6} lg={5}>
        <Card className="comparison-card card-2">
          <Card.Body>
            <Card.Title as="h2" className="card-title">
              Solar panels ownership
            </Card.Title>
            <div className="card-subtitle mb-2">Purchasing solar panels</div>
            <div>
              <div className="section-title pt-2">Benefits</div>
              <ul className="benefits-list">
                <li><FaCheckCircle className="me-2" /><b>Own your system outright</b></li>
                <li><FaCheckCircle className="me-2 my-3" />Protect against rising utility costs</li>
                <li><FaCheckCircle className="me-2" />
                  Manufacturer’s equipment warranties, 10 year workmanship guarantee, and 10 year roof penetration warranty
                </li>
              </ul>
            </div>
            <div>
              <div className="section-title">Who maintains?</div>
              <ul>
                <li>I service and care for my system myself</li>
                <li>Transfers to new owners if you sell your home</li>
              </ul>
            </div>
            <div>
              <div className="section-title">Payments</div>
              <ul>
                <li>Full system cost (cash upfront) or monthly payments (loan)</li>
              </ul>
            </div>
            <div className="d-flex gap-2 mt-3">
              <Button variant="outline-dark" className="rounded-pill">Get a quote</Button>
              <Button variant="outline-dark" className="rounded-pill">Learn more</Button>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </Container>
);

export default SolarComparison;
