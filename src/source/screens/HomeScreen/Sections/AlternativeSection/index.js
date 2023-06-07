




import "./style.css"
import { AnimatePresence, motion, useAnimation } from 'framer-motion'
import { Button, Space } from 'antd';
import { Col, Row } from 'antd';
import { CircleImage } from "../../../../components";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AlternativeSection = () => {
const navigate = useNavigate()
  const { ref, inView } = useInView({ threshold: 0.5 });

  const mainControl = useAnimation()
  
  useEffect(() => {
    if(inView){
      mainControl.start('animate')
    }
   
  }, [inView])

  return (
    <>
      <div className="ContainerAlternativeSection">
        <div ref={ref}></div>

        <div className="ContContainerAlternativeSection ">
          <div>
            <Row>
              <Col md={2} lg={2} xl={2}></Col>
              <Col
                md={20}
                lg={20}
                xl={20}
                className="AlternativeSectionTextCont"
              >
                <motion.div
                  variants={{
                    initial: { opacity: 0, y: -100 },
                    animate: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.8 },
                    },
                  }}
                  initial="initial"
                  animate={mainControl}
                >
                  <div className="ServicesBannerSectionText">
                    <h1 className="ServicesBannerSectionTitle font-gilroy">
                      We Comprehend Your IT Needs to Provide the Top Choices.
                    </h1>
                    <p>
                    No matter the problems and difficulties you encounter with your IT setup and tools, we turn any threat, obstacle or challenge into an opportunity.س
                    </p>
                   
                    <button
                      className="ServicesBannerSectionLink font-gilroy"
                      onClick={() => {
                        navigate("/services");
                      }}
                    >
                      Explore Our Services
                    </button>
                    
                  </div>
                </motion.div>
                <br/>
              </Col>
              <Col md={2} lg={2} xl={2}></Col>
            </Row>
            <motion.div
            // className="imageHandleeeclass"
              variants={{
                initial: { opacity: 0, y: 100 },
                animate: { opacity: 1, y: 0, transition: { duration: 0.8 } },
              }}
              initial="initial"
              animate={mainControl}
            >
    

              <img
               className="AlternativeSectionImageeee"

                src={require("../../../../../assets/AlternativePost.png")}
              />
            </motion.div>
            <br/>
            <Row>
              <Col md={2} lg={2} xl={2}></Col>
              <Col md={1} lg={1} xl={1}></Col>

              <Col
                md={8}
                lg={8}
                xl={8}
                className="ServicesBannerSectionTextCont"
              >
                <motion.div
                  variants={{
                    initial: { opacity: 0, x: 50, display: "none" },
                    animate: {
                      opacity: 1,
                      x: 0,
                      display: "block",
                      transition: { duration: 0.8 },
                    },
                  }}
                  initial="initial"
                  animate={mainControl}
                >
                  <div className="AlternativeSectionText">
                    <h1 className="AlternativeSectionTitle font-gilroy">
                      <span className="ServicesBannerSectionSpan font-gilroy">
                        We offer solutions and services
                      </span>
                      <br />
                      that identify threats in order to handle any incident with
                      no losses, protecting businesses' data.
                    </h1>
                    <br />
                    {/* <p>
                      that identify threats in order to handle any incident with
                      no losses, protecting businesses' data.
                    </p> */}
                  </div>
                </motion.div>
              </Col>
              <Col md={2} lg={2} xl={2} className="VdeviderContainer">
                <div className="Vdevider"></div>
              </Col>
              <Col
                md={8}
                lg={8}
                xl={8}
                className="ServicesBannerSectionTextCont"
              >
                <motion.div
                  variants={{
                    initial: { opacity: 0, x: -50, display: "none" },
                    animate: {
                      opacity: 1,
                      x: 0,
                      display: "block",
                      transition: { duration: 0.8 },
                    },
                  }}
                  initial="initial"
                  animate={mainControl}
                >
                  {/* <img src={require("../../../../../assets/servicesPoster.png")} className="AlternativeSectionImage" />
                <button className="ServicesBannerSectionLink2">Explore Our Services</button> */}
                  <div className="AlternativeSectionText">
                    <h1 className="AlternativeSectionTitle font-gilroy">
                      <span className="ServicesBannerSectionSpan font-gilroy">
                        We provide businesses with advanced IT support
                      </span>
                      <br />
                      to help them deal with more difficult problems now and in
                      the future.
                    </h1>
                    <br />
                    {/* <p>Magna in eu exercitation in. Nisi in fugiat officia id adipisicing consectetur cupidatat. Velit nulla irure fugiat ullamco deserunt. Duis ad incididunt dolore pariatur est dolor ea quis ea esse pariatur sint irure laborum. Fugiat incididunt consequat est do labore fugiat.</p> */}
                  </div>
                </motion.div>
              </Col>
              <Col md={1} lg={1} xl={1}></Col>

              <Col md={2} lg={2} xl={2}></Col>
            </Row>
          </div>
        </div>
      </div>
    </>
  );
}

export { AlternativeSection }