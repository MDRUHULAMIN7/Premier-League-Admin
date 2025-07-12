import { Modal } from "antd";
import { CloseOutlined } from "@ant-design/icons";

const TransactionDetailsModal = ({ open, onCancel }) => {
  return (
    <Modal
      open={open}
      onCancel={onCancel}
      footer={null}
      centered
      title={null}
      width={600}
      height={600} closable={false}
      className="!p-0 custom-modal"
      bodyStyle={{ padding: 0 }}
    >
      <div className="bg-white rounded-lg border-2 border-[#0B3666] relative overflow-hidden">
        {/* Custom Close Button */}
        <div className="absolute text-white top-0 right-0 bg-red-500 rounded-bl-xl p-3 cursor-pointer" onClick={onCancel}>
          <CloseOutlined className=" text-xl" />
        </div>

        {/* Title */}
        <div className="text-center py-4 pt-5 border-b-2 border-[#0B3666]">
          <h2 className="text-[#0B3666] text-2xl font-medium">Transaction Details</h2>
        </div>

        {/* Rows */}
        <div className="divide-y-2 divide-[#0B3666] text-lg text-[#0B3666]">
          <div className="flex justify-between px-4 py-6">
            <span className="">Order Id</span>
            <span className="text-[#0B3666] font-medium">#123678</span>
          </div>

          <div className="flex justify-between px-4 py-6">
            <span className="">Date :</span>
            <span className="text-[#0B3666] font-medium" >01-24-2024</span>
          </div>

          <div className="flex justify-between px-4 py-6">
            <span className="">User name :</span>
            <span className="text-[#0B3666] font-medium">Enrique</span>
          </div>

          <div className="flex justify-between px-4 py-6">
            <span className="">A/C number :</span>
            <span className="text-[#0B3666] font-medium" >**** **** **** *545</span>
          </div>

          <div className="flex justify-between px-4 py-6">
            <span className="">Total transaction amount :</span>
            <span className=" text-[#0B3666] font-medium">$2</span>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default TransactionDetailsModal;
