import { Helmet } from "react-helmet-async"
import { AboutUsMeetTeam, HAboutUsSection } from "./Sections/AboutUs"
import { AboutUsVisionMission, AlternativeSection } from "./Sections/AlternativeSection"
import { AboutUsWhyUsBanner, ContactUsBanner } from "./Sections/ContactUs"
import { AboutUsHeader, HomeHeader } from "./Sections/Header"
import { AboutUsHeader2 } from "./Sections/Header2AboutUs"
import { useInView } from "react-intersection-observer"
import { useAnimation , motion } from "framer-motion"
import { useEffect } from "react"




const AboutUsScreen = () =>{

    let About = window.localStorage.getItem("AboutPage");
    const AboutParse = JSON.parse(About)
    const { ref, inView } = useInView({ threshold: 0.5 });

    const mainControl = useAnimation()
    
    useEffect(() => {
      if(inView){
        mainControl.start('animate')
      }
      // console.log(inView)
     
    }, [inView])


 
    return(

        <>
                                <Helmet>

                                <title>About Us | Quantum Information Technology</title>
        <meta name="description" content={"Try a remarkable IT experience for your business with Quantum. Know our inspiring goals and the strategies that we believe in their efficiency."}></meta>
        {/* <meta name="keywords" content={"key1,key2"}></meta> */}

</Helmet>
        <AboutUsHeader/>
        <AboutUsHeader2/>
<AboutUsVisionMission/>
<AboutUsMeetTeam/>
<div ref={ref} style={{width:"100%" }}>
            <motion.div
            variants={{
              initial: { opacity: 0, y: 100 },
              animate: { opacity: 1, y: 0, transition: { duration: 0.8 } },
            }}
            initial="initial"
            animate={mainControl}
            
          >
<AboutUsWhyUsBanner/>
</motion.div></div>
        </>
    )
}
export {AboutUsScreen}