import { Modal } from "antd";

const TransactionDetailsModal = ({  open, onCancel }) => {
  return (
    <Modal
      title={null}
      open={open}
      centered
      onCancel={() => {
        onCancel();
      }}
      footer={null}
      width={600}
      className="!p-0 !rounded-none "
      bodyStyle={{ padding: 0 }} 
    >
      <div className="md:p-4  bg-white">
        <h2 className="text-2xl text-[#0B3666] text-center font-semibold ">
         Transaction Details
        </h2>
       
      </div>
    </Modal>
  );
};

export default TransactionDetailsModal;
