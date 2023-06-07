import { Button, Checkbox, Form, Input } from 'antd';
import "../../../../App.css"
import { UserOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { LoginFunc } from '../../../services/Redux/UserSlice';


const Login = () => {
    const {loginerrormsg} = useSelector(state=>state.user)
    const dispatch = useDispatch();
    const onFinish = (values) => {
    //   console.log('Success:', values.password);
      dispatch(LoginFunc({username:values.username,password:values.password}))
    };
    const onFinishFailed = (errorInfo) => {
      console.log('Failed:', errorInfo);
    }; 
    return(
    <div className='' style={{backgroundColor:"#000"}}>
    <div className='App-header-center'>
  <Form
    name="basic"
    className='inside-form'

    wrapperCol={{
      span: 24,
    }}
    style={{
      maxWidth: 400,
    }}
    initialValues={{
      remember: true,
    }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >

    <h1 style={{color:"#fff"}}>Login</h1>
    <Form.Item
      
      name="username"
      rules={[
        {
          required: true,
          message: 'Please input your username!',
        },
      ]}
    >
      <Input name="username" placeholder='username'       prefix={<i class="fa-regular fa-user site-form-item-icon"></i>}/>
    </Form.Item>

    <Form.Item
    
      name="password"
      rules={[
        {
          required: true,
          message: 'Please input your password!',
        },
      ]}
    >
      <Input.Password name="password" placeholder='password' prefix={ <i class="fa-solid fa-unlock-keyhole site-form-item-icon"></i>} style={{width:"100%"}}/>
    </Form.Item>

<p style={{color:"red"}}>{loginerrormsg}</p>

    <Form.Item
      wrapperCol={{
        offset: 0,
        span: 24,
      }}
      style={{ display:"flex",justifyContent:"end"}}
    >
      <Button type="primary" style={{backgroundColor:"#fff",color:"#000"}} htmlType="submit">
        login
      </Button>
    </Form.Item>
  </Form>
  </div>
  </div>
)};
export default Login;