import { Helmet } from "react-helmet-async"
import { VendorHeader } from "./sections/Header"
import { VendorList } from "./sections/VendorList"
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { GetVendors } from "../../services/Redux/UserSlice";









const VendorScreen = () =>{
    let Vendors = window.localStorage.getItem("VendorsPage");

    const VendorsParse = JSON.parse(Vendors)
    const dispatch = useDispatch()
    useEffect(() => {
      dispatch(GetVendors())

    
    
    }, [])

    return(

        <>
        <Helmet>

        <title>Vendors | Quantum | IT Leaders</title>
        <meta name="description" content={"Determine your IT needs, then we recommend products suitable to achieve better business performance. We select the top IT vendors from a large pool of options!"}></meta>
        {/* <meta name="keywords" content={"key1,key2"}></meta> */}

</Helmet>
           <VendorHeader/>
           <VendorList/>
        </>
    )
}
export {VendorScreen}