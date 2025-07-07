import { useState } from 'react';
import { ConfigProvider, Select } from 'antd';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';

const { Option } = Select;

const data = [
  { name: 'Jan', uv: 3000 },
  { name: 'Feb', uv: 3500 },
  { name: 'Mar', uv: 2000 },
  { name: 'Apr', uv: 2780 },
  { name: 'May', uv: 1890 },
  { name: 'Jun', uv: 2890 },
  { name: 'Jul', uv: 3490 },
  { name: 'Aug', uv: 3990 },
  { name: 'Sep', uv: 3490 },
  { name: 'Oct', uv: 4490 },
  { name: 'Nov', uv: 3490 },
  { name: 'Dec', uv: 2490 },
];

const CustomTooltip = ({ payload }) => {
  if (payload && payload.length) {
    return (
      <div
        style={{
          backgroundColor: '#F8E45C',
          padding: '8px 12px',
          borderRadius: '6px',
          color: 'black',
          fontSize: '14px',
        }}
      >
        {payload[0].value}
      </div>
    );
  }
  return null;
};

export default function QuotesChart() {
  const [selectedMonth, setSelectedMonth] = useState('Monthly');

  const handleMonthChange = (value) => {
    setSelectedMonth(value);
  };

  return (
    <div className="mt-10 bg-white shadow-md rounded-lg px-4 py-3">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-4xl font-semibold text-[#1A1A1A]">My Reveneu</h1>

        <ConfigProvider
          theme={{
            components: {
              Select: {
                optionFontSize: 14,
                optionPadding: '8px 12px',
                colorText: '#1A1A1A',
                selectorBg: '#F8E45C',
                borderRadius: 4,
                controlHeight: 30,
              },
            },
          }}
        >
          <Select
            value={selectedMonth}
            onChange={handleMonthChange}
            className="w-32 font-semibold text-[#1A1A1A]"
            dropdownStyle={{
              fontSize: '14px',
              padding: '8px 12px',
            }}
            style={{
              background: 'linear-gradient(to right, #DDB861, #F8E45C)',
              border: 'none',
              height: '30px',
              boxShadow: 'none',
              fontWeight: 600,
            }}
            bordered={false}
          >
            <Option value="Monthly">Monthly</Option>
            <Option value="January">January</Option>
            <Option value="February">February</Option>
            <Option value="March">March</Option>
          </Select>
        </ConfigProvider>
      </div>

      <ResponsiveContainer width="100%" height={260}>
        <AreaChart
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#0B3666" stopOpacity={0.4} />
              <stop offset="100%" stopColor="#ffffff" stopOpacity={0.1} />
            </linearGradient>
          </defs>

          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <Tooltip content={<CustomTooltip />} />
          <Area
            type="monotone"
            dataKey="uv"
            stroke="#0B3666"
            strokeWidth={2}
            fill="url(#colorUv)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
