import "./styles.css";
import { Button, Space } from "antd";
import { Col, Row } from "antd";
import { useNavigate } from "react-router-dom";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

const HomeHeader = () => {
  const navigate = useNavigate();

  const Ref = useRef(null);
  const Isinview = useInView(Ref, { once: true });

  const mainControl = useAnimation();

  useEffect(() => {
    console.log(Isinview);
    mainControl.start("animate");
  }, [Isinview]);

  const handleButtonClick = () => {
    navigate("/services");
  };
  return (
    <>
      <motion.div
        className="HHshapeEffect"
        variants={{
          initial: { y: -2000 },
          animate: { y: 0, transition: { duration: 1.5 } },
        }}
        initial="initial"
        animate="animate"
      ></motion.div>
      <motion.div
        className="HHshapeEffect2"
        variants={{
          initial: { y: -2000 },
          animate: { y: 0, transition: { duration: 1.5 } },
        }}
        initial="initial"
        animate="animate"
      ></motion.div>
      {/* <div className="HHshapeEffect"></div> */}
      {/* <div className="HHshapeEffect2"></div> */}
      <div className="Container" style={{backgroundColor:"#000"}}>
        <Row>
          <Col md={4} lg={4} xl={10}></Col>
          <Col md={18} lg={18} xl={12} ref={Ref}>
            <motion.div
              className="shapeCont"
              variants={{
                initial: { x: -100 },
                animate: { x: 0, transition: { duration: 1.5 } },
              }}
              initial="initial"
              animate={mainControl}
            ></motion.div>
            {/* <div className="shapeCont"></div> */}

            <motion.div
              className="Header"
              variants={{
                initial: { x: 100 },
                animate: { x: 0, transition: { duration: 1.5 } },
              }}
              initial="initial"
              animate="animate"
            >
              <h1 className="Hatext font-gilroy quantumword">Quantum</h1>
              <h1 className="HaCtext font-gilroy">Information Technology</h1>
              <p className="HPaaragraph font-gilroy">
                Discovering new capabilities for security comes from the
                innovative spirit the experts at Quantum acquire. As a
                customer-oriented IT provider, we explore the best opportunities
                in the market to deliver solutions, establishing robust
                workplaces. It’s time to use state-of-the-art technologies that
                help your business stay ahead of the competition!
              </p>
              <button
                className="HeaderBtn font-gilroy"
                onClick={handleButtonClick}
              >
                Explore Now
              </button>
            </motion.div>
          </Col>
          <Col md={4} lg={4} xl={2}></Col>
        </Row>

        {/* <div style={{backgroundColor:"red",width:"100px",height:"500px",position:"absolute"}}> */}

        {/* </div> */}
      </div>
    </>
  );
};

export { HomeHeader };
