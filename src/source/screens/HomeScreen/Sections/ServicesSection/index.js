import "./style.css";
import { AnimatePresence, motion } from "framer-motion";
import { Button, Space } from "antd";
import { Col, Row } from "antd";
import { CircleImage } from "../../../../components";
import { useNavigate } from "react-router-dom";

const ServicesSection = () => {
  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate("/services");
  };
  return (
    <>
      <div className="ContainerServicesSection">
        <div className="ContContainerServicesSection">
          <div>
            <Row align={"center"}>
              <Col md={2} lg={2} xl={2}></Col>

              <Col
                md={10}
                lg={10}
                xl={10}
                className="ServicesBannerSectionTextCont"
              >
                <div className="ServicesBannerSectionText">
                  <h1 className="ServicesBannerSectionTitle">
                    <span className="ServicesBannerSectionSpan">
                      When It Absolutely, Positively
                    </span>
                    <br />
                    Has To Be Services
                    <br />
                    Overnight.
                  </h1>
                  <br />
                  <button
                    className="ServicesBannerSectionLink"
                    onClick={handleButtonClick}
                  >
                    Explore Our Services
                  </button>
                </div>
              </Col>
              <Col
                md={10}
                lg={10}
                xl={10}
                className="ServicesBannerSectionTextCont"
              >
                <img
                  src={require("../../../../../assets/servicesPoster.png")}
                  className="ServicesSectionImage"
                />
                <button className="ASServicesBannerSectionLink2">
                  Explore Our Services
                </button>
              </Col>

              <Col md={2} lg={2} xl={2}></Col>
            </Row>
          </div>
        </div>
      </div>
    </>
  );
};

export { ServicesSection };
