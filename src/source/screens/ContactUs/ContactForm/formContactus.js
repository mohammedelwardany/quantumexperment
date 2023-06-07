import { ReactDOM } from "react";

import {Form , Button , Input , Checkbox , Row , Col} from "antd"


const { TextArea } = Input;

const onFinish = (values) => {
  console.log('Success:', values);
};
const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};

const FormContactus = () => {

  return (
    

      <Form 
      name="basic"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      >
 
<Row>
    <Col span={11}>
        <Form.Item rules={[{ required: true, message: 'Please input your First name'  , }]}    name="First_name">
            <p className='font-gilroy' style={{color:"#fff",fontWeight:"bold",margin:4}}>First name</p>
          <Input />
        </Form.Item>
        </Col>
        <Col span={2}></Col>
        <Col span={11}>
        <Form.Item  rules={[{ required: true, message: 'Please input your Last name' }]}  name="Last_name"	>
            <p className='font-gilroy' style={{color:"#fff",fontWeight:"bold",margin:4}}>Last name</p>
          <Input name='l_name'/>
        </Form.Item>
        </Col>
        </Row>

        <Row>
    <Col span={24}>
        <Form.Item    rules={ [{  required: true, message: 'Please input your Email' }]}  name="Email">
            <p className='font-gilroy' style={{color:"#fff",fontWeight:"bold",margin:4}}>Email</p>
          <Input name='mail'/>
        </Form.Item>
        </Col>

        </Row>
        <Row>
    <Col span={24}>
    <Form.Item rules={[{ required: true, message: 'Please input your Message' }]}  name="Message" >
    <p className='font-gilroy' style={{color:"#fff",fontWeight:"bold",margin:4}}>Message</p>
    <TextArea name='message' rows={4} autoSize style={{minHeight:"100px"}}/>
        </Form.Item>
        </Col>

        </Row>

        <Form.Item style={{display:"flex",justifyContent:"end"}}  name="First name">
          <Button htmlType='submit' className='font-gilroy' >Send message</Button>
        </Form.Item>
      </Form>

  );
};
export default FormContactus;