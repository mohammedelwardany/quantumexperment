import "./styles.css";
import { Col, Row } from "antd";
import { useNavigate } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useRef } from "react";
const WhyUsHandler = () => {
  const navigate = useNavigate();
  // const controls = useAnimation();
  const { ref, inView } = useInView({ threshold: 0.5 });

  const mainControl = useAnimation();

  useEffect(() => {
    if (inView) {
      mainControl.start("animate");
    }
  }, [inView]);

  const handleButtonClick = () => {
    navigate("/Whyus");
  };

  return (
    <>
      {/* <div className="shapeEffect"></div>
<div className="shapeEffect2"></div> */}
      <div className="Container" style={{backgroundColor:"#000"}} ref={ref}>
        <motion.div
          variants={{
            initial: { opacity: 0 },
            animate: { opacity: 1, transition: { duration: 0.8 } },
          }}
          initial="initial"
          animate={mainControl}
        >
          <Row>
            <div className="imageHandle">
              
              <Row>
                <Col md={0} lg={0} xl={14}></Col>
                <Col md={24} lg={24} xl={8}>
                  {/* <div className="shapeCont"></div> */}

                  <motion.div
                    className="HeaderWhyUs"
                    variants={{
                      initial: { x: -1000 },
                      animate: { x: 0, transition: { duration: 0.8 } },
                    }}
                    initial="initial"
                    animate={mainControl}
                  >
                    {/* <div className="HeaderWhyUs"> */}
                    <h1 className="HW2text font-gilroy">
                      Security and IT Advanced Services That Drive Business
                      Growth
                    </h1>

                    <p className="HPaaragraph font-gilroy">
                    Streamline your company's operations in a risk-free manner. Quantum Information Technology is your Go-To resource for enhancing overall business productivity and unlocking the true potential of data management through IT. Now is the best time to enable your business to grow smart!
                    </p>
                    <div className="btnContainer font-gilroy">
                      <button className="HeaderBtn" onClick={handleButtonClick}>
                        know more
                      </button>
                    </div>
                    {/* </div> */}
                  </motion.div>
                </Col>
                <Col md={0} lg={0} xl={2}></Col>
              </Row>
            </div>
          </Row>
        </motion.div>
        {/* <div style={{backgroundColor:"red",width:"100px",height:"500px",position:"absolute"}}> */}

        {/* </div> */}
      </div>
    </>
  );
};

export { WhyUsHandler };
