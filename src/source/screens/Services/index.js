import { Helmet } from "react-helmet-async"
import "./sections/Services/index.js"
import { ServicePage } from "./sections/Services/index.js"
import { ServicesHeader } from "./sections/ServicesHeader/index.js"
import { useDispatch } from "react-redux"
import { useEffect } from "react"
import { GetItServices, GetSecurityServices } from "../../services/Redux/UserSlice.js"


const Services = ()=> {
    let Services = window.localStorage.getItem("ServicesPage");
    const ServicesParse = JSON.parse(Services)
    const dispatch = useDispatch()
    useEffect(() => {
     
      dispatch(GetItServices())
      dispatch(GetSecurityServices())
    
    
    }, [])
    return (
<>
<Helmet>

<title>Services | Quantum Information Technology</title>
        <meta name="description" content={"Request a quote with Quantum and have the best pricing for the IT equipment you require. Whether your business needs security or advanced IT solutions."}></meta>
        {/* <meta name="keywords" content={"key1,key2"}></meta> */}
</Helmet>


<ServicesHeader/>
<ServicePage/>
</>

    )}


export{Services}