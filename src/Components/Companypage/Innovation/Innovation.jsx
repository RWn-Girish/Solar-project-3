import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import panelImg from "../../../assets/Images/panel.webp"; 
import { FaRegCheckCircle } from "react-icons/fa";


const SmartPanel = () => {

    const features = [
            "Real-time battery backup",
            "Circuit-level insights",
            "Seamless integration with your system",
    ];

  return (
    <div style={{ backgroundColor: "#fdf9f2", padding: "60px 0" }}>
      <Container style={{ width: "1320px" }} className="pb-5">
        <Row className="align-items-center py-5 ">     
          <Col md={6}>
            <p className="text-uppercase fw-semibold text-muted mb-2" style={{ fontSize: "14px" }}>
              Innovation
            </p>
            <h1 className="fw-medium display-4 ">SPAN® Smart<br />Electrical Panel</h1>
            <p className="text-secondary fs-5 my-4" style={{ maxWidth: "540px" }}>
              Upgrade your home to the forefront of energy efficiency with SPAN®—the ultimate command center for smarter energy
              management. Experience unparalleled control and visibility over your home's energy.
            </p>
            <ul className="list-unstyled mt-5 fs-5 fw-medium">
            {features.map((feature, idx) => (
            <li key={idx} className="d-flex align-items-center mb-3">
            <FaRegCheckCircle size={22} className="me-2 text-dark" />
            {feature}
            </li>
            ))}
            </ul>
        </Col>       
          <Col md={6} className="text-center mt-4 mt-md-0">
            <img src={panelImg} alt="SPAN Panel" className="img-fluid rounded" style={{ width: "600px", borderRadius: "20px",height:'450px' }}/>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SmartPanel;
