import sales from '/sales.svg';

const Card = () => {
    return (
        <div className="grid grid-cols-4 gap-5 pt-10">
            {/* user */}

            <div className="rounded-[2px] shadow-lg shadow-gray-500 w-full  flex flex-col items-center bg-linear-to-r from-[#DDB861] to-[#F8E45C]
                 py-7 px-2 text-[#0B3666]">



                <div className="font-medium text-[32px] ">Total User</div>

                <div className="flex text-[40px] font-bold items-center justify-between mt-4">
                    150


                </div>


            </div>

            {/*  */}

            <div className="rounded-[2px] shadow-lg shadow-gray-500 w-full  flex flex-col items-center bg-linear-to-r from-[#DDB861] to-[#F8E45C]
                 py-7 px-2 text-[#0B3666]">



                <div className="font-medium text-[32px] ">Total Sold Ticket</div>

                <div className="flex text-[40px] font-bold items-center justify-between mt-4">
                    150


                </div>


            </div>
            <div className="rounded-[2px] shadow-lg shadow-gray-500 w-full  flex flex-col items-center bg-linear-to-r from-[#DDB861] to-[#F8E45C]
                 py-7 px-2 text-[#0B3666]">



                <div className="font-medium text-[32px] ">Total Reveneu</div>

                <div className="flex text-[40px] font-bold items-center justify-between mt-4">
                    500 $


                </div>


            </div>
            <div className="rounded-[2px] shadow-lg shadow-gray-500 w-full  flex flex-col items-center bg-linear-to-r from-[#DDB861] to-[#F8E45C]
                 py-7 px-2 text-[#0B3666]">



                <div className="font-medium text-[32px] ">Total Winner</div>

                <div className="flex text-[40px] font-bold items-center justify-between mt-4">
                    05


                </div>


            </div>

        </div>
    );
};

export default Card;
