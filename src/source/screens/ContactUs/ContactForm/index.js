import { Container } from "@mui/material"
import "../ContactForm/style.css"
import { Col, Row } from 'antd';
import FormContactus from "./formContactus";
import { motion } from "framer-motion";





const Contactform = () =>
{
    return(
        
<>
{/* <div className="contactfromcontainer"> */}
<motion.div
className="contactfromcontainer"
                              variants={{
                                initial: { opacity: 0 },
                                animate: { opacity: 1, transition: { duration: 0.8 } },
                              }}
                              initial="initial"
                              animate="animate"
                            >
<Row className="contactfromContcontainer">
      <Col  md={2} lg={2} xl={2}></Col>
      <Col  md={10} lg={10} xl={10}>
      <Container className="containeraddress">
      <div className="Headeraddress font-gilroy">
      <br/>
    </div>
    <div className="addresstext font-gilroy">
    Shams Business Center, Sharjah Media City free Zone, Al Messaned, Sharjah, UAE.
<br/>
+971 56 715 8226
    </div>
    <div>
        <div>
            <img className="imageContactUs" src={require("../../../../assets/contactIamges/worldwide.png")} />
        </div>
    </div>
    </Container>
      </Col>
      
      <Col  md={10} lg={10} xl={10} className="formContactContainer">

<FormContactus/>




      </Col>


      <Col  md={2} lg={2} xl={2}>

      </Col>


</Row>
</motion.div>
{/* </div> */}
    


        </>

    )
}

export{Contactform}