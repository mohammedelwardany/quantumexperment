import { Descriptions } from 'antd';
const DescripeDashboard = ({title,name,keys,description}) => (
  <div>
    <Descriptions
      title={title}
      bordered
      column={{
        xxl: 4,
        xl: 3,
        lg: 3,
        md: 3,
        sm: 2,
        xs: 1,
      }}
    >
      <Descriptions.Item label="name">{name}</Descriptions.Item>
      <Descriptions.Item label="keys">{keys}</Descriptions.Item>
      <Descriptions.Item label="description">{description}</Descriptions.Item>

    </Descriptions>
  </div>
);
export default DescripeDashboard;