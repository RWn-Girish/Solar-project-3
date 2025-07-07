import React, { useState } from "react";
import { Col, Container, Form, Row, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import formImg from "../../../assets/Images/form.webp";
const MainForm = () => {
  const navigate = useNavigate();
  const [zip, setZip] = useState("");
  const [bill, setBill] = useState("");
  const [ownHome, setOwnHome] = useState("Yes");
  const isZipValid = () => /^\d{5}$/.test(zip);
  const isBillValid = () => /^\$?\d+(\.\d{1,2})?$/.test(bill);
  const isFormValid = () => isZipValid() && isBillValid() && (ownHome === "Yes" || ownHome === "No");
  const handleNext = (e) => {
    e.preventDefault();
    if (isFormValid()) {
      navigate("/step2");
    }
  };
  return (
    <div
      className="quote py-5"
      style={{ backgroundColor: "#fefaf2", display: "flex", alignItems: "center" }}
    >
      <Container style={{ width: "1320px" }}>
        <Row className="align-items-center">
          <Col lg={6}>
            <div className="quote-head mb-4 mt-3">
              <span className="text-uppercase small">Step 1 of 2</span>
              <h1 className="display-4 fw-bold mt-2 mb-4" style={{ maxWidth: "80%" }}>
                Get a free personalized quote
              </h1>
            </div>
            <Form className="quote-form" onSubmit={handleNext}>
              <Form.Group className="mb-4" style={{ maxWidth: "320px" }}>
                <Form.Label>Enter your zip</Form.Label>
                <Form.Control type="number" placeholder="Zip code" style={{ height: "60px" }} value={zip} onChange={(e) => setZip(e.target.value)} 
                isInvalid={zip !== "" && !isZipValid()}/>
                <Form.Control.Feedback type="invalid">Please enter a valid 5-digit zip code.</Form.Control.Feedback>
                </Form.Group>
              <Form.Group className="mb-4" style={{ maxWidth: "320px" }}>
                <Form.Label>What’s your average electric bill</Form.Label>
                <Form.Control type="text" placeholder="e.g. $100" style={{ height: "60px" }} value={bill} onChange={(e) => 
                setBill(e.target.value)} isInvalid={bill !== "" && !isBillValid()}/>
                <Form.Control.Feedback type="invalid">
                  Please enter a valid amount (e.g., 100 or $100).
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="mb-4" style={{ maxWidth: "400px" }}>
                <Form.Label>Do you own your home?</Form.Label>
                <div className="d-flex gap-4 mt-2">
                  <Form.Check type="radio" id="ownYes" label="Yes" name="ownHome" checked={ownHome === "Yes"} onChange={() => setOwnHome("Yes")}/>
                  <Form.Check type="radio" id="ownNo" label="No" name="ownHome" checked={ownHome === "No"} onChange={() => setOwnHome("No")}/>
                </div>
              </Form.Group>
                <Button style={{backgroundColor: isFormValid() ? "#1F2647" : "#6c757d", 
                  borderColor: isFormValid() ? "#1F2647" :"#6c757d",}}type="submit"disabled={!isFormValid()} 
                  className="rounded-pill px-5 py-3 mb-4 mb-lg-3" onClick={handleNext}>
                Next</Button>
            </Form>
          </Col>
          <Col lg={6}>
            <div className="quote-img">
              <img src={formImg} alt="House with family" width="620" style={{ borderRadius: "20px", maxWidth: "100%" }}/>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MainForm;
