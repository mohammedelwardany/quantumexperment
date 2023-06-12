

import "./styles.css"
import { Button, Space } from 'antd';
import { Col, Row } from 'antd';
import { useDispatch, useSelector } from "react-redux";
import { SuccessGetData } from "../../../services/Redux/UserSlice";
import { motion } from "framer-motion";

const ContactHeader = () =>{
  const dispatch = useDispatch();
 
    return (
<>
<div style={{backgroundColor:"#000"}} className="patternClrHead">

<Row>
      <Col  md={4} lg={6} xl={6}></Col>
      <Col  md={18} lg={12} xl={12}>
      
    <motion.div
    className="VendorsshapeContTCU" style={{width:"50%",height:"70%"}}
    variants={{initial: { x: -100 },
    animate: { x: 0  ,    transition: {  duration:1.5  }}
}}
    initial="initial"
    animate="animate"
  ></motion.div>

<motion.div
    variants={{initial: { x: 100 },
    animate: { x: 0  ,    transition: {  duration:1.5  }}
}}
    initial="initial"
    animate="animate"
  >
      <div className="VendorsHeader font-gilroy">
        <h1 className="HCUParagraph ">Get in Touch </h1>
        <span className="HPSEaragraph" style={{display:"block" }}>To obtain the most cutting-edge technological advantage,
         contact Quantum Information Technology
</span>
        
    </div>
    </motion.div>
      </Col>
      <Col  md={2} lg={4} xl={2} >
      {/* <div className="VendorsHeader">
        <p className="HCUunderParagraph">Git in touch</p>
    </div>
<div className="VendorsshapeContTCU" style={{width:"100%",height:"20%"}}></div>
     */}
</Col>
    </Row>

{/* <div style={{backgroundColor:"red",width:"100px",height:"500px",position:"absolute"}}> */}

{/* </div> */}

</div>

</>
    )
}

export {ContactHeader}