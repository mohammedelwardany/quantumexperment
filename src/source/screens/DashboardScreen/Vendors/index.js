import { Input, Space } from 'antd';

import DashboardTable from '../CommonComponents/table';
import { VendorForm } from '../CommonComponents/form';
import { VendorHome } from '../../HomeScreen/Sections/VendorHome';
import { VendorList } from '../../Vendors/sections/VendorList';
import { useDispatch, useSelector } from 'react-redux';
import { DeleteVendor, GetVendors } from '../../../services/Redux/UserSlice';
const { TextArea } = Input;






const Vendors = () => {
  const {vendors} = useSelector(state=>state.user)
const dispatch = useDispatch()

const handleDelete = async(e)=>{
  console.log(e.id)
  await dispatch (DeleteVendor({VendorId:e.id}))
  dispatch (GetVendors())
}

  const columns = [
    {
      title: 'name',
      dataIndex: 'name',
      key: 'name',
      
    },
    {
      title: 'description',
      dataIndex: 'description',
      key: 'description',
    },
    {
      title: 'photopath',
      key: 'photopath',
      render: (id, record) => (
        <Space  size="middle">
          <a href={id.photopath} target='_blank'>image</a>
        </Space>
      ),
    },
    {
      title: 'websiteurl',
      dataIndex: 'websiteurl',
      key: 'websiteurl',
    },
    {
      title: 'Delete',
      key: 'Delete',
      render: (id, record) => (
        <Space size="middle">
          <a onClick={()=>handleDelete(id)}>Delete</a>
        </Space>
      ),
    },
  ];
  const data = vendors
 
  return(
  <>
<div ><h1 style={{fontSize:"1.5rem"}}>Add Vendor</h1></div>

  <VendorForm/>
  <div ><h1 style={{fontSize:"1.5rem"}}>Vendors TABLE</h1></div>

<DashboardTable columns={columns} data={data}/>
<div><h1 style={{fontSize:"3rem"}}>Visualization</h1></div>
<VendorList/>
<div><h1 style={{fontSize:"3rem"}}>HomeScreen</h1></div>

<VendorHome/>
  </>
)};
export default Vendors;