import { PlusOutlined } from '@ant-design/icons';
import {
    Button,

    Col,

    DatePicker,
    Form,
    Input,
    Radio,
    Row,

} from 'antd';
import { useState } from 'react';
import UploadDashboard from './upload';
import { useDispatch } from 'react-redux';
import { GetVendors, SetServices, SetVendors } from '../../../services/Redux/UserSlice';
const { RangePicker } = DatePicker;
const { TextArea } = Input;
const normFile = (e) => {
    if (Array.isArray(e)) {
        return e;
    }
    return e?.fileList;
};
const VendorForm = () => {
    const dispatch = useDispatch()
    const HandleSubmit = (event) =>{
        event.preventDefault();
        const data = {
            name : event.target.elements.name.value,
            description : event.target.elements.descripe.value,
            photo : event.target.elements.file.files[0],
            websiteurl : event.target.elements.url.value,
        }
        console.log(data) 
        dispatch(SetVendors(data))
        dispatch(GetVendors())
    }
    return (
        <>

            <Form
                labelCol={{
                    span: 4,
                }}
                wrapperCol={{
                    span: 14,
                }}
                layout="horizontal"

                style={{
                    width: "100%"
                }}
                onSubmitCapture={HandleSubmit}
            >
                <Row>
                    <Col span={12}>
                        <Form.Item label="name">
                            <Input name='name'/>
                        </Form.Item>
                        <Form.Item label="websiteUrl">
                            <Input name='url'/>
                        </Form.Item>
                        <Form.Item label="Image" valuePropName="fileList" getValueFromEvent={normFile}>
                            <input type='file' name='file'></input>
                        </Form.Item>
                    </Col>
                    <Col span={12}>        
                    <Form.Item label="Description">
                        <TextArea rows={4} name='descripe'/>
                    </Form.Item>
                    <div style={{display:"flex",alignItems:"center",justifyContent:"end",paddingInline:"10rem"}}>

                    <Button type="primary" htmlType='submit'>add</Button>
                    </div>
                    </Col>

                </Row>

            </Form>
        </>
    );
};


const ServiceForm = () => {
    const [componentDisabled, setComponentDisabled] = useState(true);



        const dispatch = useDispatch()
        const HandleSubmit = (event) =>{
            event.preventDefault();
            const data = {
                name : event.target.elements.name.value,
                description : event.target.elements.descripe.value,
                photo : event.target.elements.file.files[0],
                type : event.target.elements.type.value,
            }
            console.log(data) 
            dispatch(SetServices(data))
            // dispatch(GetVendors())
        }
    
    return (
        <>

            <Form
                labelCol={{
                    span: 4,
                }}
                wrapperCol={{
                    span: 14,
                }}
                layout="horizontal"

                style={{
                    width: "100%"
                }}
                onSubmitCapture={HandleSubmit}
            >
                <Row>
                    <Col span={12}>
                        <Form.Item label="Title">
                            <Input name='name'/>
                        </Form.Item>
                        <Form.Item label="Image" valuePropName="fileList" getValueFromEvent={normFile}>
                            <input type='file' name='file'></input>
                        </Form.Item>
                        <Form.Item label="Category">
          <Radio.Group defaultValue={"true"} name='type'>
            <Radio value="true"> IT Advanced Services </Radio>
            <Radio value="false"> IT Security Services </Radio>
          </Radio.Group>
        </Form.Item>
                    </Col>
                    <Col span={12}>        
                    <Form.Item label="Description" name={"descripe"}>
                        <TextArea rows={4} />
                    </Form.Item>
                    <div style={{display:"flex",alignItems:"center",justifyContent:"end",paddingInline:"10rem"}}>

                    <Button type="primary" htmlType='submit'>add</Button>
                    </div>
                    </Col>

                </Row>

            </Form>
        </>
    );
};






export {VendorForm,ServiceForm};