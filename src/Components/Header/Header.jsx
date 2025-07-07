import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container, Button, Row, Col, Image } from 'react-bootstrap';
import { FaLocationDot, FaPhone } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import logo from '../../assets/Images/logo2.png';
import planImg from '../../assets/Images/Plan-img-1.webp';
import proImg from '../../assets/Images/product-img.webp';
import learnImg from '../../assets/Images/learn.webp';
import compImg from '../../assets/Images/Company.webp';
import CustomButton from '../Common Comp/ButtonComp';

// Hook to check if screen is desktop
const useIsDesktop = () => {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 992);
  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 992);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return isDesktop;
};

// Dropdown UI
const DropdownMenu = ({ links, image, cta, buttonStyle, titleStyle }) => (
  <div className="shadow-lg bg-white border-top" style={{
    position: 'fixed', top: '120px', left: 0, right: 0, zIndex: 1000, width: '100vw', padding: '48px 48px'
  }}>
    <Container>
      <Row>
        <Col md={4}>
          <h6 className="text-uppercase text-muted mb-3">Explore</h6>
          {links.map((link, index) => (
            <div key={index} className="border-bottom py-2 ps-0 pe-5 text-dark d-block text-decoration-none nav-link">
              {link.label}
            </div>
          ))}
        </Col>
        <Col md={8}>
          <div style={{ paddingLeft: '100px' }}>
            <h6 className="text-uppercase text-muted mb-3">Featured</h6>
            <div style={{
              width: '80%', height: '500px', overflow: 'hidden',
              position: 'relative', color: '#fff'
            }}>
              <Image src={image} style={{
                height: '70%', width: '100%', objectFit: 'cover', borderRadius: '20px'
              }} />
              <div style={{ position: 'absolute', top: '20px', left: '20px', color: '#fff' }}>
                <h5 style={{ fontWeight: 600, ...(titleStyle || {}) }}>{cta.title}</h5>
              </div>
              <div style={{ position: 'absolute', top: '280px', left: '20px' }}>
                <CustomButton
                  text={cta.btnLabel}
                  className="px-0 py-0 rounded-pill"
                  style={{ paddingLeft: '20px', paddingRight: '20px', fontWeight: '500', ...(buttonStyle || {}) }}
                />
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  </div>
);

// Hover logic
const HoverNavItem = ({ label, to, links, image, cta, buttonStyle, titleStyle }) => {
  const [show, setShow] = useState(false);
  const isDesktop = useIsDesktop();
  return (
    <div
      className="position-relative hover-nav-wrapper"
      onMouseEnter={() => isDesktop && setShow(true)}
      onMouseLeave={() => isDesktop && setShow(false)}
    >
      <Nav.Item className="mx-3">
        <Link to={to} className="nav-link text-black fw-medium text-decoration-none">
          {label}
        </Link>
      </Nav.Item>
      {isDesktop && show && (
        <DropdownMenu
          links={links}
          image={image}
          cta={cta}
          buttonStyle={buttonStyle}
          titleStyle={titleStyle}
        />
      )}
    </div>
  );
};

// Final Header component
const Header = () => {
  return (
    <>
      {/* Top Bar */}
      <div className="top-bar bg-light border-bottom">
        <Container>
          <Nav.Link className="py-3 d-flex justify-content-between align-items-center text-black">
            <div className="d-flex align-items-center">
              <FaLocationDot className="me-2" />
              <span>Enter your location</span>
            </div>
            <div className="d-flex align-items-center">
              <FaPhone className="me-2" />
              <span>Call us at (833) 324-5886</span>
              <Link to="/login" className="ms-3 text-dark text-decoration-none">Login</Link>
            </div>
          </Nav.Link>
        </Container>
      </div>

      {/* Main Navbar */}
      <Navbar expand="lg" className="py-3">
        <Container fluid className="px-3">
          <div className="d-flex align-items-center justify-content-between w-100">
            {/* ☰ Toggle - left on mobile */}
            <Navbar.Toggle aria-controls="main-navbar" className="order-1 p-0 border-0 bg-transparent" />

            {/* Logo - center on mobile, left on desktop */}
            <Link
              to="/"
              className="navbar-brand mx-auto order-2 d-flex align-items-center justify-content-center"
            >
              <img src={logo} alt="logo" style={{ width: '100px' }} />
            </Link>

            {/* "Get a quote" - right on all screens */}
            <div className="order-3">
              <Link to="/quote">
                <Button
                  className="rounded-pill px-4 text-white"
                  style={{ backgroundColor: '#1F2647', border: 'none' }}
                >
                  Get a quote
                </Button>
              </Link>
            </div>
          </div>

          {/* Collapsible Nav Links */}
          <Navbar.Collapse id="main-navbar" className="mt-3 mt-lg-0">
            <Nav className="mx-auto mx-lg-0">
              <HoverNavItem
                label="Plans & Pricing"
                to="/plans"
                links={[
                  { label: 'Overview' },
                  { label: 'Sunrun Subscription Plan' },
                  { label: 'Owned Plans' },
                ]}
                image={planImg}
                cta={{
                  title: 'Hassle-free full service for life with 24/7 monitoring',
                  btnLabel: 'Sunrun Subscription Plan',
                }}
                titleStyle={{ fontSize: '32px', maxWidth: '60%', fontWeight: '400' }}
              />
              <HoverNavItem
                label="Products"
                to="/products"
                links={[
                  { label: 'Solar Panels' },
                  { label: 'Battery Storage' },
                  { label: 'Tesla Powerwall' },
                  { label: 'Sunrun App' },
                  { label: 'F-150 Lightning' },
                  { label: 'SPAN' },
                ]}
                image={proImg}
                cta={{
                  title: 'Store your power in a backup battery and live life uninterrupted',
                  btnLabel: 'Battery Storage',
                }}
                titleStyle={{ fontSize: '32px', maxWidth: '60%', fontWeight: '400' }}
              />
              <HoverNavItem
                label="Learn"
                to="/learn"
                links={[
                  { label: 'Why solar' },
                  { label: 'Sunrun Blog' },
                  { label: 'Solar by State' },
                  { label: 'FAQ' },
                  { label: 'Moving Made Easy' },
                ]}
                image={learnImg}
                cta={{
                  title: 'Your go-to resource for all things solar',
                  btnLabel: 'Sunrun Blog',
                }}
                buttonStyle={{
                  backgroundColor: 'transparent',
                  border: '2px solid #1F2647',
                  color: '#1F2647',
                }}
                titleStyle={{
                  color: '#1F2647',
                  fontSize: '32px',
                  maxWidth: '60%',
                  fontWeight: '400',
                }}
              />
              <HoverNavItem
                label="Company"
                to="/company"
                links={[
                  { label: 'Why Sunrun' },
                  { label: 'Our Guarantee' },
                  { label: 'Refer a Friend' },
                  { label: 'Careers' },
                  { label: 'Contact' },
                ]}
                image={compImg}
                cta={{
                  title: `The nation's #1 home solar & battery installer`,
                  btnLabel: 'Why Sunrun ?',
                }}
                buttonStyle={{
                  backgroundColor: 'transparent',
                  border: '2px solid #1F2647',
                  color: '#1F2647',
                }}
                titleStyle={{
                  color: '#1F2647',
                  fontSize: '32px',
                  maxWidth: '60%',
                }}
              />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;

