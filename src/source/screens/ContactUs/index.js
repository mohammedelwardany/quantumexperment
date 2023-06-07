import { Helmet } from "react-helmet-async";
import "./ContactForm/index.js";
import { Contactform } from "./ContactForm/index.js";
import { ContactHeader } from "./ContactHeader/index.js";

const ContactUs = () => {
  let Contact = window.localStorage.getItem("ContactPage");
  const ContactParse = JSON.parse(Contact);

  return (
    <>
      <Helmet>
        <title>Contact Quantum Information Technology</title>
        <meta
          name="description"
          content={
            "Have the top-performing security solutions and IT equipment that put your business ahead of the competition. Just contact us, and Quantum will help you achieve the best business results."
          }
        ></meta>
        {/* <meta name="keywords" content={"key1,key2"}></meta> */}
      </Helmet>
      <ContactHeader />
      <Contactform />
    </>
  );
};
export { ContactUs };
