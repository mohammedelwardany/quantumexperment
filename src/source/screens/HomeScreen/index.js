import { Helmet } from "react-helmet-async"
import { HAboutUsSection } from "./Sections/AboutUs"
import { AlternativeSection } from "./Sections/AlternativeSection"
import { ContactUsBanner } from "./Sections/ContactUs"
import { HomeHeader } from "./Sections/Header"
import { ServicesSection } from "./Sections/ServicesSection"
import { VendorHome } from "./Sections/VendorHome"
import { WhyUsHandler } from "./Sections/WhyUsHandler"
import React,{useEffect,useRef} from "react"
import { motion , useInView , useAnimation} from "framer-motion"


const HomeScreen = () =>{
  let Landing = window.localStorage.getItem("LandingPage");
  const LandingParse = JSON.parse(Landing)






    return(

        <>
         <Helmet>

        <title>Quantum Information Technology | Security and IT Provider</title>
        <meta name="description" content={"Streamline your company's operations in a risk-free manner! Quantum Information Technology is your go-to partner for improving security and IT."}></meta>
        {/* <meta name="keywords" content={"key1,key2"}></meta> */}
    
      </Helmet>



        
        <HomeHeader/>
        <WhyUsHandler/>
        <VendorHome/>
        {/* <ServicesSection/> */}
        <AlternativeSection/>
        <HAboutUsSection/>
        <ContactUsBanner/>
     
     
        </>
    )
}
export {HomeScreen}