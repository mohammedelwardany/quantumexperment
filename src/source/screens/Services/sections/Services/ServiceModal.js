import { Button, Modal } from 'antd';
import { useState } from 'react';
import ServiceComponent from './serviceComponent';
const ServiceModal = ({puttonTitle,puttonIconImage,TitleModal,Contenttts}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      {/* <Button type="primary" onClick={showModal}>
        Open Modal
      </Button> */}
      <ServiceComponent
      onClickEvent={showModal}
      imagePtn={puttonIconImage}
      ptnName={puttonTitle}
      ptnDiscription={Contenttts}
      />
      <Modal title={TitleModal} open={isModalOpen} onOk={handleOk} onCancel={handleCancel} className='font-gilroy' >
        {Contenttts}
      </Modal>
    </>
  );
};
export default ServiceModal;