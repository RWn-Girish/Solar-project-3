import planImg from '../../../assets/Images/plans.webp';
import PlanFeature from '../../Common Comp/PlanFeature/PlanFeature';

const Plans = () => {
  return (
  <>
      <PlanFeature
      image={planImg}
      titel="Plans and Pricing"
      heading="Sunrun Subscription Plan"
      subheading="From installation to maintenance, enjoy an effortless and affordable solar experience with the Sunrun Subscription Plan."
      features={[
        "Best-in-class solar panels and battery storage",
        "Industry-leading equipment guarantee",
        "Predictable monthly payments with locked-in rates",
      ]}
      
    />
    
</>
  );
};

export default Plans;





