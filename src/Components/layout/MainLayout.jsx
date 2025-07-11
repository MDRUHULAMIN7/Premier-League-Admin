import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sideber";
import HeaderDashboard from "./HeaderDashboard";

const MainLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen overflow-hidden relative">
      {/* Header  */}
      <div className="fixed top-0 left-0 w-full z-50">
        <HeaderDashboard
          toggleSidebar={() => setIsSidebarOpen((prev) => !prev)}
          isSidebarOpen={isSidebarOpen}
        />
      </div>

      {/* Sidebar - Starts After Header */}
      <div
        className={`fixed top-[80px] left-0 z-40 h-[calc(100vh-80px)] w-[300px] bg-[#0B3666] transform transition-transform duration-300
          ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} 
          lg:translate-x-0`}
      >
        <Sidebar closeSidebar={() => setIsSidebarOpen(false)} />
      </div>

      {/* Overlay for mobile */}
      {isSidebarOpen && (
        <div
          onClick={() => setIsSidebarOpen(false)}
          className="fixed inset-0 z-30  bg-opacity-30 backdrop-blur-md lg:hidden"
        ></div>
      )}

      {/* Main Content */}
      <div className="flex-1 flex flex-col w-full lg:ml-[300px] pt-[80px]">
        <div className="flex-1 overflow-y-auto overflow-x-hidden px-4 sm:px-6 md:px-8 bg-[#E8F2FE]">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
