import React from 'react';
import FeatureSection from '../../Common Comp/Features/FeatureSection';


const features = [
  {
    title: "25.6B",
    description: "Since 2007, Sunrun solar energy systems have generated 25.6B kw hours of clean energy, helping enable the avoidance of an estimated 14.6 million metric tons of CO2e from entering the atmosphere.",
  },
  {
    title: "1M",
    description: "Sunrun has delivered more than 1 million hours of backup since 2019.",
  },
  {
    title: "$1B",
    description: "Since 2007, Sunrun has saved customers over 1 billion dollars in energy savings.",
  },
  {
    title: "11,100",
    description: "Sunrun delivered energy and substantial bill savings to over 11,100 low-income households.",
  },
];

const CompanyFeature = () => {
  return (
   <div className='pb-5'>
     <FeatureSection
      title="Leading with impact: how Sunrun is making a difference"
      features={features}
      backgroundColor="#fffaf2"
      textColor="black"
      variant="stats"
    />
   </div>
  );
};

export default CompanyFeature;

