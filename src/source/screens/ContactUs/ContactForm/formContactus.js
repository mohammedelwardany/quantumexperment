import { ReactDOM } from "react";
import React from "react";
import { Form, Button, Input, Checkbox, Row, Col } from "antd";

const { TextArea } = Input;

const onFinish = (values) => {
  console.log("Success:", values);
};
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

const FormContactus = () => {
  const handleSubmit = (values) => {
    const { First_name, Last_name, Email, Message } = values;
    console.log("handling submit");
    // Construct the mailto link with form values
    const mailtoLink = `mailto:Info@quantumme.net?subject=Contact Form Submission&body=First Name: ${First_name}%0D%0ALast Name: ${Last_name}%0D%0AEmail: ${Email}%0D%0AMessage: ${Message}`;

    // Open the user's email client with the mailto link
    window.location.href = mailtoLink;
  };

  return (
    <Form
      name="basic"
      initialValues={{
        remember: true,
      }}
      onFinish={handleSubmit}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Row>
        <Col span={11}>
          <p
            className="font-gilroy"
            style={{ color: "#fff", fontWeight: "bold", margin: 4 }}
          >
            First name
          </p>
          <Form.Item
            rules={[
              { required: true, message: "Please input your First name" },
            ]}
            name="First_name"
          >
            <Input name="First_name" />
          </Form.Item>
        </Col>
        <Col span={2}></Col>
        <Col span={11}>
          <p
            className="font-gilroy"
            style={{ color: "#fff", fontWeight: "bold", margin: 4 }}
          >
            Last name
          </p>
          <Form.Item
            rules={[{ required: true, message: "Please input your Last name" }]}
            name="Last_name"
          >
            <Input name="Last_name" />
          </Form.Item>
        </Col>
      </Row>

      <Row>
        <Col span={24}>
          <p
            className="font-gilroy"
            style={{ color: "#fff", fontWeight: "bold", margin: 4 }}
          >
            Email
          </p>
          <Form.Item
            rules={[{ required: true, message: "Please input your Email" }]}
            name="Email"
          >
            <Input name="Email" />
          </Form.Item>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <p
            className="font-gilroy"
            style={{ color: "#fff", fontWeight: "bold", margin: 4 }}
          >
            Message
          </p>
          <Form.Item
            rules={[{ required: true, message: "Please input your Message" }]}
            name="Message"
          >
            <TextArea
              name="Message"
              rows={4}
              autoSize
              style={{ minHeight: "100px" }}
            />
          </Form.Item>
        </Col>
      </Row>

      <Form.Item style={{ display: "flex", justifyContent: "end" }}>
        <Button htmlType="submit" className="font-gilroy">
          Send message
        </Button>
      </Form.Item>
    </Form>
  );
};
export default FormContactus;
