import Card from "./Card"
import Chart from "./Chart"
import QuotesChart from "./QuotesChart"
import SalesChart from "./SalesChart"


const Dashboard = () => {
  return (
      <div className="">
            <div className="col-span-4">
                <Card />
            </div>
            <div className="col-span-8 ">
                <Chart />
            </div>

              <div className=" col-span-8">
                <QuotesChart />
            </div>
          
            
        </div>
  )
}

export default Dashboard
