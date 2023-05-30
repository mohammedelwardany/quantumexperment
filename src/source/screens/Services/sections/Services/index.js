import { useSelector } from "react-redux";
import ServiceModal from "./ServiceModal";
import ServiceComponent from "./serviceComponent";
import { motion } from "framer-motion";
import { Tabs } from "antd";
import "./style.css"; // Adjust the import statement to match the correct CSS file name

const ServicePage = () => {
  const { itservices } = useSelector((state) => state.user);
  const { securityservices } = useSelector((state) => state.user);

  const tabs = [
    {
      id: 1,
      name: "IT Advanced Services",
      contents: (
        <div className="containerServicesPage">
          {itservices.map((item, index) => (
            <ServiceModal
              key={item.id}
              Contenttts={item.description}
              TitleModal={item.name}
              puttonTitle={item.name}
              puttonIconImage={item.photopath}
            />
          ))}

          {/* <ServiceModal/>
            <ServiceModal/>
            <ServiceModal/>
            <ServiceModal/>
            <ServiceModal/>
  */}
        </div>
      ),
    },
    {
      id: 2,
      name: "IT Security Services",
      contents: (
        <div className="containerServicesPage">
          {securityservices.map((item, index) => (
            <ServiceModal
              key={item.id}
              Contenttts={item.description}
              TitleModal={item.name}
              puttonTitle={item.name}
              puttonIconImage={item.photopath}
            />
          ))}
          {/* <ServiceModal/>
<ServiceModal/>
<ServiceModal/>
<ServiceModal/> */}
        </div>
      ),
    },
  ];

  return (
    // <h1 onMouseOver={()=>{console.log("kokokk")}} onMouseLeave={()=>{console.log("ombcc")}}>Get Quantum Values</h1>
    <>
      <motion.div
        className="App-header App-background-primary"
        variants={{
          initial: { opacity: 0 },
          animate: { opacity: 1, transition: { duration: 1.5 } },
        }}
        initial="initial"
        animate="animate"
      >
        <Tabs
          // className="tabsservices"
          // tabBarGutter={100}
          tabBarStyle={{ background: "white"}}
          popupClassName="tabsservices font-gilroy"
          style={{ width: "100%" }}
          defaultActiveKey="1"
          centered
          className="font-gilroy"
          items={tabs.map((item, i) => {
            const id = item.id;
            return {
              label: item.name,
              key: id,
              children: item.contents,
            };
          })}
        />
      </motion.div>
    </>
  );
};

export { ServicePage };
