import React from 'react';
import { Container, Row, Col, Navbar, Nav, Button } from 'react-bootstrap';
import { FaLocationDot, FaPhone } from 'react-icons/fa6';
import logo from'../../assets/Images/logo2.png';
// import './Header.css'

function Header() {
  return (
    <>
    <div className="top-bar">
  <Container className='container'>
      <Nav.Link className=" py-3  d-flex justify-content-between align-items-center bg-transparent text-black ">
        <div className="d-flex align-items-center top-menu">
          <FaLocationDot className='me-2' />
          <span>Enter your location</span>
        </div>
        <div className="d-flex align-items-center top-menu">
          <FaPhone className='me-2' />
          <span>Call us at (833) 324-5886</span>
          <span className="ms-3">Login</span>
        </div>
      </Nav.Link>
    </Container>
    </div>
    <Container>
      <Navbar expand="lg" >
       
          <Navbar.Brand href="#" className="text-white fw-bold fs-3">
            <img src={logo} alt="logo" style={{width:"121px"}}/>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="main-navbar" />
          <Navbar.Collapse id="main-navbar" className="justify-content-between">
            <Nav className="mx-auto">
              <Nav.Link href="#" className="text-black fw-medium mx-3">Plans & Pricing</Nav.Link>
              <Nav.Link href="#" className="text-black fw-medium mx-3">Products</Nav.Link>
              <Nav.Link href="#" className="text-black fw-medium mx-3">Learn</Nav.Link>
              <Nav.Link href="#" className="text-black fw-medium mx-3">Company</Nav.Link>
            </Nav>
            <Button variant="light" className="rounded-pill px-4 text-white" style={{backgroundColor:'#1F2647'}}>Get a quote</Button>
          </Navbar.Collapse>
        
      </Navbar>
 </Container>

   
    </>
  );
}

export default Header;
