

import "./styles.css"
import { Button, Space } from 'antd';
import { Col, Row } from 'antd';
import { motion } from "framer-motion";

const ServicesHeader = () =>{

    return (
<>
<div className="Container patternClrHead" style={{backgroundColor:"#000"}}>


      <div className="ServicessHeader">
      <motion.h1
    variants={{initial: { x: -100 },
    animate: { x: 0  ,    transition: {  duration:1.5  }}
}}
    initial="initial"
    animate="animate"
  >
        <h1 className="ServicessHeaderHead font-gilroy">Time to Feel Confidence In <span style={{color:"#6645F8"}} >Every Business Operation</span></h1>
        </motion.h1>
        <motion.p
    variants={{initial: { x: 100 },
    animate: { x: 0  ,    transition: {  duration:1.5  }}
}}
    initial="initial"
    animate="animate"
  >
        <p className="HPSEaragraph font-gilroy">Your company will be totally secure, regardless of whether your employees are transferring data internally or whether your accountants are reviewing all external financial transactions. This will happen based on robust security equipment and advanced IT solutions that guarantee better productivity and unstoppable workflow.</p>
        </motion.p>
        {/* <Button  >Primary Button</Button> */}
    </div>

    

{/* <div style={{backgroundColor:"red",width:"100px",height:"500px",position:"absolute"}}> */}

{/* </div> */}

</div>

</>
    )
}

export {ServicesHeader}