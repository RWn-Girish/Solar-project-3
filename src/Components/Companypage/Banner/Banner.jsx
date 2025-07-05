import Banner from "../../Common Comp/Banner";
import CBanner from "../../../assets/Images/Cbanner.webp";

const CompanyBanner = () => {
  return (
    <Banner
      bgImage={CBanner}
      smallHeading="WHY SUNRUN"
      heading="America’s #1 Home Solar & Storage Provider"
      buttonText="Get a quote"
      center
    />
  );
};

export default CompanyBanner;

