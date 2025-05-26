import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaSun, FaBolt, FaRegCreditCard, FaHeadset } from 'react-icons/fa';

const FeaturesSection = ({
  heading = 'The #1 home solar & battery company in America',
  features = [],
  dark = false,
}) => {
  const bgColor = dark ? '#0b0c10' : '#fefcf9';
  const textColor = dark ? 'white' : 'black';
  const mutedTextColor = dark ? '#bbbbbb' : '#555555';
  const borderColor = dark ? '#333' : '#ddd';

  return (
    <div style={{ backgroundColor: bgColor, color: textColor, padding: '4rem 0' }}>
      <Container>
        <h1 className="mb-5 fw-medium" style={{ maxWidth: '60%' }}>{heading}</h1>
        <Row>
          {Array.isArray(features) && features.map((feature, index) => (
            <Col key={index} md={6} lg={3} className="mb-4">
              <div
                style={{
                  borderRight: index % 4 !== 3 ? `1px solid ${borderColor}` : 'none',
                  paddingRight: '1.5rem',
                  height: '100%',
                }}
              >
                <div style={{ fontSize: '2rem', marginBottom: '1rem', color: textColor }}>
                  {feature.icon}
                </div>
                <h5 className="fw-semibold mb-2">{feature.title}</h5>
                <p style={{ color: mutedTextColor }}>{feature.description}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default FeaturesSection;


