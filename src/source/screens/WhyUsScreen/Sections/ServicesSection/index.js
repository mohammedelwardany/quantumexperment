




import "./style.css"
import { AnimatePresence, motion, useAnimation } from 'framer-motion'
import { Button, Space } from 'antd';
import { Col, Row } from 'antd';
import { CircleImage } from "../../../../components";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const WhyUsPost = () =>{
  const { ref, inView } = useInView({ threshold: 0.5 });

  const mainControl = useAnimation()
  
  useEffect(() => {
    if(inView){
      mainControl.start('animate')
    }
   
  }, [inView])

    return (
<>

<div className="ContainerServicesSection" ref={ref}>
<div className="ContContainerServicesSection">

<div>
<Row align={"center"}>
      <Col  md={2} lg={2} xl={2}></Col>



      <Col  md={9} lg={9} xl={9} className="ServicesBannerSectionTextCont">
        {/* <div className="ServicesBannerSectionText"> */}
        <motion.div
      className="ServicesBannerSectionText"
            variants={{
              initial: { opacity: 0, x: -100 },
              animate: { opacity: 1, x: 0, transition: { duration: 0.8 } },
            }}
            initial="initial"
            animate={mainControl}
          >
        <h1 className="ServicesBannerSectionTitle font-gilroy">Our Stakeholders <span className="ServicesBannerSectionSpan font-gilroy">Receive Distinctive Values</span></h1>
        <h3 className="font-gilroy">
          {/* Why <span className="ServicesBannerSectionSpan font-gilroy">QUANTUM </span> ? */}
        </h3>
        <h5 className="font-gilroy">We consider our experts our first clients. We do this by establishing long-lasting connections with them. This has an impact on the company's overall transparency with clients and partners. We give them access to the best solutions for their IT problems.</h5>
<br/>
</motion.div>
{/* </div> */}
      </Col>
      <Col  md={2} lg={2} xl={2}></Col>
      <Col  md={9} lg={9} xl={9} className="ServicesBannerSectionTextCont">
      <motion.div
      style={{width:"100%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}
            variants={{
              initial: { opacity: 0, x: 100 },
              animate: { opacity: 1, x: 0, transition: { duration: 0.8 } },
            }}
            initial="initial"
            animate={mainControl}
          >

        <img src={require("../../../../../assets/VlogoBlack.png")} style={{width:"80%",display:"flex",alignItems:"center",justifyContent:"center"}} />
        {/* <button className="ServicesBannerSectionLink2 font-gilroy">Explore Our Services</button> */}
</motion.div>
      </Col>

      
      <Col  md={2} lg={2} xl={2}></Col>

       
</Row>
</div>
</div>

</div>

</>
    )
}

export {WhyUsPost}