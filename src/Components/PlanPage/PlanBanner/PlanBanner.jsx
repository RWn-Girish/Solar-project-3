import Banner from "../../Common Comp/Banner";
import PlanImage from "../../../assets/Images/product-img.webp"

const PlanBanner = () => {
    return (
        <>
            <Banner
                bgImage={PlanImage}
                smallHeading="battery storage"
                heading="Solar storage for uninterrupted living"
                subheading="Unlock reliable energy and greater control over your electricity usage with our cutting-edge battery technology. Power your home sustainably and experience a brighter future, day and night."
                listItems={["Protected power", "Energy savings", "A cleaner future", "Seamless integration"]}
            />           
        </>
    );
}

export default PlanBanner;



// import React from "react";
// import { Container } from "react-bootstrap";
// // import "./Banner.css";
// // import CustomButton from "./ButtonComp";
// import { FaRegCheckCircle } from "react-icons/fa";

// function PlanBanner({
//   bgImage,
//   heading,
//   subheading,
//   buttonText,
//   center = false,
//   smallHeading,
//   listItems = [], // new prop for <ul><li>
// }) {
//   const wrapperStyle = {
//     backgroundImage: `url(${bgImage})`,
//     backgroundSize: "cover",
//     backgroundPosition: "center",
//     height: "100vh",
//     display: "flex",
//     alignItems: "center",
//     color: center ? "#000" : "#fff",
//   };

//   const contentStyle = {
//     maxWidth: "800px",
//     textAlign: center ? "center" : "left",
//     margin: center ? "0 auto" : "0",
//   };

//   const headingStyle = {
//     fontSize: "60px",
//     fontWeight: "500",
//     marginBottom: "20px",
//     color: center ? "#000" : "#fff",
//   };

//   const subheadingStyle = {
//     fontSize: "1.1rem",
//     marginBottom: "1.5rem",
//     color: center ? "#555" : "#fff",
//   };

//   const smallHeadingStyle = {
//     textTransform: "uppercase",
//     letterSpacing: "1px",
//     fontSize: "13px",
//     fontWeight: "600",
//     marginBottom: "0.5rem",
//     color: center ? "#555" : "#fff",
//   };

//   const listStyle = {
//     color: center ? "#555" : "#fff",
//     paddingLeft: center ? "0" : "20px",
//     textAlign: center ? "center" : "left",
//     listStylePosition: "inside",
//     marginBottom: "1.5rem",
//   };

//   return (
//     <div className="banner-wrapper" style={wrapperStyle}>
//       <Container>
//         <div style={contentStyle}>
//           {smallHeading && <p style={smallHeadingStyle}>{smallHeading}</p>}
//           <h1 style={headingStyle}>{heading}</h1>
//           {subheading && <p style={subheadingStyle}>{subheading}</p>}

//           {/* Render bullet list if provided */}
//           {listItems.length > 0 && (
//             <ul className="checklist list-unstyle" >
//               {listItems.map((item, index) => (
//                 <li key={index} className="check-item d-flex align-items-center pb-4">
//                   <span className="check-icon pe-3" style={{fontSize: "28px"}}><FaRegCheckCircle /></span>
//                   <span className="check-text" style={{fontSize: "28px"}}>{item}</span>
//                 </li>
//               ))}
//             </ul>
//           )}

//           {buttonText && (
//             <CustomButton
//               text={buttonText}
//               className={center ? "outline-dark-rounded" : "fs-6 fw-medium"}
//             />
//           )}
//         </div>
//       </Container>
//     </div>
//   );
// }

// export default PlanBanner;
