import { Modal, Form, Input, Upload, Button } from "antd";
import { useEffect } from "react";
import TicketData  from "../../../Data/Ticket.json";
const DeleteTicketModal = ({ open, onCancel,id }) => {
  
  const [form] = Form.useForm();



  const handleSubmit = (values) => {
    console.log("Form Values:", values);
    form.resetFields();
    onCancel();
  };

  return (
    <Modal
      title={null}
      open={open}
      centered
      onCancel={() => {
        form.resetFields();
        onCancel();
      }}
      footer={null}
      width={600}
      className="!p-0 !rounded-none "
      bodyStyle={{ padding: 0 }} // remove default padding
    >
      <div className="md:p-10  bg-white">
        <h2 className="text-2xl text-[#0B3666] text-center font-semibold ">Are You Sure You Want To delete </h2>
        <div className="flex flex-col gap-3 mt-14 w-3/5 mx-auto text-white">
        <button
         
        className="w-full py-4 font-medium rounded-lg bg-yellow-400 hover:bg-yellow-500 cursor-pointer">
          Edit Ticket
        </button>
        <button className="w-full py-4 font-medium rounded-lg bg-red-500 hover:bg-red-600 cursor-pointer">
          Delete Ticket
        </button>
      </div>

        
      </div>
    </Modal>
  );
};

export default DeleteTicketModal;
