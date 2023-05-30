import { FloatButton } from 'antd';
import {
    ArrowUpOutlined
  } from '@ant-design/icons';
import ScrollToTop from './Scrollup';
const FloatButtonQuantum = () => <FloatButton style={{backgroundColor:"#ffffffaa"}} icon={<ArrowUpOutlined />} onClick={()=>{window.scrollTo(0, 0);}} />;
export default FloatButtonQuantum;