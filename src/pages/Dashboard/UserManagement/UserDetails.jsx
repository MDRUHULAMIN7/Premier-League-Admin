import Title from "../../../Components/Shared/Title";
import UserdetailsChart from "./UserDetailsChart";

const UserDetails = () => {
  return (
    <div className="p-2 xl:p-8">
      
        <Title className="my-6">See Prediction</Title>
        {/* top center */}
        <div className="text-sm space-y-3 mb-12 ">
          {[
            { label: "Name", value: "Samuel Johnsons" },
            { label: "E-mail", value: "samuel56@gmail.com" },
            { label: "Location", value: "London,England" },
            { label: "Week", value: "Week - 13" },
            {
              label: "Score",
              value: (
                <>
                  <span className="text-red-500">6</span>
                  <span className="text-[#0B3666]">/10</span>
                </>
              ),
            },
          ].map((item, idx) => (
            <div key={idx} className="flex gap-6 min-w-[220px]">
              <span className="font-semibold text-[#0B3666] w-24">
                {item.label}
              </span>
              <span className="font-semibold text-[#0B3666]">{item.value}</span>
            </div>
          ))}
        </div>
        {/* chart */}
        <div>
          <UserdetailsChart />
        </div>
     
    </div>
  );
};

export default UserDetails;
