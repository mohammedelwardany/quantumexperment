

import "./styles.css"
import { Button, Space } from 'antd';
import { Col, Row } from 'antd';
import { Input } from 'antd';
import { Select } from 'antd';
import { CircleImage } from "../../../../components";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
const { Search } = Input;

const onChange = (value) => {
  console.log(`selected ${value}`);
};
const onSearch = (value) => {
  console.log('search:', value);
};

const VendorList = () =>{
  const {vendors} = useSelector(state=>state.user)
    return (
<>
<div className="VLContainer">
<motion.div

    variants={{initial: { opacity: 0 , y:-100 },
    animate: { opacity: 1  ,y:0,    transition: {  duration:1.5  }}
}}
    initial="initial"
    animate="animate"
  >
<div className="VLHcont">
<h1 className="font-gilroy">VENDORS</h1>
</div>

{/* <Row >
      <Col  md={6} lg={6} xl={6}>


      </Col>
      <Col  md={5} lg={5} xl={5} className="itemSearch">
      <Search
      placeholder="input search text"
      allowClear
      // onSearch={onSearch}
      className="InputVendor"

    />
      </Col>
      <Col  md={2} lg={2} xl={2}>
</Col>
      <Col  md={5} lg={5} xl={5} className="itemSearch">
    

      <Select
    showSearch
    placeholder="Select a person"
    className="InputVendor"
    optionFilterProp="children"
    onChange={onChange}
    onSearch={onSearch}
    filterOption={(input, option) =>
      (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
    }
    options={[
      {
        value: 'jack',
        label: 'Jack',
      },
      {
        value: 'lucy',
        label: 'Lucy',
      },
      {
        value: 'tom',
        label: 'Tom',
      },
    ]}
  />


    </Col>
      <Col  md={6} lg={6} xl={6}>

      </Col>
</Row> */}

<Row className="ComponentRowVL font-gilroy containerbackground  " >
  {vendors.map((vendor,i)=>(
    <Col md={24} lg={8} xl={8} key={vendor.id}>
<CircleImage 
image={vendor.photopath}
paragraph={vendor.description}
title={vendor.name}
link={vendor.websiteurl}
key={vendor.id}
/>
</Col>
  ))}



</Row>

</motion.div>

</div>

</>
    )
}

export {VendorList}