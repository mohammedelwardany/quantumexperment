




import "./style.css"
import { AnimatePresence, motion, useAnimation } from 'framer-motion'
import { Button, Space } from 'antd';
import { Col, Row } from 'antd';
import { CircleImage } from "../../../../components";
import { TeamOutlined } from "@ant-design/icons";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const ValuePrepositionWhyUs = () => {
  const { ref, inView } = useInView({ threshold: 0.5 });

  const mainControl = useAnimation()
  
  useEffect(() => {
    if(inView){
      mainControl.start('animate')
    }
   
  }, [inView])


  return (
    <>

      <div className="ContainerAlternativeSection " ref={ref}>
        <div className="ContContainerAlternativeSection" ref={ref}>

          {/* <div className="WhyUsPropagationSectionContainer"> */}


          <motion.div
           className="WhyUsPropagationSectionContainer"
            variants={{
              initial: { opacity: 0, y: 100 },
              animate: { opacity: 1, y: 0, transition: { duration: 0.8 } },
            }}
            initial="initial"
            animate="animate"
            
          >


            <Row >

              <Col xs={24} md={24} lg={24} xl={6} >
              <div className="WhyUsPropagationSectionText">
              {/* <TeamOutlined className="BigTitle" style={{fontSize:"4.5rem"}} /> */}

                  <h1 className="BigTitle font-gilroy">Reliability</h1>
                  
                  {/* <h1 className="AlternativeSectionTitle font-gilroy"><span className="ServicesBannerSectionSpan">When It Absolutely, Positively</span><br /> */}
                    {/* Has To Be Services
                    Overnight.</h1> */}
                  <br />
                  <h3 className="AlternativeSectionTitle font-gilroy" style={{textAlign:"justify"}}>By providing efficient and clear SLAs (service level agreements), we ensure the delivery of stable IT services with excellent metrics</h3>
                </div>
              </Col>
              <Col xs={24} md={24} lg={24} xl={6} >
              <div className="WhyUsPropagationSectionText">
              {/* <TeamOutlined className="BigTitle" style={{fontSize:"4.5rem"}} /> */}

                  <h1 className="BigTitle font-gilroy">Client Focus</h1>
                  
                  {/* <h1 className="AlternativeSectionTitle font-gilroy"><span className="ServicesBannerSectionSpan">When It Absolutely, Positively</span><br /> */}
                    {/* Has To Be Services
                    Overnight.</h1> */}
                  <br />
                  <h3 className="AlternativeSectionTitle font-gilroy" style={{textAlign:"justify"}}>Our client’s business objectives and needs are our top priorities. We deliver solutions and equipment that consider the business model.</h3>
                </div>
              </Col>
              <Col xs={24} md={24} lg={24} xl={6} >
              <div className="WhyUsPropagationSectionText">
              {/* <TeamOutlined className="BigTitle" style={{fontSize:"4.5rem"}} /> */}

                  <h1 className="BigTitle font-gilroy">Privacy</h1>
                  
                  {/* <h1 className="AlternativeSectionTitle font-gilroy"><span className="ServicesBannerSectionSpan">When It Absolutely, Positively</span><br /> */}
                    {/* Has To Be Services
                    Overnight.</h1> */}
                  <br />
                  <h3 className="AlternativeSectionTitle font-gilroy" style={{textAlign:"justify"}}>Keeping data safe against manipulation and theft is the way we protect your privacy. This makes your operations safe and secure.</h3>
                </div>
              </Col>              <Col xs={24} md={24} lg={24} xl={6} >
              <div className="WhyUsPropagationSectionText">
              {/* <TeamOutlined className="BigTitle" style={{fontSize:"4.5rem"}} /> */}

                  <h1 className="BigTitle font-gilroy">Scalability</h1>
                  
                  {/* <h1 className="AlternativeSectionTitle font-gilroy"><span className="ServicesBannerSectionSpan">When It Absolutely, Positively</span><br /> */}
                    {/* Has To Be Services
                    Overnight.</h1> */}
                  <br />
                  <h3 className="AlternativeSectionTitle font-gilroy" style={{textAlign:"justify"}}>Every business has growing needs that vary with time. We consider this when providing the agreed service, so upgrading becomes easy.</h3>
                </div>
              </Col>
              <Col xs={24} md={24} lg={24} xl={6} >
              <div className="WhyUsPropagationSectionText">
              {/* <TeamOutlined className="BigTitle" style={{fontSize:"4.5rem"}} /> */}

                  <h1 className="BigTitle font-gilroy">Continuous Development
</h1>
                  {/* <h1 className="AlternativeSectionTitle font-gilroy"><span className="ServicesBannerSectionSpan">When It Absolutely, Positively</span><br /> */}
                    {/* Has To Be Services
                    Overnight.</h1> */}
                  <br />
                  <h3 className="AlternativeSectionTitle font-gilroy" style={{textAlign:"justify"}}>Improvement is essential. To make businesses better, we should have advanced solutions. Enhancements include services and processes.</h3>
                </div>
              </Col>
              <Col xs={24} md={24} lg={24} xl={6} >
              <div className="WhyUsPropagationSectionText">
              {/* <TeamOutlined className="BigTitle" style={{fontSize:"4.5rem"}} /> */}

                  <h1 className="BigTitle font-gilroy">Innovation<br /><br /></h1>
                  {/* <h1 className="AlternativeSectionTitle font-gilroy"><span className="ServicesBannerSectionSpan">When It Absolutely, Positively</span><br /> */}
                    {/* Has To Be Services
                    Overnight.</h1> */}
                    
                  <br />
                  <h3 className="AlternativeSectionTitle font-gilroy" style={{textAlign:"justify"}}>Being updated with emerging technologies helps us guide our clients to innovative solutions that will drive business efficiency.</h3>
                </div>
              </Col>
              <Col xs={24} md={24} lg={24} xl={6} >
              <div className="WhyUsPropagationSectionText">
              {/* <TeamOutlined className="BigTitle" style={{fontSize:"4.5rem"}} /> */}

                  <h1 className="BigTitle font-gilroy">Accountability<br /><br /></h1>
                  
                  {/* <h1 className="AlternativeSectionTitle font-gilroy"><span className="ServicesBannerSectionSpan">When It Absolutely, Positively</span><br /> */}
                    {/* Has To Be Services
                    Overnight.</h1> */}
                  <br />
                  <h3 className="AlternativeSectionTitle font-gilroy" style={{textAlign:"justify"}}>After you utilize our services and solutions, we are responsible for producing better business outcomes through transparent actions.</h3>
                </div>
              </Col>
              <Col xs={24} md={24} lg={24} xl={6} >
              <div className="WhyUsPropagationSectionText">
              {/* <TeamOutlined className="BigTitle" style={{fontSize:"4.5rem"}} /> */}

                  <h1 className="BigTitle font-gilroy">High Ethical Standards</h1>
                  {/* <h1 className="AlternativeSectionTitle font-gilroy"><span className="ServicesBannerSectionSpan">When It Absolutely, Positively</span><br /> */}
                    {/* Has To Be Services
                    Overnight.</h1> */}
                  <br />
                  <h3 className="AlternativeSectionTitle font-gilroy" style={{textAlign:"justify"}}>Respecting legal and regulatory requirements ensures that client data is handled with integrity, honesty, and transparency.</h3>
                </div>
              </Col>
            </Row>
            </motion.div>
          </div>
        {/* </div> */}

      </div>

    </>
  )
}

export { ValuePrepositionWhyUs }