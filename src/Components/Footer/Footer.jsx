import React from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import'./Footer.css'
import { FaFacebook, FaLinkedin,FaInstagram, FaLocationDot, FaXTwitter } from 'react-icons/fa6';
const Footer = () => {
  return (
    <>
    <div className='py-5 bg-black'>
      <footer className="bg-black text-light pt-5 pb-3 mt-3 ">
      <Container>
        <Row className="mb-4">
          <Col xs={6} lg={3}>
            <Nav className="flex-column me-5">
              <Nav.Link href="/products" className='text-decoration-none display-6 border-bottom'><h5>Products</h5></Nav.Link>
              <Nav.Link href="/plans" className='text-decoration-none display-6 border-bottom'><h5>Plans & Pricing</h5></Nav.Link>
              <Nav.Link href="/learn" className='text-decoration-none display-6 border-bottom'><h5>Learn</h5></Nav.Link>
              <Nav.Link href="/company" className='text-decoration-none display-6 border-bottom'><h5>Company</h5></Nav.Link>
              <Nav.Link href="/investor" className='text-decoration-none display-6 border-bottom'><h5>Investors</h5></Nav.Link>
            </Nav>
          </Col>

          <Col xs={6} lg={2}>
            <h6 className="text-uppercase mb-3 ms-5">Meet Sunrun</h6>
            <Nav className="flex-column ms-5">
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

          <Col xs={6} lg={2}>
            <h6 className="text-uppercase mb-3">Customers</h6>
            <Nav className="flex-column">
              <Nav.Link href="#">Account Login</Nav.Link>
              <Nav.Link href="#">Refer a Friend</Nav.Link>
              <Nav.Link href="#">Home Builders</Nav.Link>
            </Nav>
          </Col>

          <Col xs={6} lg={2}>
            <h6 className="text-uppercase mb-3">Need Help?</h6>
            <Nav className="flex-column">
              <Nav.Link href="#">Contact Us</Nav.Link>
              <Nav.Link href="#">Sunrun Blog</Nav.Link>
              <Nav.Link href="#">Login</Nav.Link>
              <Nav.Link href="#">FAQs</Nav.Link>
            </Nav>
          </Col>

          <Col xs={12} lg={3} className="text-lg-end  mt-lg-0">
            <div className="d-flex justify-content-md-end gap-4 " style={{fontSize:"22px" ,color:'#C3DBFF'}}>
              <a href="#"><FaFacebook  /></a>
              <a href="#"><FaXTwitter  /></a>
              <a href="#"><FaInstagram  /></a>
              <a href="#"><FaLinkedin  /></a>
            </div>
          </Col>
        </Row>
        <Row className="mb-2">
          <Col md={12} className="d-flex flex-wrap gap-3 small my-4">
            <span className="fw-semibold ">Popular pages</span>
            <a href="#" className=" text-decoration-underline" style={{color:'#C3DBFF' ,fontSize:"14px"}}>
              Seamless integration solar battery storage</a>
            <a href="#" className=" text-decoration-underline" style={{color:'#C3DBFF', fontSize:"14px"}}>Latest technology solar panels</a>
            <a href="#" className=" text-decoration-underline" style={{color:'#C3DBFF' ,fontSize:"14px"}}>
              Tesla Powerwall solar battery and backup quote</a>
          </Col>
        </Row>
        <Row className="justify-content-between align-items-center small">
          <Col xs="auto" className="d-flex align-items-center gap-4 fs-6">
            <div className="d-flex gap-2 fs-6"style={{color:'#C3dbff'}}>
              <FaLocationDot  style={{fontSize:"24px"}}/>
            <span>Enter your location</span>
            </div>
            <span>© 2025 Sunrun. All Rights Reserved</span>
          </Col>

          <Col xs="auto" className="d-flex flex-wrap gap-2 justify-content-end">
            <a href="#" className="text-light text-decoration-underline">State Contractor License</a>
            <span>/</span>
            <a href="#" className="text-light text-decoration-underline">Terms</a>
            <span>/</span>
            <a href="#" className="text-light text-decoration-underline">Privacy Policy</a>
            <span>/</span>
            <a href="#" className="text-light text-decoration-underline">Manage Cookies</a>
            <span>/</span>
            <a href="#" className="text-light text-decoration-underline">Your Privacy Choices</a>
            <span style={{ fontSize: '0.7rem' }}>🔘✖️</span>
          </Col>
        </Row>
        
      </Container>
    </footer>
    </div>
    </>
  );
};

export default Footer;

