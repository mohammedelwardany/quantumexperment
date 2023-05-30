

import "./styles.css"
import { Button, Space } from 'antd';
import { Col, Row } from 'antd';
import { motion } from "framer-motion";

const VendorHeader = () =>{

    return (
<>
<div className="VendorsshapeEffect"></div>
<div className="Container" style={{backgroundColor:"#000"}}>

<Row>
      <Col  md={4} lg={6} xl={6}></Col>
      <Col  md={18} lg={12} xl={12}>
      <motion.div
      className="VendorsshapeContT " 
      style={{width:"70%",height:"70%"}}
    variants={{initial: { x: -100 },
    animate: { x: 0  ,    transition: {  duration:1.5  }}
}}
    initial="initial"
    animate="animate"
  >

</motion.div>
<motion.div
    variants={{initial: { x: 100 },
    animate: { x: 0  ,    transition: {  duration:1.5  }}
}}
    initial="initial"
    animate="animate"
  >
      <div className="VendorsHeader">
        <h1 className="hheadder font-gilroy" >Quantum’s Top Vendors are Leading Players in the IT Industry</h1>
        <p className="HParagraph font-gilroy">In order to develop a secure business environment, we carefully choose our vendors. We help businesses manage their operations and data without risk and equip them to handle any network threat or cyberattack. This requires a deep understanding of each industry's needs to provide them with the most effective IT equipment from the top IT leaders.</p>
        {/* <Button  >Primary Button</Button> */}
    </div>
    </motion.div>
      </Col>
      <Col  md={2} lg={4} xl={2}></Col>
    </Row>

{/* <div style={{backgroundColor:"red",width:"100px",height:"500px",position:"absolute"}}> */}

{/* </div> */}

</div>

</>
    )
}

export {VendorHeader}