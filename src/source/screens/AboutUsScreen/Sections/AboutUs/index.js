




import "./style.css"
import { useInView } from "react-intersection-observer";
import { AnimatePresence, motion, useAnimation } from 'framer-motion'
import { Button, Space } from 'antd';
import { Col, Row } from 'antd';
import { CircleImage } from "../../../../components";
import { useEffect } from "react";
// import { motion } from "framer-motion";
const AboutUsMeetTeam = () => {
  const { ref, inView } = useInView({ threshold: 0.5 });

  const mainControl = useAnimation()
  
  useEffect(() => {
    if(inView){
      mainControl.start('animate')
    }
    // console.log(inView)
   
  }, [inView])


  return (
    <>

      <div >
        <div >

          <div>
          <Row className="AboutUsWordSection" ref={ref}>
              <Col md={2} lg={2} xl={2}></Col>
              <Col md={20} lg={20} xl={20} className="AboutUsWordSectionTextContainer"><h1 className="AboutUsWordSectionText" style={{color:"#6645F8 !important"}}>MEET TEAM</h1>   
              </Col>
              <Col md={2} lg={2} xl={2}></Col>
            </Row>

            {/* /////// */}

            <Row className="AboutUsWordSection2">
            <Row className="AboutUsWordSection2H1Cont">
              
            <h1 className="AboutUsWordSection2H1  font-gilroy" >Meet Our Team</h1>

 


                           
            </Row>
            <motion.div
          style={{width:"100%",textAlign:"center"}}
                              variants={{
                                initial: { opacity: 0 , y:100},
                                animate: { opacity: 1,y:0, transition: { duration: 0.8 } },
                              }}
                              initial="initial"
                              animate="animate"
                            >
             <Row  style={{display:"flex",alignItems:"center",justifyContent:"center"}}  >
           
            
            <Col md={24} lg={6} xl={6}><CircleImage/></Col>
            <Col md={24} lg={6} xl={6}><CircleImage/></Col>
            <Col md={24} lg={6} xl={6}><CircleImage/></Col>
            <Col md={24} lg={6} xl={6}><CircleImage/></Col>
            <Col md={24} lg={6} xl={6}><CircleImage/></Col>
            <Col md={24} lg={6} xl={6}><CircleImage/></Col>
            <Col md={24} lg={6} xl={6}><CircleImage/></Col>
            <Col md={24} lg={6} xl={6}><CircleImage/></Col> 

            </Row>
 </motion.div>
            <Row></Row>

            </Row>

          </div>
        </div>

      </div>

    </>
  )
}

export { AboutUsMeetTeam }