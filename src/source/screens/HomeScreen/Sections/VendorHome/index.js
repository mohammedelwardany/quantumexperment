
import "./styles.css"
import { AnimatePresence, motion, useAnimation } from 'framer-motion'
import { Button, Space } from 'antd';
import { Col, Row } from 'antd';

import { CircleImage } from "../../../../components";
import { useSelector } from "react-redux";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const VendorHome = () => {
  const { vendors } = useSelector((state) => state.user);

  const { ref, inView } = useInView({ threshold: 0.5 });

  const mainControl = useAnimation()
  
  useEffect(() => {
    if(inView){
      mainControl.start('animate')
    }
   
  }, [inView])
  return (
    <>
    <div  ref={ref}>
      <div className="ContainerVendor " >
        <div >
          <motion.div
          
            variants={{
              initial: { opacity: 0, y: 100 },
              animate: { opacity: 1, y: 0, transition: { duration: 0.8 } },
            }}
            initial="initial"
            animate="animate"
          >
            <div className="ContContainerVendor" ref={ref}>
              <h1 className="sectionTitle font-gilroy">Our Technology Partners</h1>
              <div className="VendorsSectionParagraphContainer">
                <p className="aboutusSectionParagraph font-gilroy">
                  Building partnerships and relationships with international IT
                  innovators is essential to successfully delivering the most
                  cutting-edge technologies. We put our trust in tech industry
                  leaders, and they entrust us with the delivery, installation,
                  and maintenance of their products. To represent Quantum and
                  foster a favorable perception of partners, our subject-matter
                  experts and technical consultants give it their all.
                </p>
              </div>
            </div>
            <div>
              <Row className="paddingVendorSection"  ref={ref}>
                {/* <Col  md={2} lg={2} xl={2}></Col> */}

                {vendors.slice(0, 5).map((vendor, i) => (
                  <Col xs={24} sm={24} md={24} lg={4} xl={4} key={vendor.id}>
                    <motion.div
                      variants={{
                        initial: { opacity: 0, y: 100 },
                        animate: {
                          opacity: 1,
                          y: 0,
                          transition: { duration: 0.8 },
                        },
                      }}
                      initial="initial"
                      animate="animate"
                    >
                      <CircleImage
                        image={vendor.photopath}
                        paragraph={vendor.description}
                        title={vendor.name}
                        link={vendor.websiteurl}
                        key={vendor.id}
                      />
                    </motion.div>
                  </Col>
                ))}

                {/* <Col  md={2} lg={2} xl={2}></Col> */}
              </Row>
            </div>
          </motion.div>
        </div>
      </div></div>
    </>
  );
};

export { VendorHome };








