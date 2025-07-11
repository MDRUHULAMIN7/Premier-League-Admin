import CustomSearch from "../../../Components/Shared/CustomSearch";
import Filter from "../../../Components/Shared/Filter";
import TicketCard from "./TicketCard";

import { FaPlus } from "react-icons/fa";
const ticketDataList = [
  {
    image: "https://i.ibb.co/x8Sg4FXF/ticket-Baner.png",
    week: "Week – 1",
    title: "Premier League",
    description:
      "Tickets show your game entries and whether you've won or not.",
    totalSold: 12,
  },
  {
    image: "https://i.ibb.co/x8Sg4FXF/ticket-Baner.png",
    week: "Week – 2",
    title: "Champions League",
    description: "Your prediction for this week's UEFA clash.",
    totalSold: 22,
  },
  {
    image: "https://i.ibb.co/x8Sg4FXF/ticket-Baner.png",
    week: "Week – 3",
    title: "La Liga Matchday",
    description: "Submit entries before Sunday midnight!",
    totalSold: 18,
  },
  {
    image: "https://i.ibb.co/x8Sg4FXF/ticket-Baner.png",
    week: "Week – 4",
    title: "Bundesliga Picks",
    description: "Predict and win exclusive rewards!",
    totalSold: 25,
  },
  {
    image: "https://i.ibb.co/x8Sg4FXF/ticket-Baner.png",
    week: "Week – 5",
    title: "Serie A Showdown",
    description: "Who will top the league? Place your bets!",
    totalSold: 31,
  },
  {
    image: "https://i.ibb.co/x8Sg4FXF/ticket-Baner.png",
    week: "Week – 6",
    title: "Europa League",
    description: "Second-tier drama continues! Predict wisely.",
    totalSold: 19,
  },
  {
    image: "https://i.ibb.co/x8Sg4FXF/ticket-Baner.png",
    week: "Week – 7",
    title: "World Cup Qualifier",
    description: "Every ticket is a step closer to the cup!",
    totalSold: 40,
  },
  {
    image: "https://i.ibb.co/x8Sg4FXF/ticket-Baner.png",
    week: "Week – 8",
    title: "FA Cup Clash",
    description: "Historic rivals face off. Predict now!",
    totalSold: 28,
  },
  {
    image: "https://i.ibb.co/x8Sg4FXF/ticket-Baner.png",
    week: "Week – 9",
    title: "Copa del Rey",
    description: "The Spanish cup race is heating up!",
    totalSold: 33,
  },
  {
    image: "https://i.ibb.co/x8Sg4FXF/ticket-Baner.png",
    week: "Week – 10",
    title: "International Friendlies",
    description: "Will the underdogs surprise us again?",
    totalSold: 21,
  },
  {
    image: "https://i.ibb.co/x8Sg4FXF/ticket-Baner.png",
    week: "Week – 11",
    title: "EPL Super Sunday",
    description: "Huge matchups and big predictions!",
    totalSold: 36,
  },
  {
    image: "https://i.ibb.co/x8Sg4FXF/ticket-Baner.png",
    week: "Week – 12",
    title: "Derby Day Picks",
    description: "Local rivalries get intense — make your call!",
    totalSold: 42,
  },
];

const TicketManagement = () => {
  return (
    <section>
      <div className="flex justify-end gap-3  p-4">
        <CustomSearch></CustomSearch> <Filter></Filter>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 p-4 mt-2 xl:grid-cols-3 2xl:grid-cols-4 gap-2  bg-[#E8F2FE] min-h-screen">
        {/* Add New Ticket Card */}
        <div className=" flex items-center justify-center bg-transparent transition-all duration-300">
          <button className="flex items-center justify-center gap-x-2 py-3 px-10 rounded-lg !text-white bg-[#0B3666] cursor-pointer">
            <span className="text-xl font-medium">Add More </span>
            <FaPlus size={12} />
          </button>
        </div>

        {/* Ticket Cards */}
        {ticketDataList.map((ticket, index) => (
          <TicketCard key={index} ticket={ticket} />
        ))}
      </div>
    </section>
  );
};

export default TicketManagement;
