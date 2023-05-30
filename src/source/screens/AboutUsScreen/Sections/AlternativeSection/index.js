




import "./style.css"
import { AnimatePresence, motion, useAnimation } from 'framer-motion'
import { Button, Space } from 'antd';
import { Col, Row } from 'antd';
import { CircleImage } from "../../../../components";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const AboutUsVisionMission = () => {
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

      <div className="ContainerAlternativeSection" ref={ref}>
        <div className="ContContainerAlternativeSection">

          <div>
            <Row >
              <Col md={2} lg={2} xl={2}></Col>
              <Col md={1} lg={1} xl={1}></Col>


              <Col md={8} lg={8} xl={8} className="ServicesBannerSectionTextCont ">
                {/* <div className="AlternativeSectionText"> */}
                <motion.div
                className="AlternativeSectionText"
            variants={{
              initial: { opacity: 0, x: 50 },
              animate: { opacity: 1, x: 0, transition: { duration: 0.8 } },
            }}
            initial="initial"
            animate={mainControl}
          >
                  <h1 className="BigTitle font-gilroy">Vision</h1>
                  <h1 className="AlternativeSectionTitle font-gilroy"><span className="ServicesBannerSectionSpan font-gilroy">A Revolutionary Vision</span><br />
                  Is simply a Quantum Edge</h1>
                  <br />
                  <h3 className="font-gilroy">Our goal is to make the business community more conscious of security as a key tenet in every decision made. As a result, businesses become more stable and are better equipped to fend off cyberattacks and attempts at information leakage.</h3>
                </motion.div>
                {/* </div> */}
              </Col>
              <Col md={2} lg={2} xl={2}  className="VdeviderContainer">
              <motion.div
                className="Vdevider"
            variants={{
              initial: { opacity: 0},
              animate: { opacity: 1, transition: { duration: 0.4 } },
            }}
            initial="initial"
            animate={mainControl}
          />
{/* <div className="Vdevider"></div> */}

              </Col>
              <Col md={8} lg={8} xl={8} className="ServicesBannerSectionTextCont">

                {/* <img src={require("../../../../../assets/servicesPoster.png")} className="AlternativeSectionImage" />
                <button className="ServicesBannerSectionLink2">Explore Our Services</button> */}
                {/* <div className="AlternativeSectionText"> */}
                <motion.div
                className="AlternativeSectionText"
            variants={{
              initial: { opacity: 0, x: -50 },
              animate: { opacity: 1, x: 0, transition: { duration: 0.8 } },
            }}
            initial="initial"
            animate={mainControl}
          >
                <h1 className="BigTitle font-gilroy">Mission</h1>

                  <h1 className="AlternativeSectionTitle font-gilroy"><span className="ServicesBannerSectionSpan font-gilroy">We Turn Our Goals </span><br />
                  Into Effective Mission Plans</h1>
                  <br />
                  <h3 className="font-gilroy">We explore the most cutting-edge tools and efficient techniques to control data access and maintain its security. This creates a dynamic environment for businesses that seek continuous development, helping them evolve at a faster pace.</h3>
                {/* </div> */}
                </motion.div>
              </Col>
              <Col md={1} lg={1} xl={1}></Col>

              <Col md={2} lg={2} xl={2}></Col>


            </Row>

          </div>
        </div>

      </div>

    </>
  )
}

export { AboutUsVisionMission }