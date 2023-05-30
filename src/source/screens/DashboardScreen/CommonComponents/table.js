import { Space, Table, Tag } from 'antd';

const DashboardTable = ({columns,data}) => <Table columns={columns} dataSource={data} />;
export default DashboardTable;