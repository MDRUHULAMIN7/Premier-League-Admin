import { Table, Space, ConfigProvider } from 'antd';
import { EditOutlined, EyeOutlined } from '@ant-design/icons';

const predictionData = [
  {
    key: '1',
    name: 'Samuel Johnsons',
    email: 'samuel56@gmail.com',
    week: 'Week - 13',
    entries: 3,
    correct: '6/10',
    status: 'Missed',
  },
  {
    key: '2',
    name: 'Samuel Johnsons',
    email: 'samuel56@gmail.com',
    week: 'Week - 13',
    entries: 3,
    correct: '0/10',
    status: 'Awaiting',
  },
  {
    key: '3',
    name: 'Samuel Johnsons',
    email: 'samuel56@gmail.com',
    week: 'Week - 13',
    entries: 3,
    correct: '9/10',
    status: 'Win',
  },
  {
    key: '4',
    name: 'Samuel Johnsons',
    email: 'samuel56@gmail.com',
    week: 'Week - 14',
    entries: 2,
    correct: '5/10',
    status: 'Missed',
  },
  {
    key: '5',
    name: 'Samuel Johnsons',
    email: 'samuel56@gmail.com',
    week: 'Week - 14',
    entries: 2,
    correct: '8/10',
    status: 'Win',
  },
  {
    key: '6',
    name: 'Samuel Johnsons',
    email: 'samuel56@gmail.com',
    week: 'Week - 14',
    entries: 2,
    correct: '2/10',
    status: 'Awaiting',
  },
  {
    key: '7',
    name: 'Samuel Johnsons',
    email: 'samuel56@gmail.com',
    week: 'Week - 15',
    entries: 4,
    correct: '7/10',
    status: 'Win',
  },
  {
    key: '8',
    name: 'Samuel Johnsons',
    email: 'samuel56@gmail.com',
    week: 'Week - 15',
    entries: 4,
    correct: '1/10',
    status: 'Missed',
  },
  {
    key: '9',
    name: 'Samuel Johnsons',
    email: 'samuel56@gmail.com',
    week: 'Week - 15',
    entries: 4,
    correct: '0/10',
    status: 'Awaiting',
  },
  {
    key: '10',
    name: 'Samuel Johnsons',
    email: 'samuel56@gmail.com',
    week: 'Week - 16',
    entries: 5,
    correct: '9/10',
    status: 'Win',
  },
  {
    key: '11',
    name: 'Samuel Johnsons',
    email: 'samuel56@gmail.com',
    week: 'Week - 16',
    entries: 5,
    correct: '3/10',
    status: 'Missed',
  },
  {
    key: '12',
    name: 'Samuel Johnsons',
    email: 'samuel56@gmail.com',
    week: 'Week - 16',
    entries: 5,
    correct: '5/10',
    status: 'Awaiting',
  },
  {
    key: '13',
    name: 'Samuel Johnsons',
    email: 'samuel56@gmail.com',
    week: 'Week - 17',
    entries: 2,
    correct: '10/10',
    status: 'Win',
  },
  {
    key: '14',
    name: 'Samuel Johnsons',
    email: 'samuel56@gmail.com',
    week: 'Week - 17',
    entries: 2,
    correct: '6/10',
    status: 'Missed',
  },
  {
    key: '15',
    name: 'Samuel Johnsons',
    email: 'samuel56@gmail.com',
    week: 'Week - 17',
    entries: 2,
    correct: '0/10',
    status: 'Awaiting',
  },
  {
    key: '16',
    name: 'Samuel Johnsons',
    email: 'samuel56@gmail.com',
    week: 'Week - 18',
    entries: 1,
    correct: '8/10',
    status: 'Win',
  },
  {
    key: '17',
    name: 'Samuel Johnsons',
    email: 'samuel56@gmail.com',
    week: 'Week - 18',
    entries: 1,
    correct: '3/10',
    status: 'Missed',
  },
  {
    key: '18',
    name: 'Samuel Johnsons',
    email: 'samuel56@gmail.com',
    week: 'Week - 18',
    entries: 1,
    correct: '0/10',
    status: 'Awaiting',
  },
  {
    key: '19',
    name: 'Samuel Johnsons',
    email: 'samuel56@gmail.com',
    week: 'Week - 19',
    entries: 3,
    correct: '9/10',
    status: 'Win',
  },
  {
    key: '20',
    name: 'Samuel Johnsons',
    email: 'samuel56@gmail.com',
    week: 'Week - 19',
    entries: 3,
    correct: '4/10',
    status: 'Missed',
  },
];


const statusColor = {
  Missed: 'text-red-500',
  Awaiting: 'text-yellow-500',
  Win: 'text-green-600',
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
    title: 'Week',
    dataIndex: 'week',
    key: 'week',
  },
  {
    title: 'Entries',
    dataIndex: 'entries',
    key: 'entries',
  },
  {
    title: 'Correct Pre.',
    key: 'correct',
    render: (_, record) => {
      const [first, second] = record.correct.split('/');
      return (
        <span className="font-semibold">
          <span className={`${statusColor[record.status]}`}>{first}/</span>
          <span className="text-[#0B3666]">{second}</span>
        </span>
      );
    },
  },
  {
    title: 'Status',
    key: 'status',
    render: (_, record) => (
      <span className={`${statusColor[record.status]} font-medium`}>
        {record.status}
      </span>
    ),
  },
  {
    title: 'Action',
    key: 'action',
    render: () => (
      <Space size="middle">
        <EditOutlined className="text-blue-600 text-lg cursor-pointer" />
        <EyeOutlined className="text-gray-600 text-lg ml-2 cursor-pointer" />
      </Space>
    ),
  },
];

const PredictionTable = () => {
  return (
    <div className="p-4">
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
          dataSource={predictionData}
          columns={columns}
          rowKey="key"
          pagination={{ pageSize: 13, position: ['bottomCenter'] }}
          rowClassName={() =>
            'hover:bg-gray-50 rounded-md my-4 bg-white shadow-sm transition'
          }
          components={{
            header: {
              cell: (props) => (
                <th
                  {...props}
                  className="!bg-[#0E3A66] !text-white !py-4 !gap-2 !rounded-none !text-sm !font-semibold !border-none"
                />
              ),
            },
          }}
        />
      </ConfigProvider>
    </div>
  );
};

export default PredictionTable;
