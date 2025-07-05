import React from 'react';
import { FaSun, FaBolt, FaRegCreditCard, FaHeadset } from 'react-icons/fa';
import FeatureSection from '../../Common Comp/FeatureSection'; 

const features = [
  {
    icon: <FaSun />,
    title: "Unrivaled home solar and battery experience",
    description: "With 1 million homes and counting, no one has more installation expertise.",
  },
  {
    icon: <FaBolt />,
    title: "Smart technology",
    description: "An ecosystem of innovative products that put you in control of your home energy needs.",
  },
  {
    icon: <FaRegCreditCard />,
    title: "Payment solutions for every home",
    description: "Tailored plans including predictable monthly payments, little-to-no money down, and no-debt options.",
  },
  {
    icon: <FaHeadset />,
    title: "The Sunrun Guarantee",
    description: "The industry's most comprehensive repairs, maintenance & monitoring program.",
  },
];

const CompanyFeatures =()=> {
  return (
    <>
    <div className='pb-5'>   
    <FeatureSection title="The Sunrun difference" features={features} backgroundColor="#ffffff" textColor="black"/>
    </div>
    </>
  );
}
export default CompanyFeatures;
