

import BannerComp from "./Banner/Banner";
import HomeFeatures from "./Features/feature";
import FormComp from "./Form/form";
import Plans from "./Plans/Plans";
import AppComp from "./APPpromo/AppComp";
import Customer from "./Customer/Customer";
import TestimonialCarousel from "./Customer/Testimonial";
import Technology from "./Technology/Technology";
import Awards from "./Awards/Awards";
import FAQ from "./FAQs/Faq";
import ModernLiving from "./Modern/Modern";

const Homepage=()=>{
    return(
        <>
        <BannerComp/>
        <Plans/>
        <HomeFeatures/>
        <FormComp/>       
        <AppComp/>
        <Customer/>
        <TestimonialCarousel/>
        <Technology/>
        <Awards/>
        <FAQ/>
        <ModernLiving/>
        </>
    )
}
export default Homepage;