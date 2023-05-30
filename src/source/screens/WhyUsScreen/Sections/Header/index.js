

import "./styles.css"
import { Button, Space } from 'antd';
import { Col, Row } from 'antd';
import { motion } from "framer-motion";

const WhyUsHeader = () =>{
    const textVariants = {
        initial: { x: -50 ,opacity:0 },
        animate: { x: 0 ,opacity:1 , transition: { duration: 1.5 }},
      };
      const textinverseVariants = {
        initial: { x: 50 ,opacity:0 },
        animate: { x: 0 ,opacity:1 , transition: { duration: 1.5 }},
      };


    return (
<>

<div className="AboutUsContainer patternClrHead" style={{backgroundColor:"#000"}}>



      <div className="AboutUsHeader">
      <motion.h1
        className="ServicessHeaderHead font-gilroy"
        variants={textVariants}
        initial="initial"
        animate="animate">
 Your Company’s IT Security Is in Trustworthy Hands
 
        </motion.h1>

        <motion.p
        className="font-gilroy PADDINGwORDS"
        variants={textVariants}
        initial="initial"
        animate="animate">
At Quantum Information Technology, we think that a secure IT infrastructure with no downtime is the foundation of a productive workplace. Our team of professionals and technical experts will lead your company to the best solutions possible. Despite working with IT tools and equipment, we consider our people to be our most valuable resource. They apply their knowledge to create an experience that pleases our clients and gives them an advantage over their rivals.  
        </motion.p>

    </div>

  

{/* <div style={{backgroundColor:"red",width:"100px",height:"500px",position:"absolute"}}> */}

{/* </div> */}

</div>

</>
    )
}

export {WhyUsHeader}