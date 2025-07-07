import { Outlet } from "react-router-dom";
import Sidebar from "./Sideber";
import HeaderDashboard from "./HeaderDashboard";

const MainLayout = () => {
    return (
        <div className="flex h-screen overflow-hidden">
            {/* Fixed Sidebar */}
            <div className="w-[300px] bg-[#0B3666] h-screen fixed left-0 top-0 z-50">
                <Sidebar />
            </div>

            {/* Right Content Wrapper */}
            <div className="flex-1 flex flex-col ml-[300px] h-screen">
                {/* Fixed Header */}
                <div className="sticky top-0 z-40  ">
                    <HeaderDashboard />
                </div>

                {/* Scrollable content area */}
                <div className="flex-1 overflow-y-auto px-8 ">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default MainLayout;
