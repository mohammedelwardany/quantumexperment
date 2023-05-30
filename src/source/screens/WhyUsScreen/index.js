import { Helmet } from "react-helmet-async"
import { AboutUsMeetTeam } from "./Sections/AboutUs"
import { ValuePrepositionWhyUs } from "./Sections/AlternativeSection"
import { AboutUsWhyUsBanner } from "./Sections/ContactUs"
import { WhyUsHeader } from "./Sections/Header"
import { AboutUsHeader2 } from "./Sections/Header2AboutUs"
import { WhyUsPost } from "./Sections/ServicesSection"
import { useInView } from "react-intersection-observer"
import { useAnimation , motion } from "framer-motion"
import { useEffect } from "react"




const WhyUsScreen = () => {
    let WhyUs = window.localStorage.getItem("WhyUsPage");
    const WhyUsParse = JSON.parse(WhyUs)
    const { ref, inView } = useInView({ threshold: 0.5 });

    const mainControl = useAnimation()
    
    useEffect(() => {
      if(inView){
        mainControl.start('animate')
      }
     
    }, [inView])
  

    return (

        <>
            <Helmet>

            <title>Why Us | Quantum Information Technology</title>
        <meta name="description" content={"Gain Quantum values that will help your business grow on a strong IT basis. We deliver security and advanced solutions that make a difference!"}></meta>
        {/* <meta name="keywords" content={"key1,key2"}></meta> */}

            </Helmet>
            <WhyUsHeader />
            <WhyUsPost />
   
            <ValuePrepositionWhyUs />
            
            <div ref={ref} style={{width:"100%" }}>
            <motion.div
            variants={{
              initial: { opacity: 0, y: 100 },
              animate: { opacity: 1, y: 0, transition: { duration: 0.8 } },
            }}
            initial="initial"
            animate={mainControl}
            
          >
            <AboutUsWhyUsBanner />
            </motion.div></div>
        </>
    )
}
export { WhyUsScreen }