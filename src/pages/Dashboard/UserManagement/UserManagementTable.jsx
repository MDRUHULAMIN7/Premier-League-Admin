import { Table, Space, ConfigProvider } from 'antd';
import {  EyeOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const userData = [
  {
    key: '1',
    name: 'Samuel Johnsons',
    email: 'samuel56@gmail.com',
    Location: 'London, England',
    'Num.of Ticket': 3,
    status: 'Active',
  },
  {
    key: '2',
    name: 'Michael Smith',
    email: 'michael22@gmail.com',
    Location: 'New York, USA',
    'Num.of Ticket': 5,
    status: 'Ban',
  },
  {
    key: '3',
    name: 'Emily Davis',
    email: 'emily.davis@gmail.com',
    Location: 'Sydney, Australia',
    'Num.of Ticket': 2,
    status: 'Active',
  },
  {
    key: '4',
    name: 'David Wilson',
    email: 'davidw@yahoo.com',
    Location: 'Toronto, Canada',
    'Num.of Ticket': 4,
    status: 'Ban',
  },
  {
    key: '5',
    name: 'Sophia Brown',
    email: 'sophia.b@gmail.com',
    Location: 'Dublin, Ireland',
    'Num.of Ticket': 1,
    status: 'Active',
  },
  {
    key: '6',
    name: 'Liam Jones',
    email: 'liam.jones@gmail.com',
    Location: 'Auckland, New Zealand',
    'Num.of Ticket': 6,
    status: 'Ban',
  },
  {
    key: '7',
    name: 'Olivia Garcia',
    email: 'olivia.garcia@yahoo.com',
    Location: 'Barcelona, Spain',
    'Num.of Ticket': 3,
    status: 'Active',
  },
  {
    key: '8',
    name: 'Noah Martinez',
    email: 'noah.m@gmail.com',
    Location: 'Berlin, Germany',
    'Num.of Ticket': 7,
    status: 'Ban',
  },
  {
    key: '9',
    name: 'Ava Rodriguez',
    email: 'ava.rod@gmail.com',
    Location: 'Rome, Italy',
    'Num.of Ticket': 2,
    status: 'Active',
  },
  {
    key: '10',
    name: 'James Lee',
    email: 'james.lee@hotmail.com',
    Location: 'Seoul, South Korea',
    'Num.of Ticket': 8,
    status: 'Ban',
  },
  {
    key: '11',
    name: 'Mia Walker',
    email: 'mia.walker@gmail.com',
    Location: 'Paris, France',
    'Num.of Ticket': 1,
    status: 'Active',
  },
  {
    key: '12',
    name: 'Lucas Hall',
    email: 'lucashall@hotmail.com',
    Location: 'Amsterdam, Netherlands',
    'Num.of Ticket': 3,
    status: 'Ban',
  },
  {
    key: '13',
    name: 'Charlotte Allen',
    email: 'charlotte.a@gmail.com',
    Location: 'Copenhagen, Denmark',
    'Num.of Ticket': 4,
    status: 'Active',
  },
  {
    key: '14',
    name: 'Benjamin Young',
    email: 'ben.young@gmail.com',
    Location: 'Oslo, Norway',
    'Num.of Ticket': 5,
    status: 'Ban',
  },
  {
    key: '15',
    name: 'Amelia Hernandez',
    email: 'amelia.hz@yahoo.com',
    Location: 'Zurich, Switzerland',
    'Num.of Ticket': 2,
    status: 'Active',
  },
  {
    key: '16',
    name: 'Henry King',
    email: 'henry.king@gmail.com',
    Location: 'Vienna, Austria',
    'Num.of Ticket': 6,
    status: 'Ban',
  },
  {
    key: '17',
    name: 'Evelyn Wright',
    email: 'evelynwright@hotmail.com',
    Location: 'Prague, Czech Republic',
    'Num.of Ticket': 1,
    status: 'Active',
  },
  {
    key: '18',
    name: 'Alexander Lopez',
    email: 'alex.lopez@gmail.com',
    Location: 'Lisbon, Portugal',
    'Num.of Ticket': 3,
    status: 'Ban',
  },
  {
    key: '19',
    name: 'Harper Scott',
    email: 'harperscott@gmail.com',
    Location: 'Warsaw, Poland',
    'Num.of Ticket': 2,
    status: 'Active',
  },
  {
    key: '20',
    name: 'Daniel Adams',
    email: 'dan.adams@gmail.com',
    Location: 'Budapest, Hungary',
    'Num.of Ticket': 5,
    status: 'Ban',
  },
];



const statusColor = {
  Ban: 'bg-[#EE443F]',
  Active: 'bg-[#00A430]',
};

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'E-mail',
    dataIndex: 'email',
    key: 'email',
  },
  {
    title: 'Location',
    dataIndex: 'Location',
    key: 'location',
  },
  {
    title: 'Num.of Ticket',
    render: (_, record) => <span className='text-[#0095FF]'>{record['Num.of Ticket']} Tickets </span>,
    key: 'Num.of Ticket',
  },
 
  {
    title: 'Status',
    key: 'status',
    render: (_, record) => (
     <span className={`w-[80px] h-[30px] flex items-center justify-center  rounded ${statusColor[record.status]} text-white font-medium`}>
  {record.status}
</span>

    ),
  },
  {
    title: 'Action',
    key: 'action',
    render: (record) => (
      <Space size="middle">    
        <Link to={`/user-details/${record?.key}`}><EyeOutlined className="text-gray-600 text-lg ml-2 cursor-pointer" /></Link>
      </Space>
    ),
  },
];

const UserManagementTable = () => {
  return (
    <div className="">
      <ConfigProvider
        theme={{
          components: {
            Table: {
              headerColor: '#ffffff',
              headerBg: '#0E3A66',
              headerSplitColor: 'transparent',
              cellPaddingBlock: 14,
              cellPaddingInline: 16,
            },
            Pagination: {
              itemActiveBg: '#0B3666',
              itemActiveColor: '#FEFEFE',
              itemSize: 32,
              borderRadius: 32,
              colorPrimary: '#FEFEFE',
              colorText: '#0B3666',
              itemBg: 'transparent',
              colorBgTextHover: 'transparent',
              colorTextHover: 'none',
            },
          },
          token: {
            colorText: '#0B3666',
            fontSize: 14,
          },
        }}
      >
        <Table
          dataSource={userData}
          columns={columns}
          rowKey="key"
          pagination={{ pageSize: 10, position: ['bottomCenter'] }}
          rowClassName={() =>
            'hover:bg-gray-50 rounded-md !my-4 bg-white  !border-4 border-red-500 shadow-sm transition'
          }
          components={{
            header: {
              cell: (props) => (
                <th
                  {...props}
                  className="!bg-[#0E3A66] !text-white  !gap-2 !rounded-none !text-sm !font-semibold !border-none"
                />
              ),
            },
          }}
        />
      </ConfigProvider>
    </div>
  );
};

export default UserManagementTable;
