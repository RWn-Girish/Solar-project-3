import React from 'react';
import { Container } from 'react-bootstrap';
import './Banner.css';
import CustomButton from './ButtonComp';

function Banner({ bgImage, heading, subheading, buttonText, center = false, smallHeading }) {
  const wrapperStyle = {
    backgroundImage: `url(${bgImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    color: center ? '#000' : '#fff',
  };

  const contentStyle = {
    maxWidth: '800px',
    textAlign: center ? 'center' : 'left',
    margin: center ? '0 auto' : '0',
  };

  const headingStyle = {
    fontSize: '60px',
    fontWeight: '500',
    marginBottom: '20px',
    color: center ? '#000' : '#fff',
  };

  const subheadingStyle = {
    fontSize: '1.1rem',
    marginBottom: '1.5rem',
    color: center ? '#555' : '#fff',
  };

  const smallHeadingStyle = {
    textTransform: 'uppercase',
    letterSpacing: '1px',
    fontSize: '13px',
    fontWeight: '600',
    marginBottom: '0.5rem',
    color: center ? '#555' : '#fff',
  };

  return (
    <div className="banner-wrapper" style={wrapperStyle}>
      <Container>
        <div style={contentStyle}>
          {smallHeading && <p style={smallHeadingStyle}>{smallHeading}</p>}
          <h1 style={headingStyle}>{heading}</h1>
          {subheading && <p style={subheadingStyle}>{subheading}</p>}
          {buttonText && (
            <CustomButton
              text={buttonText}
              className={center ? 'outline-dark-rounded' : 'fs-6 fw-medium'}
            />
          )}
        </div>
      </Container>
    </div>
  );
}

export default Banner;


