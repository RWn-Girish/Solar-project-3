import Form from "../Companypage/Form/Form"
import Awards from "../Homepage/Awards/Awards"
import TestimonialCarousel from "../Homepage/Customer/Testimonial"
import CompanyBanner from "./Banner/Banner"
import CompanyFAQ from "./FAQs/Faq"
import CompanyFeatures from "./Features/Feature"
import CompanyFeature from "./Features/Features"
import SmartPanel from "./Innovation/Innovation"
import SplitFeatureSection from "./Slpit/Solar"
import Story from "./Story/Story"

const Company =()=>{
    return(
        <>
            <CompanyBanner/>
            <CompanyFeatures/>
            <Story/>
            <Form/>
            <Awards/>
            <TestimonialCarousel/>
            <SmartPanel/>
            <CompanyFeature/>
            <SplitFeatureSection/>
            <CompanyFAQ/>
            
            
        </>
    )
}
export default Company