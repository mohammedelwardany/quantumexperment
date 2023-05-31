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
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

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
  const form = useRef()

const handleSubmit = (e) =>{
  e.preventDefault();
  // const data = {
  //   f_name : e.target.f_name.value,
  //   l_name : e.target.l_name.value , 
  //   mail : e.target.mail.value , 
  //   message : e.target.message.value
  // }
  // console.log(data)
  console.log(form.current)
  
  // emailjs.sendForm('service_d7lod8q', 'template_blhcv39', form.current, '5o0nuiIxtJozBwzPb')
  //   .then((result) => {
  //       console.log(result.text);
  //   }, (error) => {
  //       console.log(error.text);
  //   });
}


  return (
    <>

      <Form
ref={form}
className='font-gilroy'
        layout="horizontal"
        style={{width:"100%"}}
        onSubmitCapture={handleSubmit}
      >
 
<Row>
    <Col span={11}>
        <Form.Item  	>
            <p className='font-gilroy' style={{color:"#fff",fontWeight:"bold",margin:4}}>first name</p>
          <Input name='f_name'/>
        </Form.Item>
        </Col>
        <Col span={2}></Col>
        <Col span={11}>
        <Form.Item  	>
            <p className='font-gilroy' style={{color:"#fff",fontWeight:"bold",margin:4}}>last name</p>
          <Input name='l_name'/>
        </Form.Item>
        </Col>
        </Row>

        <Row>
    <Col span={24}>
        <Form.Item >
            <p className='font-gilroy' style={{color:"#fff",fontWeight:"bold",margin:4}}>email</p>
          <Input name='mail'/>
        </Form.Item>
        </Col>

        </Row>
        <Row>
    <Col span={24}>
    <Form.Item >
    <p className='font-gilroy' style={{color:"#fff",fontWeight:"bold",margin:4}}>message</p>
          <TextArea name='message' rows={4} autoSize style={{minHeight:"100px"}}/>
        </Form.Item>
        </Col>

        </Row>





        <Form.Item style={{display:"flex",justifyContent:"end"}}>
          <Button htmlType='submit' className='font-gilroy'>Send message</Button>
        </Form.Item>
      </Form>
    </>
  );
};
export default FormContactus;