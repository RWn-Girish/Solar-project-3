

import BannerComp from "./Banner/Banner";
import HomeFeatures from "./Features/feature";
import FormComp from "./Form/form";
import MainForm from "./Form/mainform";
import { Route, Routes } from "react-router";
import Plans from "./Plans/Plans";
import AppComp from "./APPpromo/AppComp";
import Customer from "./Customer/Customer";
// import Review from "./Customer/Review";
import TestimonialCarousel from "./Customer/Testimonial";
import Technology from "./Technology/Technology";

const Homepage=()=>{
    return(
        <>
        <BannerComp/>
        <HomeFeatures/>
      <Routes>
        <Route path="/" element={<MainForm />} />
        <Route path="/step2" element={<FormComp />} />
      </Routes>
      <Plans/>
      <AppComp/>
      <Customer/>
      <TestimonialCarousel/>
      <Technology/>
        </>
    )
}
export default Homepage;