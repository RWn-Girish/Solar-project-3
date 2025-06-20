import React from 'react';
import { Container } from 'react-bootstrap';
import './Banner.css';
import CustomButton from './ButtonComp';

function Banner({ bgImage, heading, subheading, buttonText }) {
  return (
    <div
      className="banner-wrapper text-white"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      <Container className="container">
        <div className="d-flex align-items-center" style={{ height: '80vh' }}>
          <div className="text-left" style={{ maxWidth: '600px' }}>
            <h1 className="display-1 fw-semibold pt-5">{heading}</h1>
            <p className="lead mb-4 fs-5 fw-medium py-3" style={{ width: '60%' }}>
              {subheading}
            </p>
            {buttonText && (
              <CustomButton text={buttonText} className="fs-6 fw-medium" />
            )}
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Banner;
