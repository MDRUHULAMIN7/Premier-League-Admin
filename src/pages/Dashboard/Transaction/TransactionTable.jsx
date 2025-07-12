import { Table, Space, ConfigProvider } from "antd";
import { EyeOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { useState } from "react";
import TransactionDetailsModal from "../../../Components/Modal/TransactionDetailsModal";

const userData = [
  {
    "key": "1",
    "date": "22/10/2024",
    "transaction Id": "#123456",
    "week": "Week 1",
    "name": "Samuel Johnsons",
    "email": "samuel56@gmail.com"
  },
  {
    "key": "2",
    "date": "23/10/2024",
    "transaction Id": "#123457",
    "week": "Week 2",
    "name": "Alice Martin",
    "email": "alice.martin@gmail.com"
  },
  {
    "key": "3",
    "date": "24/10/2024",
    "transaction Id": "#123458",
    "week": "Week 3",
    "name": "David Lee",
    "email": "david.lee@gmail.com"
  },
  {
    "key": "4",
    "date": "25/10/2024",
    "transaction Id": "#123459",
    "week": "Week 4",
    "name": "Emma Watson",
    "email": "emma.watson@gmail.com"
  },
  {
    "key": "5",
    "date": "26/10/2024",
    "transaction Id": "#123460",
    "week": "Week 5",
    "name": "Liam Brown",
    "email": "liam.brown@gmail.com"
  },
  {
    "key": "6",
    "date": "27/10/2024",
    "transaction Id": "#123461",
    "week": "Week 6",
    "name": "Sophia Wilson",
    "email": "sophia.wilson@gmail.com"
  },
  {
    "key": "7",
    "date": "28/10/2024",
    "transaction Id": "#123462",
    "week": "Week 7",
    "name": "James Anderson",
    "email": "james.anderson@gmail.com"
  },
  {
    "key": "8",
    "date": "29/10/2024",
    "transaction Id": "#123463",
    "week": "Week 8",
    "name": "Isabella Thomas",
    "email": "isabella.thomas@gmail.com"
  },
  {
    "key": "9",
    "date": "30/10/2024",
    "transaction Id": "#123464",
    "week": "Week 9",
    "name": "Michael Clark",
    "email": "michael.clark@gmail.com"
  },
  {
    "key": "10",
    "date": "31/10/2024",
    "transaction Id": "#123465",
    "week": "Week 10",
    "name": "Olivia Scott",
    "email": "olivia.scott@gmail.com"
  },
  {
    "key": "11",
    "date": "01/11/2024",
    "transaction Id": "#123466",
    "week": "Week 11",
    "name": "Benjamin Harris",
    "email": "benjamin.harris@gmail.com"
  },
  {
    "key": "12",
    "date": "02/11/2024",
    "transaction Id": "#123467",
    "week": "Week 12",
    "name": "Charlotte Adams",
    "email": "charlotte.adams@gmail.com"
  },
  {
    "key": "13",
    "date": "03/11/2024",
    "transaction Id": "#123468",
    "week": "Week 13",
    "name": "Ethan Nelson",
    "email": "ethan.nelson@gmail.com"
  },
  {
    "key": "14",
    "date": "04/11/2024",
    "transaction Id": "#123469",
    "week": "Week 14",
    "name": "Amelia Carter",
    "email": "amelia.carter@gmail.com"
  },
  {
    "key": "15",
    "date": "05/11/2024",
    "transaction Id": "#123470",
    "week": "Week 15",
    "name": "Alexander Roberts",
    "email": "alex.roberts@gmail.com"
  },
  {
    "key": "16",
    "date": "06/11/2024",
    "transaction Id": "#123471",
    "week": "Week 16",
    "name": "Mia Phillips",
    "email": "mia.phillips@gmail.com"
  },
  {
    "key": "17",
    "date": "07/11/2024",
    "transaction Id": "#123472",
    "week": "Week 17",
    "name": "Daniel Turner",
    "email": "daniel.turner@gmail.com"
  },
  {
    "key": "18",
    "date": "08/11/2024",
    "transaction Id": "#123473",
    "week": "Week 18",
    "name": "Grace Mitchell",
    "email": "grace.mitchell@gmail.com"
  },
  {
    "key": "19",
    "date": "09/11/2024",
    "transaction Id": "#123474",
    "week": "Week 19",
    "name": "Henry Perez",
    "email": "henry.perez@gmail.com"
  },
  {
    "key": "20",
    "date": "10/11/2024",
    "transaction Id": "#123475",
    "week": "Week 20",
    "name": "Lily Rivera",
    "email": "lily.rivera@gmail.com"
  }
]





const TransactionTable = () => {
      const [isModalOpen, setIsModalOpen] = useState(false);
    
      const handleOpen = () => setIsModalOpen(true);
      const handleClose = () => setIsModalOpen(false);

      const columns = [
    {
    title: "Date",
    dataIndex: "date",
    key: "date",
    },
    {
    title: "Transaction Id",
    dataIndex: "transaction Id",
    key: "transaction Id",
    },
    {
    title: "Week",
    dataIndex: "week",
    key: "week",
    },
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "E-mail",
    dataIndex: "email",
    key: "email",
  },

  {
    title: "Action",
    key: "action",
    render: (record) => (
      <Space size="middle">
        <button
          onClick={handleOpen} 
         >
          <EyeOutlined className="text-gray-600 text-lg ml-2 cursor-pointer" />
        </button>
      </Space>
    ),
  },
];
  return (
    <div className="">
      <ConfigProvider
        theme={{
          components: {
            Table: {
              headerColor: "#ffffff",
              headerBg: "#0E3A66",
              headerSplitColor: "transparent",
              cellPaddingBlock: 14,
              cellPaddingInline: 16,
            },
            Pagination: {
              itemActiveBg: "#0B3666",
              itemActiveColor: "#FEFEFE",
              itemSize: 32,
              borderRadius: 32,
              colorPrimary: "#FEFEFE",
              colorText: "#0B3666",
              itemBg: "transparent",
              colorBgTextHover: "transparent",
              colorTextHover: "none",
            },
          },
          token: {
            colorText: "#0B3666",
            fontSize: 14,
          },
        }}
      >
   <Table
  dataSource={userData}
  columns={columns}
  rowKey="key"
  scroll={{ x: "max-content" }}
  pagination={{ pageSize: 10, position: ["bottomCenter"] }}
  rowClassName={() => "custom-row-gap"} 
  components={{
    header: {
      cell: (props) => (
        <th
          {...props}
          className="table-header-cell"
        />
      ),
    },
    body: {
      cell: (props) => (
        <td
          {...props}
          className=""
        />
      ),
    },
  }}
/>


      </ConfigProvider>

      <TransactionDetailsModal open={isModalOpen} onCancel={handleClose} />
    </div>
  );
};

export default TransactionTable;
