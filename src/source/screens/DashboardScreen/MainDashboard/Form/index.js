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
import { useDispatch } from 'react-redux';
import { setData, setMetalanding } from '../../../../services/Redux/UserSlice';
const { RangePicker } = DatePicker;
const { TextArea } = Input;
const normFile = (e) => {
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};
const LandingHandle = ({ method, title, name, keys, description }) => {
  // const [componentDisabled, setComponentDisabled] = useState(true);

  const handleSubmit = (event) => {
    const data = {
      name: event.target.title.value,
      description: event.target.description.value,
      Keys: event.target.keys.value

    }
    console.log(data)
    window.localStorage.setItem("LandingPage", JSON.stringify(data));
  }
  return (
    <>
      <div>
        <h1>Landing Page</h1>
        <Form
          labelCol={{
            span: 4,
          }}
          wrapperCol={{
            // span: 14,
          }}
          layout="horizontal"
          // disabled={componentDisabled}
          style={{
            maxWidth: "100%",
          }}
          onSubmitCapture={handleSubmit}
          disabled
        >
          <Row>

            <Col span={12} style={{ paddingInline: "5rem" }}>


              <Form.Item label="title">
                <Input name='title'  />
              </Form.Item>
              <Form.Item label="keys">
                <Input name='keys'  />
              </Form.Item>
            </Col>

            <Col span={12} style={{ paddingInline: "5rem" }}>
              <Form.Item label="description" >
                <TextArea rows={4} name='description' />
              </Form.Item>



              <div style={{ display: "flex", justifyContent: "end" }}> <Button htmlType="submit" type='primary'>Change</Button></div></Col>
          </Row>
        </Form>
      </div>
    </>
  );
};





const ServiceHandlee = ({ method, title, name, keys, description }) => {
  // const [componentDisabled, setComponentDisabled] = useState(true);

  const handleSubmit = (event) => {
    const data = {
      name: event.target.title.value,
      description: event.target.description.value,
      Keys: event.target.keys.value

    }
    window.localStorage.setItem("ServicesPage", JSON.stringify(data));
  }
  return (
    <>
      <div>
        <h1>Services</h1>
        <Form
          labelCol={{
            span: 4,
          }}
          wrapperCol={{
            // span: 14,
          }}
          layout="horizontal"
          // disabled={componentDisabled}
          style={{
            maxWidth: "100%",
          }}
          onSubmitCapture={handleSubmit}
          disabled
        >
          <Row>

            <Col span={12} style={{ paddingInline: "5rem" }}>


              <Form.Item label="title">
                <Input name='title'  />
              </Form.Item>
              <Form.Item label="keys">
                <Input name='keys'  />
              </Form.Item>
            </Col>

            <Col span={12} style={{ paddingInline: "5rem" }}>
              <Form.Item label="description" >
                <TextArea rows={4} name='description'  />
              </Form.Item>



              <div style={{ display: "flex", justifyContent: "end" }}> <Button htmlType="submit" type='primary'>Change</Button></div></Col>
          </Row>
        </Form>
      </div>
    </>
  );
};



const VendorsHandle = () => {
  // const [componentDisabled, setComponentDisabled] = useState(true);

  const handleSubmit = (event) => {
    const data = {
      name: event.target.title.value,
      description: event.target.description.value,
      Keys: event.target.keys.value

    }
    window.localStorage.setItem("VendorsPage", JSON.stringify(data));
  }
  return (
    <>
      <div>
        <h1>Vendors</h1>
        <Form
          labelCol={{
            span: 4,
          }}
          wrapperCol={{
            // span: 14,
          }}
          layout="horizontal"
          // disabled={componentDisabled}
          style={{
            maxWidth: "100%",
          }}
          onSubmitCapture={handleSubmit}
          disabled
        >
          <Row>

            <Col span={12} style={{ paddingInline: "5rem" }}>


              <Form.Item label="title">
                <Input name='title'  />
              </Form.Item>
              <Form.Item label="keys">
                <Input name='keys'  />
              </Form.Item>
            </Col>

            <Col span={12} style={{ paddingInline: "5rem" }}>
              <Form.Item label="description" >
                <TextArea rows={4} name='description'  />
              </Form.Item>



              <div style={{ display: "flex", justifyContent: "end" }}> <Button htmlType="submit" type='primary'>Change</Button></div></Col>
          </Row>
        </Form>
      </div>
    </>
  );
};





