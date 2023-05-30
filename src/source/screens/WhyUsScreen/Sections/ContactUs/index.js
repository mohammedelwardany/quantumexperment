

import { useNavigate } from "react-router-dom";
import "./styles.css"
import { Col, Row } from 'antd';


const AboutUsWhyUsBanner=()=>{




const navigate = useNavigate();



    const handleButtonClick = () => {
        navigate("/Contactus");
      };
    return(
        <>
        {/* <div className="shapeEffect"></div>
<div className="shapeEffect2"></div> */}
<div className="ContactUsBannerContainer ">

<Row style={{paddingInline:"10vh"}}>
    <div className="ContactUsBannerimageHandle">

    <Row >
    <Col  md={2} lg={2} xl={2}></Col>

      <Col  md={12} lg={12} xl={12}>
   <div className="HeaderContactUs">
        <h1 className="HWtext font-gilroy">Become a Quantum Partner!</h1>
        
        <p className="HParagraph font-gilroy">You will believe that your relationship with Quantum turns out to be a robust business asset after the first deal.</p>
<div className="btnContainer">
<button className="HeaderBtn font-gilroy" onClick={handleButtonClick}> Contact us</button>
</div>
    </div>     
      </Col>
      <Col  md={8} lg={8} xl={8} >
{/* <div className="shapeCont"></div> */}

      </Col>
      <Col  md={2} lg={2} xl={2}></Col>
    
    </Row>
    </div>
    </Row>

{/* <div style={{backgroundColor:"red",width:"100px",height:"500px",position:"absolute"}}> */}

{/* </div> */}

</div>
        </>
    )
}


export {AboutUsWhyUsBanner}