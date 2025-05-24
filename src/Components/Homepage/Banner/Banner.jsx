import React from 'react';
import { Container,  Navbar, Nav, Button } from 'react-bootstrap';
import { FaLocationDot, FaPhone } from 'react-icons/fa6';
import logo from'../../../assets/Images/logo.png';
import '../../Header/Header.css'

function BannerComp() {
  return (
    <>
    <div className="hero-wrapper text-white">
  <Container className='container'>
      <div className="top-bar py-3  d-flex justify-content-between align-items-center bg-transparent text-white">
        <Nav.Link className="d-flex align-items-center nav-link">
          <FaLocationDot className='me-2 fs-4' />
          <span className='fw-medium'>Enter your location</span>
        </Nav.Link>
        <Nav.Link className="d-flex align-items-center">
          <FaPhone className='me-2' />
          <span>Call us at (833) 324-5886</span>
          <span className="ms-3">Login</span>
        </Nav.Link>
      </div>

      <Navbar expand="lg" >
       
          <Navbar.Brand href="#" className="text-white fw-bold fs-3">
            <img src={logo} alt="logo" style={{width:"140px"}}/>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="main-navbar" />
          <Navbar.Collapse id="main-navbar" className="justify-content-between">
            <Nav className="mx-auto">
              <Nav.Link href="#" className="text-white mx-3 ">Plans & Pricing</Nav.Link>
              <Nav.Link href="#" className="text-white mx-3 ">Products</Nav.Link>
              <Nav.Link href="#" className="text-white mx-3 ">Learn</Nav.Link>
              <Nav.Link href="#" className="text-white mx-3 ">Company</Nav.Link>
            </Nav>
            <Button variant="light" className="rounded-pill px-4">Get a quote</Button>
          </Navbar.Collapse>
        
      </Navbar>
       <div  className="d-flex  align-items-center" style={{height:'80vh'}}>
  <div className="text-left" style={{ maxWidth: '600px' }}>
    <h1 className="display-1 fw-semibold pt-5">Power Life on Your Terms</h1>
    <p className="lead mb-4 fs-5 fw-medium py-3" style={{width:"60%"}}>Get ahead of your energy needs with cutting-edge solar and home battery</p>
    <Button variant="outline-light" className="rounded-pill px-4 py-3 fs-6 fw-medium">Get a quote</Button>
  </div>
</div>

     </Container>
    </div>
   
    </>
  );
}

export default BannerComp;
