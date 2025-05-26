import React, { useState } from "react";
import { Col, Container, Form, Row, Button } from "react-bootstrap";
import formImg from "../../../assets/Images/form2.webp";

const FormComp = () => {

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");


  const [submitted, setSubmitted] = useState(false);


  const isNameValid = () => fullName.trim().length > 0;
  const isEmailValid = () =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
  const isPhoneValid = () =>
    /^\d{10}$/.test(phone.trim()); 

  const isFormValid = () =>
    isNameValid() && isEmailValid() && isPhoneValid();


  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid()) {
      setSubmitted(true);
    }
  };
  if (submitted) {
    return (
      <div
        className="quote py-5"
        style={{ backgroundColor: "#fefaf2", display: "flex", alignItems: "center" }}>
        <Container style={{ width: "1320px" }}>
          <Row className="align-items-center">
            <Col lg={6}>
              <div className="quote-head mb-4 mt-3">
                <h1 className="display-4 fw-bold mt-2 mb-4" style={{ maxWidth: "80%" }}>
                  Congratulations on beginning your solar journey!
                </h1>
                <p style={{ fontSize: "1.2rem", marginBottom: "1.5rem" }}>
                  Keep your phone close - a solar advisor will be calling you soon. We’ll call back if we miss you!
                </p>
                <p style={{ fontSize: "1.2rem", fontWeight: "bold" }}>
                  Ready to chat now? Call us at <a href="tel:8445395533">844.539.5533</a>
                </p>
              </div>
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
  }
  return (
    <div className="quote py-5" style={{ backgroundColor: "#fefaf2", display: "flex", alignItems: "center" }}>
      <Container style={{ width: "1320px" }}>
        <Row className="align-items-center">
          <Col lg={6}>
            <div className="quote-head mb-4 mt-3">
              <span className="text-uppercase small">Step 2 of 2</span>
              <h1 className="display-4 fw-bold mt-2 mb-4" style={{ maxWidth: "80%" }}>
                Great!
              </h1>
              <h5 className="fs-4 fw-normal text-secondary">Enter contact details to send you quote:</h5>
            </div>
            <Form className="quote-form" onSubmit={handleSubmit}>
              <Form.Group className="mb-4" style={{ maxWidth: "95%",borderRadius:"10px" }}>
                <Form.Label>Full name</Form.Label>
                <Form.Control type="text"style={{ height: "60px",borderRadius:"10px" }}value={fullName}onChange={(e) => 
                  setFullName(e.target.value)}isInvalid={fullName !== "" && !isNameValid()}/>
                <Form.Control.Feedback type="invalid">Please enter your full name.</Form.Control.Feedback>
              </Form.Group>
             <Form.Group className="mb-4"style={{ maxWidth: "95%", }}>
                <Row>
                  <Col>
                    <Form.Label>E-mail</Form.Label>
                    <Form.Control type="email"style={{ height: "60px" ,borderRadius:"10px"}}value={email}onChange={(e) => 
                    setEmail(e.target.value)}isInvalid={email !== "" && !isEmailValid()}/>
                    <Form.Control.Feedback type="invalid">Please enter a valid email.</Form.Control.Feedback>
                  </Col>
                  <Col>
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control
                      type="tel"style={{ height: "60px" ,borderRadius:"10px"}}value={phone} onChange={(e) => setPhone(e.target.value)}isInvalid=
                      {phone !== "" && !isPhoneValid()}/>
                    <Form.Control.Feedback type="invalid">
                      Please enter a valid 10-digit phone number.
                    </Form.Control.Feedback>
                  </Col>
                </Row>
              </Form.Group>

              <p style={{ fontSize: "16px", color: "#555" }}>
                By clicking below, I authorize Sunrun to call me and send pre-recorded messages and text messages
                to me about Sunrun products and services at the telephone number I entered above, using an autodialer,
                even if I am on a national or state “Do Not Call” list. Message and data rates may apply. Maximum 10
                texts per month. Consent for calls & texts is optional. You can opt out anytime. You also agree to
                our Terms of Service.
              </p>

              <Button style={{backgroundColor: isFormValid() ? "#1F2647" : "#6c757d", borderColor: isFormValid() ? "#1F2647" : "#6c757d",}}
                disabled={!isFormValid()}className="rounded-pill px-5 py-3"type="submit">Submit</Button>
            </Form>
          </Col>

          <Col lg={6}>
            <div className="quote-img">
              <img src={formImg} alt="formimg-2" width="620" style={{ borderRadius: "20px", maxWidth: "100%" }}/>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default FormComp;
