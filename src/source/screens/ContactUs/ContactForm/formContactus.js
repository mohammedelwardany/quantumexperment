import { PlusOutlined } from '@ant-design/icons';
import {
  Button,
  Cascader,
  Checkbox,
  Col,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Radio,
  Row,
  Select,
  Switch,
  TreeSelect,
  Upload,
} from 'antd';
import { useState } from 'react';
const { RangePicker } = DatePicker;
const { TextArea } = Input;
const normFile = (e) => {
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};
const FormContactus = () => {
  const [componentDisabled, setComponentDisabled] = useState(true);
  return (
    <>

      <Form

className='font-gilroy'
        layout="horizontal"
        style={{width:"100%"}}
      >
 
<Row>
    <Col span={11}>
        <Form.Item  	>
            <p className='font-gilroy' style={{color:"#fff",fontWeight:"bold",margin:4}}>first name</p>
          <Input />
        </Form.Item>
        </Col>
        <Col span={2}></Col>
        <Col span={11}>
        <Form.Item  	>
            <p className='font-gilroy' style={{color:"#fff",fontWeight:"bold",margin:4}}>last name</p>
          <Input />
        </Form.Item>
        </Col>
        </Row>

        <Row>
    <Col span={24}>
        <Form.Item >
            <p className='font-gilroy' style={{color:"#fff",fontWeight:"bold",margin:4}}>email</p>
          <Input />
        </Form.Item>
        </Col>

        </Row>
        <Row>
    <Col span={24}>
    <Form.Item >
    <p className='font-gilroy' style={{color:"#fff",fontWeight:"bold",margin:4}}>message</p>
          <TextArea rows={4} autoSize style={{minHeight:"100px"}}/>
        </Form.Item>
        </Col>

        </Row>





        <Form.Item style={{display:"flex",justifyContent:"end"}}>
          <Button className='font-gilroy'>Send message</Button>
        </Form.Item>
      </Form>
    </>
  );
};
export default FormContactus;