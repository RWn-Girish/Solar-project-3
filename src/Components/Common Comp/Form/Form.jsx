import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Modal } from "react-bootstrap";
import formimg from "../../../assets/Images/forms.webp";
import logo from "../../../assets/Images/logo2.png";
import './Form.css';
import CustomButton from "../ButtonComp";
const QuoteForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    zip: '',
    phone: '',
    ownHome: 'yes',
  });
  const [errors, setErrors] = useState({});
  const [showModal, setShowModal] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  const validate = () => {
    const newErrors = {};
    if (!formData.firstName) newErrors.firstName = 'First Name is required';
    if (!formData.lastName) newErrors.lastName = 'Last Name is required';
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Valid Email required';
    if (!formData.zip) newErrors.zip = 'ZIP Code is required';
    if (!formData.phone || formData.phone.length < 10) newErrors.phone = 'Valid Phone is required';
    return newErrors;
  };
  const isFormValid = () => {
    const newErrors = validate();
    return Object.keys(newErrors).length === 0;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length === 0) {
      setShowModal(true);
      setErrors({});
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        zip: '',
        phone: '',
        ownHome: 'yes',
      });
    } else {
      setErrors(newErrors);
    }
  };
  return (
    <>
      <div className="quote-wrapper">
        <div className=" d-flex flex-column flex-md-row min-vh-100 align-items-center">
        <div className="left-panel text-center text-md-start p-5">
          <h1 className="display-4 mb-3">Take control of your energy bills</h1>
        </div>
        <div className="right-panel bg-light p-4 p-md-5 rounded-5 shadow" style={{ maxWidth: '600px' }}>
          <Form onSubmit={handleSubmit} className="quote-form ps-3">
            <h3 className="fw-bold mb-3">Get a free personalized quote</h3>
            <p className="text-muted small mb-4">All fields are required.</p>
            <Row>
              <Col md={6}>
                <Form.Group className="mb-5">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control type="text" name="firstName" value={formData.firstName} onChange={handleChange} isInvalid={!!errors.firstName}/>
                  <Form.Control.Feedback type="invalid">{errors.firstName}</Form.Control.Feedback>
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-5">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control type="text" name="lastName" value={formData.lastName} onChange={handleChange} isInvalid={!!errors.lastName}/>
                  <Form.Control.Feedback type="invalid">{errors.lastName} </Form.Control.Feedback>
                </Form.Group>
              </Col>
            </Row>
            <Form.Group className="mb-5">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" name="email" value={formData.email} onChange={handleChange} isInvalid={!!errors.email}/>
              <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
            </Form.Group>
            <Row>
              <Col md={6}>
                <Form.Group className="mb-5">
                  <Form.Label>ZIP Code</Form.Label>
                  <Form.Control type="text" name="zip" value={formData.zip} onChange={handleChange} isInvalid={!!errors.zip}/>
                  <Form.Control.Feedback type="invalid">{errors.zip}</Form.Control.Feedback>
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-5">
                  <Form.Label>Phone</Form.Label>
                  <Form.Control type="text" name="phone" value={formData.phone} onChange={handleChange} isInvalid={!!errors.phone}/>
                  <Form.Control.Feedback type="invalid">{errors.phone}</Form.Control.Feedback>
                </Form.Group>
              </Col>
            </Row>
            <Form.Group className="mb-5">
              <Form.Label>Do you own your own home?</Form.Label>
              <div>
                <Form.Check inline type="radio" label="Yes" name="ownHome" value="yes"checked={formData.ownHome === 'yes'} 
                onChange={handleChange}/>
                <Form.Check inline type="radio" label="No" name="ownHome" value="no" checked={formData.ownHome === 'no'} 
                onChange={handleChange}/>
              </div>
            </Form.Group>
            <p className="text-muted small">
              By clicking below, I authorize Sunrun to call me and send pre-recorded messages and text messages to me about Sunrun products and 
              services at the telephone number I entered above, using an autodialer, even if I am on a national or state “Do Not Call” list. 
              Message and data rates may apply. Maximum 10 texts per month. Consent for calls & texts is optional. You can opt out anytime. You 
              also agree to our <a href="#">Terms of Service</a>.
            </p>
            <Button type="submit" className="rounded-pill px-5 py-3" style={{backgroundColor: isFormValid() ? "#1F2647" : "#6c757d",
            borderColor: isFormValid() ? "#1F2647" : "#6c757d",}}
              disabled={!isFormValid()}>Get a Quote
            </Button>  
          </Form>
        </div>
        </div>
             <div className="text-center mt-5" style={{ fontSize: '', fontWeight: '500' }}>
              <h5 >Have Questions?
              <a href="#" className="ms-3" style={{ textDecoration: 'underline', color: '#1F2647', fontWeight: '500',fontSize:"20px" }}>
                Talk to one of our experts
              </a></h5>
              </div>    
      </div>
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Body className="p-0 bg-white rounded" style={{ width: '600px' }}>
          <img src={formimg} alt="Success" className="rounded-top" style={{ height: '330px', width: '600px' }} />
          <div className="py-4 ps-4 text-left content">
            <img src={logo} alt="logo2" className="img-fluid text-left" height="20px" width="80px" />
            <h4 className="py-2 display-4 w-75">It’s time to take control of your energy!</h4>
            <p className="text-secondary w-75">
              Keep your phone close – a solar advisor will call you soon. We’ll call back if we miss you!
            </p>
            <p className="pt-3 text-secondary">Ready to chat now?</p>
            <CustomButton text="Call us at 833.386.2912" style={{color: "#ffffff",backgroundColor: "#1F2647",border: "1px solid",
            width: '95%'}}/>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};
export default QuoteForm;

