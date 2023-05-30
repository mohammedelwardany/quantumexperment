import { NotFound } from "./NotFound";

import { Breadcrumb, Layout, Menu, theme } from "antd";
import { FooterComponent, NavBarComponent } from "../components";
import { Routes, Route } from "react-router-dom";
import { HomeScreen } from "./HomeScreen";
import { VendorScreen } from "./Vendors";
import { WhyUsScreen } from "./WhyUsScreen";
import { ContactUs } from "./ContactUs";
import { AboutUsScreen } from "./AboutUsScreen";
import ScrollToTop from "../utalites/Scrollup";
import FloatButtonQuantum from "../utalites/FloatButton";
import { Services } from "./Services";
import { px } from "framer-motion";
const { Header, Content, Footer } = Layout;

const LayoutHome = () => (
  <Layout style={{fontFamily:"Gilroy"}}>
    <NavBarComponent />

    <div >
      <Routes>
        <Route
          path="/"
          element={
            <>
              <ScrollToTop />
              <HomeScreen />
            </>
          }
        />
        <Route path="/Services" element={<><ScrollToTop /><Services /></>} />
        <Route
          path="/Vendors"
          element={
            <>
              <ScrollToTop />
              <VendorScreen />
            </>
          }
        />
        <Route
          path="/Whyus"
          element={
            <>
              <ScrollToTop />
              <WhyUsScreen />
            </>
          }
        />
        <Route
          path="/Contactus"
          element={
            <>
              <ScrollToTop />
              <ContactUs />
            </>
          }
        />
        <Route
          path="/AboutUs"
          element={
            <>
              <ScrollToTop />
              <AboutUsScreen />
            </>
          }
        />
        <Route
          path="/*"
          element={
            <>
              <ScrollToTop />
              <NotFound />
            </>
          }
        />
      </Routes>
    </div>
    <FloatButtonQuantum />
    <FooterComponent />
  </Layout>
);
export default LayoutHome;
