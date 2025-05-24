import React from 'react';
import { Container } from 'react-bootstrap';
import { FaSun, FaBolt,  FaRegCreditCard, FaHeadset } from 'react-icons/fa';



const features = [
  {
    icon: <FaSun  />,
    title: "Unrivaled home solar and battery experience",
    description: "With 1 million homes and counting, no one has more installation expertise.",
  },
  {
    icon: <FaBolt  />,
    title: "Smart technology",
    description: "An ecosystem of innovative products that put you in control of your home energy needs.",
  },
  {
    icon: <FaRegCreditCard  />,
    title: "Payment solutions for every home",
    description: "Tailored plans including predictable monthly payments, little-to-no money down, and no-debt options.",
  },
  {
    icon: <FaHeadset />,
    title: "The Sunrun Guarantee",
    description: "The industry's most comprehensive repairs, maintenance & monitoring program.",
  },
];

export default function HomeFeatures() {
  return (
    <div style={{ backgroundColor: '#0b0c10', color: 'white', padding: '3rem 1rem' }}>
      <Container style={{width:"1400px"}}>
        <h1 className="text-left d-flex align-items-center my-5 pb-3 pt-5 ps-5 display-5 fw-medium" style={{maxWidth:'40%'}}>
          The #1 home solar & battery company in America
        </h1>

        <div
          className="d-flex justify-content-center"
          style={{ flexWrap: 'nowrap', overflowX: 'auto' }}
        >
          {features.map((feature, index) => (
            <React.Fragment key={index}>
              <div 
                style={{
                  flex: '1 1 0',
                  minWidth: '250px',
                  maxWidth: '300px',
                  padding: '0 1rem',
                  textAlign: 'left',
                  position: 'relative',
                }}
              >
                <div className="mb-3 " style={{fontSize:"48px"}}>{feature.icon}</div>
                <h5 className='w-75 fs-4 pt-5'>{feature.title}</h5>
                <p className='fs-5 text-secondary'>{feature.description}</p>
              </div>
              {index < features.length - 1 && (
                <div
                  style={{
                    width: '1px',
                    backgroundColor: '#444',
                    margin: '0 1rem',
                    height: 'auto',
                  }}
                />
              )}
            </React.Fragment>
          ))}
        </div>
      </Container>
    </div>
  );
}
