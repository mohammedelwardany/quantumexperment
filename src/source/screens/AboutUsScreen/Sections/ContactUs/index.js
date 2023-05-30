import "./styles.css";
import { Col, Row } from "antd";

import { useNavigate } from "react-router-dom";

const AboutUsWhyUsBanner = () => {
  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate("/Whyus");
  };
  return (
    <>
      {/* <div className="shapeEffect"></div>
<div className="shapeEffect2"></div> */}
      <div className="ContactUsBannerContainer">
        <Row style={{ paddingInline: "10vh" }}>
          <div className="ContactUsBannerimageHandle">
            <Row>
              <Col md={2} lg={2} xl={2}></Col>

              <Col md={12} lg={12} xl={12}>
                <div className="HeaderContactUs">
                  <h1 className="HWtext font-gilroy">
                  Need to Know Why<br/>We Are Your Best IT Selection?
                  </h1>

                  <p className="HParagraph font-gilroy">
                 
                  </p>
                  <div className="btnContainer">
                    <button className="HeaderBtn font-gilroy" onClick={handleButtonClick}>
                    Learn more
                    </button>
                  </div>
                </div>
              </Col>
              <Col md={8} lg={8} xl={8}>
                {/* <div className="shapeCont"></div> */}
              </Col>
              <Col md={2} lg={2} xl={2}></Col>
            </Row>
          </div>
        </Row>

        {/* <div style={{backgroundColor:"red",width:"100px",height:"500px",position:"absolute"}}> */}

        {/* </div> */}
      </div>
    </>
  );
};

export { AboutUsWhyUsBanner };
