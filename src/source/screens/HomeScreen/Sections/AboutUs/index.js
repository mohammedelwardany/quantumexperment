




import "./style.css"
import { useInView } from "react-intersection-observer";
import { AnimatePresence, motion, useAnimation } from 'framer-motion'
import { Button, Space } from 'antd';
import { Col, Row } from 'antd';
import { CircleImage } from "../../../../components";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Opacity } from "@mui/icons-material";

const HAboutUsSection = () => {
  const navigate = useNavigate();
  const { ref, inView } = useInView({ threshold: 0.5 });

  const mainControl = useAnimation()
  
  useEffect(() => {
    if(inView){
      mainControl.start('animate')
    }
    // console.log(inView)
   
  }, [inView])



  const handleButtonClick = () => {
    navigate("/aboutus");
  };


  return (
    <>
      <div  ref={ref}>
        <div>
          <div >
            <Row className="AboutUsWordSection">
              <Col md={2} lg={2} xl={2}></Col>
              <Col
                md={20}
                lg={20}
                xl={20}
                className="AboutUsWordSectionTextContainer"
              >
                                              <motion.p
                                            className="AboutUsWordSectionText font-gilroy"
                              variants={{
                                initial: { y: 200 },
                                animate: { y: 0, transition: { duration: 0.8 } },
                              }}
                              initial="initial"
                              animate={mainControl}
                            >
                ABOUT US
                </motion.p>
              </Col>
              <Col md={2} lg={2} xl={2}></Col>
            </Row>

            {/* /////// */}

            <Row className="AboutUsWordSection2">
              <Row className="AboutUsWordSection2H1Cont">

              <motion.h1
              className="AboutUsWordSection2H1 font-gilroy"
                              variants={{
                                initial: { opacity: 0 },
                                animate: { opacity: 1, transition: { duration: 0.8 } },
                              }}
                              initial="initial"
                              animate={mainControl}
                            >


                About Us
                            </motion.h1>
              </Row>
              <Col md={2} lg={2} xl={2}></Col>
              <Col
                md={10}
                lg={10}
                xl={10}
                className="aboutusSectionImageContainer2"
              >
                                              <motion.img
                                            src={require("../../../../../assets/vlogo.png")}
                                            className="aboutusSectionImage2"
                              variants={{
                                initial: { x: -100 , Opacity:0 },
                                animate: { x: 0, Opacity:1 , transition: { duration: 0.8 } },
                              }}
                              initial="initial"
                              animate={mainControl}
                            >
                {/* <img
                  src={require("../../../../../assets/quantumVertical.png")}
                  className="aboutusSectionImage2"
                /> */}
                </motion.img>
              </Col>
              <Col
                md={10}
                lg={10}
                xl={10}
                className="aboutusSectionParagraphContainer"
              >
                                                              <motion.div
                              variants={{
                                initial: { x: -100 , opacity:0 },
                                animate: { x: 0, opacity:1, transition: { duration: 0.8 } },
                              }}
                              initial="initial"
                              animate={mainControl}
                            >
                  <h1 className="aboutusSectionTitle1 font-gilroy">About Quantum</h1>
                  <p className="aboutusSectionParagraph font-gilroy">
                  Quantum Information Technology is an Egyptian-based IT-providing company that helps different size businesses from numerous industries establish the infrastructure they deserve. We are successful in building enduring relationships with our clients to mentor them throughout their entrepreneurial journeys.
                  </p>
                  <br />
                  <button
                    className="aboutusSectionButton font-gilroy"
                    onClick={handleButtonClick}
                  >
                    Read More
                  </button>
                </motion.div>
              </Col>
              <Col
                md={10}
                lg={10}
                xl={10}
                className="aboutusSectionImageContainer1"
              >
                <img
                  src={require("../../../../../assets/vlogo.png")}
                  className="aboutusSectionImage1"
                />
              </Col>
              <Col md={2} lg={2} xl={2}></Col>
            </Row>
            <Row></Row>
          </div>
        </div>
      </div>
    </>
  );
}

export { HAboutUsSection }