import { useState } from "react";
import EditTicketModal from "../../../Components/Modal/EditTicketModal";
import TicketData from "../../../../Data/Ticket.json";
import DeleteTicketModal from "../../../Components/Modal/DeleteTicketModal";
const TicketCard = ({ ticket }) => {
  const { image, week, title, description, totalSold,id } = ticket;

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpen = () => setIsModalOpen(true);
  const handleClose = () => setIsModalOpen(false);

  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

   const openDeleteModal = () => setIsDeleteModalOpen(true);
   const closeDeleteModal = () => setIsDeleteModalOpen(false);


  const specificTicket = TicketData?.find(ticket => ticket?.id === id);



  return (
    <div className="w-full max-w-sm mx-auto p-4 bg-[#E8F2FE] rounded-2xl shadow-xl">
      {/* Banner Image with Overlay */}
      <div className="relative rounded-t-xl overflow-hidden">
        <img
          src={image  }
          alt={title}
          className="w-full h-auto aspect-[16/9] object-cover"
        />

        {/* Overlay Information Box */}
        <div className="absolute bottom-7 left-1/2 transform -translate-x-1/2 w-[70%] h-[70%] px-4 py-2 rounded-lg text-center shadow-md bg-[#E8F2FE]/90">
          <div className="leading-3">
            <h1 className="text-md font-semibold text-[#0B3666]">{week}</h1>
            <p className="text-sm font-semibold text-[#0B3666]">{title}</p>
            <p className="text-xs text-gray-500 whitespace-pre-line">
              {description}
            </p>

            {/* Predict Button */}
            <button className="mt-1 px-2 py-1 text-[13px] bg-[linear-gradient(to_right,#905e26_0%,#f5ec9b_50%,#905e26_100%)] text-[#004060] rounded-md shadow">
              Predict Now!
            </button>
          </div>
        </div>
      </div>

      {/* Total Tickets Sold */}
      <div className="mt-6 text-center text-lg font-semibold text-[#0B3666]">
        Total sold – {totalSold} Tickets
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col gap-3 mt-6 text-white">
        <button
          onClick={handleOpen}
        className="w-full py-4 font-medium rounded-lg bg-yellow-400 hover:bg-yellow-500 cursor-pointer">
          Edit Ticket
        </button>
        <button
        
          onClick={openDeleteModal}
         className="w-full py-4 font-medium rounded-lg bg-red-500 hover:bg-red-600 cursor-pointer">
          Delete Ticket
        </button>
      </div>
      <EditTicketModal open={isModalOpen} onCancel={handleClose} id={id}  />
      <DeleteTicketModal open={isDeleteModalOpen} handleOpen={handleOpen}  onCancel={closeDeleteModal} id={id} />
    </div>
  );
};

export default TicketCard;
