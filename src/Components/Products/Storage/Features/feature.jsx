import React from 'react';
import { FaSun, FaBolt, FaRegCreditCard, FaHeadset } from 'react-icons/fa';
import FeatureSection from '../../../Common Comp/Features/FeatureSection';


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

const HomeFeatures = () => {
  return (
    <FeatureSection
      title="The #1 home solar & battery company in America"
      features={features}
      backgroundColor="#fffcf5"
      textColor="#000000"
      variant="cards"
    />
  );
};

export default HomeFeatures;
