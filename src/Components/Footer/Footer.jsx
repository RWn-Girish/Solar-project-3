import React from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import {
  FaFacebookF,FaTwitter,FaInstagram,FaLinkedinIn,FaMapMarkerAlt,} from 'react-icons/fa';
import'./Footer.css'
const Footer = () => {
  return (
    <footer className="bg-dark text-light pt-5 pb-3 mt-5">
      <Container>
        <Row className="mb-4">
          <Col xs={6} md={2}>
            <h6 className="text-uppercase mb-3">Products</h6>
            <Nav className="flex-column ">
              <Nav.Link href="#" className='text-decoration-none display-6'>Plans & Pricing</Nav.Link>
              <Nav.Link href="#" className='text-decoration-none display-6'>Learn</Nav.Link>
              <Nav.Link href="#" className='text-decoration-none display-6'>Company</Nav.Link>
              <Nav.Link href="#" className='text-decoration-none display-6'>Investors</Nav.Link>
            </Nav>
          </Col>

          <Col xs={6} md={3}>
            <h6 className="text-uppercase mb-3">Meet Sunrun</h6>
            <Nav className="flex-column">
              <Nav.Link href="#">Why Sunrun</Nav.Link>
              <Nav.Link href="#">Our Guarantee</Nav.Link>
              <Nav.Link href="#">Sunrun Impact</Nav.Link>
              <Nav.Link href="#">Customer Stories</Nav.Link>
              <Nav.Link href="#">Leadership Team</Nav.Link>
              <Nav.Link href="#">Careers</Nav.Link>
              <Nav.Link href="#">Partnerships</Nav.Link>
              <Nav.Link href="#">Solar by State</Nav.Link>
            </Nav>
          </Col>

          <Col xs={6} md={2}>
            <h6 className="text-uppercase mb-3">Customers</h6>
            <Nav className="flex-column">
              <Nav.Link href="#">Account Login</Nav.Link>
              <Nav.Link href="#">Refer a Friend</Nav.Link>
              <Nav.Link href="#">Home Builders</Nav.Link>
            </Nav>
          </Col>

          <Col xs={6} md={2}>
            <h6 className="text-uppercase mb-3">Need Help?</h6>
            <Nav className="flex-column">
              <Nav.Link href="#">Contact Us</Nav.Link>
              <Nav.Link href="#">Sunrun Blog</Nav.Link>
              <Nav.Link href="#">Login</Nav.Link>
              <Nav.Link href="#">FAQs</Nav.Link>
            </Nav>
          </Col>

          <Col xs={12} md={3} className="text-md-end mt-4 mt-md-0">
            <div className="d-flex justify-content-md-end gap-3">
              <a href="#"><FaFacebookF color="lightgray" /></a>
              <a href="#"><FaTwitter color="lightgray" /></a>
              <a href="#"><FaInstagram color="lightgray" /></a>
              <a href="#"><FaLinkedinIn color="lightgray" /></a>
            </div>
          </Col>
        </Row>

        <hr className="border-light" />

        <Row className="text-muted small">
          <Col xs={12} md={9}>
            <div className="d-flex flex-column flex-md-row gap-3">
              <a href="#">Seamless integration solar battery storage</a>
              <a href="#">Latest technology solar panels</a>
              <a href="#">Tesla Powerwall quote</a>
            </div>
            <div className="mt-2 d-flex align-items-center gap-2">
              <FaMapMarkerAlt />
              <span>Enter your location</span>
            </div>
            <div>© 2025 Sunrun. All Rights Reserved</div>
          </Col>
          <Col xs={12} md={3} className="text-md-end">
            <a href="#">State Contractor License</a> / <a href="#">Terms</a> / <a href="#">Privacy Policy</a> / <a href="#">Manage Cookies</a> / <a href="#">Your Privacy Choices</a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;

