import {
  AppstoreOutlined,
  BarChartOutlined,
  CloudOutlined,
  ShopOutlined,
  TeamOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';
import React from 'react';
import {  Routes, Route, useLocation } from 'react-router-dom';
import { useNavigate } from "react-router-dom"

import MainDashboard from './MainDashboard';
import Vendors from './Vendors';
import ServicesDashbord from './Services';
import Login from './login';
const { Header, Content, Footer, Sider } = Layout;


//   const items = [


//     // UserOutlined,
//     // VideoCameraOutlined,
//     // UploadOutlined,
//     // BarChartOutlined,
//     // CloudOutlined,
//     // TeamOutlined,
//     // ShopOutlined,
//   ]


const items = [
  {
    id: 1,
    title: "Dashboard",
    icon: AppstoreOutlined,
    path: "/dashboard/dashboard/"
  },
  {
    id: 2,
    title: "Services",
    icon: BarChartOutlined,
    path: "/dashboard/dashboard/Services"
  },
  {
    id: 3,
    title: "Vendors",
    icon: TeamOutlined,
    path: "/dashboard/dashboard/Vendors"
  },
].map((item, index) => ({
  key: item.path,
  icon: React.createElement(item.icon),
  label: item.title,
  link : item.path
}));
const QuantumDashboard = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Layout hasSider>
      <Sider
        style={{
          overflow: 'auto',
          height: '100vh',
          position: 'fixed',
          left: 0,
          top: 0,
          bottom: 0,
        }}
      >
        <div>
          <img src={require("../../../assets/BrandLogo.png")} width={"100%"} style={{ padding: 30 }} />
        </div>
        <div className="demo-logo-vertical" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['/dashboard/dashboard/']} selectedKeys={location.pathname} items={items} onSelect={(e) => navigate(e.item.props.link)} />
      </Sider>
      <Layout
        className="site-layout"
        style={{
          marginLeft: 200,
        }}
      >
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
            display:"flex",alignItems:"center",justifyContent:"center"
          }}
        >
          {/* <div style={{display:"flex",alignItems:"center",justifyContent:"center"}}> */}
            <h1 style={{fontSize:"30px"}}>welcome to dashboard</h1>
          {/* </div> */}


        </Header>
        <Content
          style={{
            margin: '24px 16px 0',
            overflow: 'initial',
          }}
        >
          <div
            style={{
              padding: 24,
              textAlign: 'center',
              background: colorBgContainer,
            }}
          >
            <Routes>
            {/* <Route exact path='/' element={<Login />} /> */}
              <Route exact path='/' element={<MainDashboard />} />
              {/* <Route path='/Services' element={}/> */}
              <Route path="/Services" element={<ServicesDashbord />} />
              <Route path="/Vendors" element={<Vendors />} />
            </Routes>
            {/* <ServicesDashbord /> */}
          </div>
        </Content>
        <Footer
          style={{
            textAlign: 'center',
          }}
        >
          Bit Zone ©2023 Created by Bit Zone
        </Footer>
      </Layout>
    </Layout>
  );
};
export { QuantumDashboard };