import React, { useState } from 'react';
import { Navbar, Nav, Container, Button, Row, Col, Image } from 'react-bootstrap';
import { FaLocationDot, FaPhone } from 'react-icons/fa6';
import logo from '../../assets/Images/logo2.png';
import planImg from '../../assets/Images/Plan-img-1.webp';
import proImg from '../../assets/Images/product-img.webp';
import learnImg from '../../assets/Images/learn.webp';
import compImg from '../../assets/Images/Company.webp';
import CustomButton from '../ButtonComp';

const DropdownMenu = ({ links, image, cta, buttonStyle, titleStyle }) => (
  <div
    className="shadow-lg bg-white border-top"
    style={{
      position: 'fixed',
      top: '120px',
      left: 0,
      right: 0,
      zIndex: 1000,
      width: '100vw',
      padding: '48px 48px',
    }}
  >
    <Container>
      <Row>
        <Col md={4}>
          <h6 className="text-uppercase text-muted mb-3">Explore</h6>
          {links.map((link, index) => (
            <Nav.Link
              href={link.href}
              key={index}
              className="border-bottom py-2 ps-0 pe-5 text-dark"
            >
              {link.label}
            </Nav.Link>
          ))}
        </Col>
        <Col md={8}>
          <div style={{ paddingLeft: '100px' }}>
            <h6 className="text-uppercase text-muted mb-3">Featured</h6>
            <div
              style={{
                width: '80%',
                height: '500px',
                overflow: 'hidden',
                position: 'relative',
                color: '#fff',
              }}
            >
              <Image
                src={image}
                style={{
                  height: '70%',
                  width: '100%',
                  objectFit: 'cover',
                  borderRadius: '20px',
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  top: '20px',
                  left: '20px',
                  color: '#fff',
                }}
              >
                <h5 style={{ fontWeight: 600, ...(titleStyle || {}) }}>{cta.title}</h5>
              </div>
              <div
                style={{
                  position: 'absolute',
                  top: '280px',
                  left: '20px',
                }}
              >
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

const HoverNavItem = ({ label, links, image, cta, buttonStyle, titleStyle }) => {
  const [show, setShow] = useState(false);
  return (
    <Nav.Item
      className="mx-3 position-relative"
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      <span className="nav-link text-black fw-medium">{label}</span>
      {show && (
        <DropdownMenu
          links={links}
          image={image}
          cta={cta}
          buttonStyle={buttonStyle}
          titleStyle={titleStyle}
        />
      )}
    </Nav.Item>
  );
};

const Header = () => {
  return (
    <>
      <div className="top-bar bg-light border-bottom">
        <Container>
          <Nav.Link className="py-3 d-flex justify-content-between align-items-center text-black">
            <div className="d-flex align-items-center top-menu">
              <FaLocationDot className="me-2" />
              <span>Enter your location</span>
            </div>
            <div className="d-flex align-items-center top-menu">
              <FaPhone className="me-2" />
              <span>Call us at (833) 324-5886</span>
              <span className="ms-3">Login</span>
            </div>
          </Nav.Link>
        </Container>
      </div>

      <Container>
        <Navbar expand="lg">
          <Navbar.Brand href="#" className="fw-bold fs-3">
            <img src={logo} alt="logo" style={{ width: '121px' }} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="main-navbar" />
          <Navbar.Collapse id="main-navbar" className="justify-content-between">
            <Nav className="mx-auto">
              <HoverNavItem
                label="Plans & Pricing"
                links={[
                  { label: 'Overview', href: '#' },
                  { label: 'Sunrun Subscription Plan', href: '#' },
                  { label: 'Owned Plans', href: '#' },
                ]}
                image={planImg}
                cta={{
                  title: 'Hassle-free full service for life with 24/7 monitoring',
                  btnLabel: 'Sunrun Subscription Plan',
                }}
                titleStyle={{
                  fontSize: '32px',
                  maxWidth:'60%',
                  fontWeight:'400'
                }}
              />
              <HoverNavItem
                label="Products"
                links={[
                  { label: 'Solar Panels', href: '#' },
                  { label: 'Battery Storage', href: '#' },
                  { label: 'Tesla Powerwall', href: '#' },
                  { label: 'Sunrun App', href: '#' },
                  { label: 'F-150 Lightning', href: '#' },
                  { label: 'SPAN', href: '#' },
                ]}
                image={proImg}
                cta={{
                  title: 'Store your power in a backup battery and live life uninteruppted',
                  btnLabel: 'Battery Storage',
                }}
                titleStyle={{
                  fontSize: '32px',
                  maxWidth:'60%',
                  fontWeight:'400'
                }}
              />
              <HoverNavItem
                label="Learn"
                links={[
                  { label: 'Why solar', href: '#' },
                  { label: 'Sunrun Blog', href: '#' },
                  { label: 'Solar by State', href: '#' },
                  { label: 'FAQ', href: '#' },
                  { label: 'Moving Made Easy', href: '#' },
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
                  maxWidth:'60%',
                  fontWeight:'400'
                }}
              />
              <HoverNavItem
                label="Company"
                links={[
                  { label: 'Why Sunrun', href: '#' },
                  { label: 'Our Guarantee', href: '#' },
                  { label: 'Refer a Friend', href: '#' },
                  { label: 'Carrers', href: '#' },
                  { label: 'Contact', href: '#' },
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
                  maxWidth:'60%'
                }}
              />
            </Nav>
            <Button
              variant="light"
              className="rounded-pill px-4 text-white"
              style={{ backgroundColor: '#1F2647' }}
            >
              Get a quote
            </Button>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </>
  );
};

export default Header;
