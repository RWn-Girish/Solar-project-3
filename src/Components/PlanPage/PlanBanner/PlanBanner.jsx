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