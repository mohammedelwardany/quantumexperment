import { Button, Input } from 'antd';
import {LandingHandle,ServiceHandlee,VendorsHandle,AboutHandle,WhyusHandle,ContactHandle} from './Form';
import DescripeDashboard from './Descripe';
import { useDispatch, useSelector } from 'react-redux';
import { setLocalStorage, setMetaAbout, setMetaContact, setMetaServices, setMetaVendors, setMetaWhyUs, setMetalanding } from '../../../services/Redux/UserSlice';
const { TextArea } = Input;
const MainDashboard = () => {
  // const {data} = useSelector (state => state.user)
  let Landing = window.localStorage.getItem("LandingPage");
  let Services = window.localStorage.getItem("ServicesPage");
  let Vendors = window.localStorage.getItem("VendorsPage");
  let About = window.localStorage.getItem("AboutPage");
  let Contact = window.localStorage.getItem("ContactPage");
  let WhyUs = window.localStorage.getItem("WhyUsPage");

  const LandingParse = JSON.parse(Landing)
  const ServicesParse = JSON.parse(Services)
  const VendorsParse = JSON.parse(Vendors)
  const AboutParse = JSON.parse(About)
  const ContactParse = JSON.parse(Contact)
  const WhyUsParse = JSON.parse(WhyUs)

  const dispatch = useDispatch();
  return(
  <>
  <div><h1 style={{fontSize:"50px"}}>SEO</h1></div>
  <div><p style={{fontSize:"20px"}}>from here you can set meta data that can improve your appearance at search engines</p></div>
  <div><p style={{fontSize:"20px" , color:"gray"}}>method will be available later</p></div>

  <br/><br/><br/><br/>
    {/* <FormHandle
     title={"landing page"} method={()=>{dispatch(setMetalanding(data));dispatch(setLocalStorage());console.log(newData)}}/> */}
     <LandingHandle/>
    <DescripeDashboard
    title={"landing page description"}
    // name={LandingParse.name}
    // keys={LandingParse.Keys }
    // description={LandingParse.description }
    />
    <br/><br/>
    {/* <FormHandle title={"services page"} method={dispatch(setMetaServices(data))}/> */}
    <ServiceHandlee/>
    <DescripeDashboard
    title={"Services Page description"}
    // name={ServicesParse.name }
    // keys={ServicesParse.Keys }
    // description={ServicesParse.description}
    />
    <br/><br/>
    {/* <FormHandle title={"vendor page"} method={dispatch(setMetaVendors(data))}/> */}
    <VendorsHandle/>
    <DescripeDashboard
    title={"Vendors page description"}
    // name={VendorsParse.name}
    // keys={VendorsParse.Keys}
    // description={VendorsParse.description}
    />
    <br/><br/>
    {/* <FormHandle title={"about us page"} method={dispatch(setMetaAbout(data))}/> */}
    <AboutHandle/>
    <DescripeDashboard
    title={"About page description"}
    // name={AboutParse.name}
    // keys={AboutParse.Keys}
    // description={AboutParse.description}
    />
    <br/><br/>
    {/* <FormHandle title={"contact us page"} method={dispatch(setMetaContact(data))}/> */}
    <ContactHandle/>
    <DescripeDashboard
    title={"Contact page description"}
    // name={ContactParse.name}
    // keys={ContactParse.Keys}
    // description={ContactParse.description}
    />
    <br/><br/>
    {/* <FormHandle title={"why us page"} method={dispatch(setMetaWhyUs(data))}/> */}
    <WhyusHandle/>
    <DescripeDashboard
    title={"Why Us page description"}
    // name={WhyUsParse.name}
    // keys={WhyUsParse.Keys}
    // description={WhyUsParse.description}
    />


  </>
)};
export default MainDashboard;