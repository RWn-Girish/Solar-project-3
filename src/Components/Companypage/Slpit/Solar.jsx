import React from "react";
import solarImage from "../../../assets/Images/solarsec.webp"; 
import Split from "../../Common Comp/SplitSection/Split";

const Solar = () => {
  return (
    <Split
  bgImage={solarImage}
  title="More than a solar company"
  points={[
    "#1 Residential Solar Installer in America",
    "#1 Residential Storage Installer",
    "#1 Tesla Battery Installer",
    "#1 Solar Subscription"
  ]}
  textColor="black"
/>

  );
};

export default Solar;


