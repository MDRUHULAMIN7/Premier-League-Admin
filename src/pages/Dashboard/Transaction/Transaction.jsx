import CustomSearch from "../../../Components/Shared/CustomSearch"
import Filter from "../../../Components/Shared/Filter"
import TransactionTable from "./TransactionTable"


const Transaction = () => {
  return (
      <div className="p-4">
      <div className="flex justify-end  mb-5 mx-2 gap-x-2"><CustomSearch/> <Filter/> </div>

     <TransactionTable/>
    </div>
  )
}

export default Transaction