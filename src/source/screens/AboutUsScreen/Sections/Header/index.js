

import "./styles.css"
import { Button, Space } from 'antd';
import { Col, Row } from 'antd';
import { motion } from "framer-motion";

const AboutUsHeader = () =>{
    const textVariants = {
        initial: { x: -50 },
        animate: { x: 0 , transition: { duration: 1.5 }},
      };

    return (
<>

<div className="AboutUsContainer patternClrHead" style={{backgroundColor:"#000"}}>



      <div className="AboutUsHeader">
      <motion.h1
    //   style={{textAlign : "justify"}}
    // style={{fontSize:"5vh !important"}}
        className="AboutUsHCatext font-gilroy"
        variants={textVariants}
        initial="initial"
        animate="animate">

Bringing New Value to IT in Every Business
</motion.h1>

    </div>

  

{/* <div style={{backgroundColor:"red",width:"100px",height:"500px",position:"absolute"}}> */}

{/* </div> */}

</div>

</>
    )
}

export {AboutUsHeader}