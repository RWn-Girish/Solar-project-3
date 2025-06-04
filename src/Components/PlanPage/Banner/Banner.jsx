import React from 'react';
import { Container,  Navbar, Nav, Button } from 'react-bootstrap';
import { FaLocationDot, FaPhone } from 'react-icons/fa6';
import logo from'../../../assets/Images/logo.png';
import './Banner.css'

function BannerComp() {
  return (
    <>
    <div className="hero-wrapper text-white">
  <Container className='container'>
    
       <div  className="d-flex  align-items-center" style={{height:'80vh'}}>
  <div className="text-left" style={{ maxWidth: '600px' }}>
    <h1 className="display-1 fw-semibold pt-5">Lots of Plans. One Trusted Partner.</h1>
    <p className="lead mb-4 fs-5 fw-medium py-3" style={{width:"60%"}}>The Sunrun Solar Subscription is the best selling subscription in America, but every home is unique. Find the best plan for your situation.</p>
    <Button variant="outline-light" className="rounded-pill px-4 py-3 fs-6 fw-medium">Get a quote</Button>
  </div>
</div>

     </Container>
    </div>
   
    </>
  );
}

export default BannerComp;
