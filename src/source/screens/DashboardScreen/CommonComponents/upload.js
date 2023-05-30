import { UploadOutlined } from '@ant-design/icons';
import { Button, message, Upload } from 'antd';

const UploadVENDORS = () => {
  const HandleChange = (e) =>{
    console.log(e.target.files[0])
  }
  return(
    <input type="file" onChange={HandleChange}>
      
  </input>
)};
const UploadServices = () => {
  const HandleChange = (e) =>{
    console.log(e.target.files[0])
  }
  return(
    <input type="file" onChange={HandleChange}>
      
  </input>
)};
export {UploadVENDORS,UploadServices};