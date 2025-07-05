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

// import React from "react";
// import ImageOverlaySection from "../../Common Comp/ImageOverlaySection";
// import teslaImg from "../../../assets/Images/tesla-storage.webp"; // your image path

// const SolarStorageSection = () => {
//   return (
//     <ImageOverlaySection
//       bgImage={teslaImg}
//       subtitle="Battery Storage"
//       title="Solar storage for uninterrupted living"
//       points={[
//         "Protected power",
//         "Energy savings",
//         "A cleaner future",
//         "Seamless integration",
//       ]}
//       buttonText="Learn more"
//     />
//   );
// };

// export default SolarStorageSection;
