import CustomSearch from "../../../Components/Shared/CustomSearch"
import Filter from "../../../Components/Shared/Filter"
import PredictionTable from "./PredictionTable"


const Predictions = () => {
  return (
    <div className="p-4">
      <div className="flex justify-end  mb-5 mx-2 gap-x-2"><CustomSearch></CustomSearch> <Filter></Filter> </div>

      <PredictionTable />
    </div>
  )
}

export default Predictions