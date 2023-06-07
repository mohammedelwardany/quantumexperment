

import "./styles.css"
import { useInView } from "react-intersection-observer";
import { Col, Row } from 'antd';
import { useAnimation , motion } from "framer-motion";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


const ContactUsBanner=()=>{
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
      navigate("/Contactus");
    };
    return (
      <>
        {/* <div className="shapeEffect"></div>
<div className="shapeEffect2"></div> */}
<div ref={ref} className="">
<motion.div
className="ContactUsBannerContainer"
            variants={{
              initial: { opacity: 0, y: 100 },
              animate: { opacity: 1, y: 0, transition: { duration: 0.8 } },
            }}
            initial="initial"
            animate={mainControl}
          >
          <Row style={{ paddingInline: "10vh" }}>
            <div className="ContactUsBannerimageHandle">
              <Row>
                <Col md={2} lg={2} xl={2}></Col>

                <Col md={24} lg={12} xl={12}>
                  <div className="HeaderContactUs">
                    <p className="HWtext font-gilroy">
                    Looking for a Guaranteed IT Provider? There Is Now Quantum!
                    </p>

                    <p className="HParagraph font-gilroy">
                    You will believe that your relationship with Quantum turns out to be a robust business asset after the first deal.
                    </p>
                    <div className="btnContainer">
                      <button className="HeaderBtn font-gilroy" onClick={handleButtonClick}>
                      Contact us
                      </button>
                    </div>
                  </div>
                </Col>
                <Col md={8} lg={8} xl={8}>
                  {/* <div className="shapeCont"></div> */}
                </Col>
                <Col md={2} lg={2} xl={2}></Col>
              </Row>
            </div>
          </Row>

          {/* <div style={{backgroundColor:"red",width:"100px",height:"500px",position:"absolute"}}> */}

          {/* </div> */}
        </motion.div>
        </div>
      </>
    );
}


export {ContactUsBanner}