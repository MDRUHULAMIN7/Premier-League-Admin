import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sideber";
import HeaderDashboard from "./HeaderDashboard";

const MainLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden relative">
      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 z-50 h-full w-[300px] bg-[#0B3666] transform transition-transform duration-300
          ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} 
          lg:translate-x-0`}
      >
        <Sidebar closeSidebar={() => setIsSidebarOpen(false)} />
      </div>

      {/* White translucent blur overlay */}
      {isSidebarOpen && (
        <div
          onClick={() => setIsSidebarOpen(false)}
          className="fixed inset-0 z-40  bg-opacity-30 backdrop-blur-md lg:hidden"
        ></div>
      )}

      {/* Right Content */}
      <div className="flex-1 flex flex-col lg:ml-[300px] h-screen">
        {/* Header */}
        <div className="sticky top-0 z-40">
          <HeaderDashboard
            toggleSidebar={() => setIsSidebarOpen((prev) => !prev)}
            isSidebarOpen={isSidebarOpen}
          />
        </div>

        {/* Scrollable content */}
        <div className="flex-1 overflow-y-auto px-4 sm:px-6 md:px-8 bg-[#E8F2FE]">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
