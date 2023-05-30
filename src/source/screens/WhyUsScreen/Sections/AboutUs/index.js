




import "./style.css"
import { AnimatePresence, motion } from 'framer-motion'
import { Button, Space } from 'antd';
import { Col, Row } from 'antd';
import { CircleImage } from "../../../../components";

const AboutUsMeetTeam = () => {



  return (
    <>

      <div >
        <div >

          <div>
          <Row className="AboutUsWordSection">
              <Col md={2} lg={2} xl={2}></Col>
              <Col md={20} lg={20} xl={20} className="AboutUsWordSectionTextContainer"><h1 className="AboutUsWordSectionText">MEET TEAM</h1>   
              </Col>
              <Col md={2} lg={2} xl={2}></Col>
            </Row>

            {/* /////// */}

            <Row className="AboutUsWordSection2">
            
            <Col md={6} lg={6} xl={6}><CircleImage/></Col>
            <Col md={6} lg={6} xl={6}><CircleImage/></Col>
            <Col md={6} lg={6} xl={6}><CircleImage/></Col>
            <Col md={6} lg={6} xl={6}><CircleImage/></Col>
            <Col md={6} lg={6} xl={6}><CircleImage/></Col>
            <Col md={6} lg={6} xl={6}><CircleImage/></Col>
            <Col md={6} lg={6} xl={6}><CircleImage/></Col>
            <Col md={6} lg={6} xl={6}><CircleImage/></Col> 
            </Row>
            <Row>

            </Row>

          </div>
        </div>

      </div>

    </>
  )
}

export { AboutUsMeetTeam }