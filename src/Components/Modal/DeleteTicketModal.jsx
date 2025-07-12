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
      width={500}
      className="!p-0 !rounded-none "
      bodyStyle={{ padding: 0 }} // remove default padding
    >
      <div className="md:p-10 bg-white">
        <h2 className="text-2xl font-semibold ">Edit Ticket id={id&&id}</h2>

        <Form
          layout="vertical"
          form={form}
          onFinish={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 md:gap-2 md:gap-x-6  !mt-10"
          requiredMark={false}
        >
          <Form.Item
            label={<span className="font-semibold">Week Name</span>}
            name="week"
            rules={[{ required: true, message: "Please enter week name" }]}
          >
            <Input placeholder="Week – 13" size="large" />
          </Form.Item>

          <Form.Item
            label={<span className="font-semibold">Title of the ticket</span>}
            name="title"
            rules={[{ required: true, message: "Please enter title" }]}
          >
            <Input placeholder="Premier League" size="large" />
          </Form.Item>

          <Form.Item
            label={<span className="font-semibold">Description</span>}
            name="description1"
            rules={[{ required: true, message: "Please enter description" }]}
          >
            <Input
              placeholder="Tickets show your game entries..."
              size="large"
            />
          </Form.Item>

          <Form.Item
            label={<span className="font-semibold">Description</span>}
            name="description2"
            rules={[{ required: true, message: "Please enter description" }]}
          >
            <Input placeholder="Whether you've won or not." size="large" />
          </Form.Item>

          <Form.Item
            label={<span className="font-semibold">Cover Image</span>}
            name="image"
            className="md:col-span-2"
            rules={[{ required: true, message: "Please upload an image" }]}
          >
            <div className="w-full border rounded-md p-6 text-center">
              <img src="/upload.png" className="text-xl mx-auto mb-2" />
              <p className="mb-2 text-gray-600">
                Drag & Drop Images or Select Images
              </p>
              <Upload
                listType="picture"
                maxCount={1}
                beforeUpload={() => false}
              >
                <Button>Choose file</Button>
              </Upload>
            </div>
          </Form.Item>

          <div className="md:col-span-2 flex justify-start gap-4 ">
            <button
              type="button"
              onClick={() => {
                form.resetFields();
                onCancel();
              }}
              className="bg-[#E6F5FC] cursor-pointer  !px-20  rounded-lg !text-[#0B3666]"
              size="large"
            >
              Cancel
            </button>
            <button
              type="primary"
              htmlType="submit"
              className="bg-[#0B3666] py-2 cursor-pointer  !px-20 !text-[#fefefe] rounded-lg hover:bg-[#092a4e]"
            >
              Save
            </button>
          </div>
        </Form>
      </div>
    </Modal>
  );
};

export default DeleteTicketModal;
