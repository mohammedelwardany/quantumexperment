
import { Layout, Space } from 'antd';
import { Col, Row } from 'antd';
import "./style.css"
import { InboxOutlined, PhoneOutlined, TwitterOutlined, FacebookOutlined, LinkedinOutlined } from '@ant-design/icons';


const { Footer } = Layout;


const FooterComponent = () => {
  //function u can use here
  return (

    <Footer style={{ textAlign: 'start', backgroundColor: "#000", color: "#fff" }}>




      <Row  style={{display:"flex",justifyContent:"start"}} className='alighmentScreens'>
        <Col sm={24} md={3} lg={3} xl={3}></Col>
        <Col sm={24} md={4} lg={4} xl={4} >
           <img src={require('../../../assets/BrandLogo.png')} style={{width:"100%",paddingInline:"5vh"}}/>
          <br />
          {/*<Space size={'small'}><InboxOutlined style={{ fontSize: '25px' }} />
            Quantum@mail.com </Space>

          <Space size={'small'}>
            <PhoneOutlined style={{ fontSize: '25px' }} />   +20 1060404916 </Space>
          <br />*/}
          <div style={{paddingTop:"1vh",fontSize:"2vh"}}>
            <p className='font-gilroy' style={{display:"flex",alignItems:"center",justifyContent:"center"}}>you can also follow us at </p>
          </div>
          
          <Row  style={{display:"flex",alignItems:"center",justifyContent:"space-around",fontSize:"2vh" }}>

            <Col md={8} lg={8} xl={8} style={{display:"flex",alignItems:"center",justifyContent:"center"}} >
              {/* <i className="fa-brands fa-linkedin-in" ></i> */}
              <i class="fa-brands fa-facebook-f" style={{fontSize:"3.5vh"}}></i>
            </Col>
            <Col md={8} lg={8} xl={8} style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
              {/* <LinkedinOutlined style={{ fontSize:"3vh" }} /> */}
              <i className="fa-brands fa-linkedin-in" style={{fontSize:"4vh"}}></i>
            </Col>
            <Col md={8} lg={8} xl={8} style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
            <i class="fa-brands fa-twitter" style={{ fontSize:"4vh" }}></i>
              {/* <TwitterOutlined  /> */}
            </Col>
          </Row> 

        </Col>
        <Col sm={24} md={4} lg={4} xl={4}></Col>
        <Col sm={24} md={4} lg={4} xl={4} style={{display:"flex",flexDirection:"column",fontSize:"2vh"}} className='alighmentScreens'>  <h3 className='headerfooter'>LET US HELP YOU</h3>
        <div style={{paddingTop:"2vh"}} className='alighmentjustfyScreens'>
          <div>
                  <Space style={{marginBlock:"1vh"}} size={'small'} className='font-gilroy'>
                    {/* <InboxOutlined  /> */}
                    <i class="fa-solid fa-inbox" style={{ fontSize:"3vh" , marginInlineEnd:"1vh"}}></i>
                  Info@quantumme.net </Space>

          <Space size={'small'} >
            <i class="fa-solid fa-phone" style={{ fontSize:"3vh" , marginInlineEnd:"1vh" }}></i>   +971 56 715 8226 </Space>
        </div>
        </div>
        </Col>
        <Col sm={24} md={4} lg={4} xl={4}></Col>
        <Col sm={24} md={4} lg={4} xl={4} style={{display:"flex",flexDirection:"column",fontSize:"2vh"}} className='alighmentScreens'><h3 className='headerfooter'>VISIT QUANTUM</h3>
        <div style={{marginBlock:"1vh"}}>
        <p>Shams Business Center, Sharjah Media City free Zone, Al Messaned, Sharjah, UAE.</p>
        </div>
        
        </Col>

        <Col sm={24} md={2} lg={2} xl={2}></Col>


      </Row>



    </Footer>


  );
}

export { FooterComponent };