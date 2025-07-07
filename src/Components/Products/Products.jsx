import PlanFeature from "../Common Comp/PlanFeature/PlanFeature";
import Product_Banner from "../../assets/Images/Product-Banner.webp";
import SolrPlan from "../../assets/Images/SolarPlan.webp";
import CleanEnergyFeatures from "../Common Comp/CleanEnergyFeatures/CleanEnergyFeatures";
import { featuresData } from "./CleanEnergy/CleanEnergy";
import SolarPlan from "../Common Comp/SolarPlan/SolarPlan";
import PlanForm from "../PlanPage/PlanForm/PlanFrom";
import Storage from "./Storage/Storage";
import { StorageItems } from "./Storage/StorageItems";
import HomeFeatures from "./Storage/Features/feature";
import FAQ from "./Storage/FAQs/Faq";

const Products = () => {
  return (
    <>
      <PlanFeature
        image={Product_Banner}
        heading="Sunrun Solar Panels"
        subheading="Learn about our best-in-class solar panels and battery storage solutions."
        features={[
          "The latest in solar energy technology",
          "Solar panels built to last",
          "Affordable payment options",
        ]}
        buttonText="Get a quote"
        onButtonClick={() => console.log("Button clicked")}
      />
      <CleanEnergyFeatures
        heading="Unlock clean energy for life"
        features={featuresData}
      />
      ;
      <SolarPlan
        image={SolrPlan}
        heading="Premium solar panels"
        subheading="Our solar panels feature high-efficiency photovoltaic cells, ensuring maximum solar energy capture. Each solar panel is crafted for durability, clean aesthetics and energy efficiency—built to withstand the harshest weather conditions."
        buttonText="Get a quote"
        onButtonClick={() => console.log("Button clicked")}
      />
      <PlanForm/>
      <Storage
        heading={"Harness the power of solar with battery storage"}
        features={StorageItems}
      />
      <HomeFeatures />
      <FAQ />
    </>
  );
};

export default Products;