const AboutHandle = () => {
  // const [componentDisabled, setComponentDisabled] = useState(true);

  const handleSubmit = (event) => {
    const data = {
      name: event.target.title.value,
      description: event.target.description.value,
      Keys: event.target.keys.value

    }
    window.localStorage.setItem("AboutPage", JSON.stringify(data));
  }
  return (
    <>
      <div>
        <h1>About us</h1>
        <Form
          labelCol={{
            span: 4,
          }}
          wrapperCol={{
            // span: 14,
          }}
          layout="horizontal"
          // disabled={componentDisabled}
          style={{
            maxWidth: "100%",
          }}
          onSubmitCapture={handleSubmit}
          disabled
        >
          <Row>

            <Col span={12} style={{ paddingInline: "5rem" }}>


              <Form.Item label="title">
                <Input name='title'  />
              </Form.Item>
              <Form.Item label="keys">
                <Input name='keys'  />
              </Form.Item>
            </Col>

            <Col span={12} style={{ paddingInline: "5rem" }}>
              <Form.Item label="description" >
                <TextArea rows={4} name='description' />
              </Form.Item>



              <div style={{ display: "flex", justifyContent: "end" }}> <Button htmlType="submit" type='primary'>Change</Button></div></Col>
          </Row>
        </Form>
      </div>
    </>
  );
};



const ContactHandle = ({ method, title, name, keys, description }) => {
  // const [componentDisabled, setComponentDisabled] = useState(true);

  const handleSubmit = (event) => {
    const data = {
      name: event.target.title.value,
      description: event.target.description.value,
      Keys: event.target.keys.value

    }
    window.localStorage.setItem("ContactPage", JSON.stringify(data));
  }
  return (
    <>
      <div>
        <h1>Contact Us</h1>
        <Form
          labelCol={{
            span: 4,
          }}
          wrapperCol={{
            // span: 14,
          }}
          layout="horizontal"
          // disabled={componentDisabled}
          style={{
            maxWidth: "100%",
          }}
          onSubmitCapture={handleSubmit}
          disabled
        >
          <Row>

            <Col span={12} style={{ paddingInline: "5rem" }}>


              <Form.Item label="title">
                <Input name='title'  />
              </Form.Item>
              <Form.Item label="keys">
                <Input name='keys' />
              </Form.Item>
            </Col>

            <Col span={12} style={{ paddingInline: "5rem" }}>
              <Form.Item label="description" >
                <TextArea rows={4} name='description'  />
              </Form.Item>



              <div style={{ display: "flex", justifyContent: "end" }}> <Button htmlType="submit" type='primary'>Change</Button></div></Col>
          </Row>
        </Form>
      </div>
    </>
  );
};




const WhyusHandle = () => {
  // const [componentDisabled, setComponentDisabled] = useState(true);

  const handleSubmit = (event) => {
    const data = {
      name: event.target.title.value,
      description: event.target.description.value,
      Keys: event.target.keys.value

    }
    window.localStorage.setItem("WhyUsPage", JSON.stringify(data));

  }
  return (
    <>
      <div>
        <h1>Why Us</h1>
        <Form
          labelCol={{
            span: 4,
          }}
          wrapperCol={{
            // span: 14,
          }}
          layout="horizontal"
          // disabled={componentDisabled}
          style={{
            maxWidth: "100%",
          }}
          onSubmitCapture={handleSubmit}
          disabled
        >
          <Row>

            <Col span={12} style={{ paddingInline: "5rem" }}>


              <Form.Item label="title">
                <Input name='title'  />
              </Form.Item>
              <Form.Item label="keys">
                <Input name='keys'  />
              </Form.Item>
            </Col>

            <Col span={12} style={{ paddingInline: "5rem" }}>
              <Form.Item label="description" >
                <TextArea rows={4} name='description'  />
              </Form.Item>



              <div style={{ display: "flex", justifyContent: "end" }}> <Button htmlType="submit" type='primary'>Change</Button></div></Col>
          </Row>
        </Form>
      </div>
    </>
  );
};










export {LandingHandle,ServiceHandlee,VendorsHandle,AboutHandle,WhyusHandle,ContactHandle};
