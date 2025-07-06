import QuoteForm from "../Common Comp/Form/Form";
import BannerComp from "../PlanPage/Banner/Banner"
import PlanBanner from "./PlanBanner/PlanBanner";
import PlanForm from "./PlanForm/PlanFrom";
import PowerPlans from "./PlanOptions/PlanOptions";
import SolarComparison from "./Subscription/SolarComparison";

const PlanPage = () => {
    return(
        <>
            <BannerComp/>
            <SolarComparison/>
            <PlanForm/>
            <PowerPlans/>
            <PlanBanner/>
        </>

    )
        
    
}

export default PlanPage;