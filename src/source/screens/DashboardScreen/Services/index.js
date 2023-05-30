import { Input, Space } from 'antd';

import DashboardTable from '../CommonComponents/table';
import  { ServiceForm } from '../CommonComponents/form';
import { VendorHome } from '../../HomeScreen/Sections/VendorHome';
import { VendorScreen } from '../../Vendors';
import { VendorList } from '../../Vendors/sections/VendorList';
import { ServicePage } from '../../Services/sections/Services';
import { useDispatch, useSelector } from 'react-redux';
import { DeleteService } from '../../../services/Redux/UserSlice';
const { TextArea } = Input;
const ServicesDashbord = () => {
  

  const {itservices} = useSelector(state=>state.user)
  const {securityservices} = useSelector(state=>state.user)

const dispatch = useDispatch()

const handleDelete = async(e)=>{
  console.log(e.id)
  await dispatch (DeleteService({VendorId:e.id}))
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
      title: 'Delete',
      key: 'Delete',
      render: (id, record) => (
        <Space size="middle">
          <a onClick={()=>handleDelete(id)}>Delete</a>
        </Space>
      ),
    },
  ];
  const dataIT = itservices
  const dataSecurity = securityservices



  return(
  <>
<div ><h1 style={{fontSize:"1.5rem"}}>Add Service</h1></div>

  <ServiceForm/>
  <div ><h1 style={{fontSize:"1.5rem"}}>IT Security Services</h1></div>

<DashboardTable  columns={columns} data={dataSecurity}/>
<div ><h1 style={{fontSize:"1.5rem"}}>IT Advanced Services</h1></div>

<DashboardTable columns={columns} data={dataIT}/>
<div><h1 style={{fontSize:"3rem"}}>Visualization</h1></div>
<ServicePage/>

  </>
)};
export default ServicesDashbord;