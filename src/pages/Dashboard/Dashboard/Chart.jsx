import { useState } from 'react';
import { ConfigProvider, Select } from 'antd';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const { Option } = Select;

const data = [
  { name: 'Jan', growth: 3000, sold: 6700 },
  { name: 'Feb', growth: 3500, sold: 5100 },
  { name: 'Mar', growth: 2000, sold: 3800 },
  { name: 'Apr', growth: 2780, sold: 3950 },
  { name: 'May', growth: 1890, sold: 5400 },
  { name: 'Jun', growth: 2890, sold: 5100 },
  { name: 'Jul', growth: 3490, sold: 5800 },
  { name: 'Aug', growth: 3990, sold: 4600 },
  { name: 'Sep', growth: 3490, sold: 4450 },
  { name: 'Oct', growth: 4490, sold: 5400 },
  { name: 'Nov', growth: 3490, sold: 4200 },
  { name: 'Dec', growth: 2490, sold: 3550 },
];






export default function Chart() {
  const [selectedMonth, setSelectedMonth] = useState('Monthly');

  const handleMonthChange = (value) => {
    setSelectedMonth(value);
  };

    return (
        <div className="my-8 mt-8 bg-bgColor shadow-md rounded-lg px-3 pt-1 text-textGray ">
            <div className="flex items-center justify-between my-4 ">
                <h1 className="text-4xl font-semibold text-[#1A1A1A]">User Growth VS Ticket Sold</h1>
                <div className="flex flex-col   gap-y-4">
                     <div>
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
            className="w-26 font-semibold text-[#1A1A1A]"
            dropdownStyle={{
              fontSize: '14px',
              padding: '8px 12px',
            }}
            style={{
              background: 'linear-gradient(to right, #DDB861, #F8E45C)',
              border: 'none',
              padding: '16px 0',
              height: '40px',
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
         <div className="flex items-center gap-x-2 text-primary">
  <span className="h-3 w-3 bg-[#0C407B] rounded-full inline-block align-middle"></span>
  <span className="text-sm font-medium leading-[1] align-middle ">User Growth</span>
</div>
         <div className="flex items-center gap-x-2 text-primary">
  <span className="h-3 w-3 bg-[#FFC20E] rounded-full inline-block align-middle"></span>
  <span className="text-sm font-medium leading-[1] align-middle ">Ticket Sold</span>
</div>


                    
                   
                </div>
            </div>
            <ResponsiveContainer width="100%" height={260}>
                <BarChart
                    width={20}
                    height={300}
                    data={data}
                  
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
<Bar dataKey="sold" fill="#FFC20E" barSize={10} radius={[10, 10, 0, 0]} />
                    <Bar dataKey="growth" fill="#0C407B" barSize={10} radius={[10, 10, 0, 0]} />
                    
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}