import { Link, useLocation, useNavigate } from "react-router-dom";
import { CiSettings } from "react-icons/ci";
import { PiNoteDuotone } from "react-icons/pi";
import {
  MdKeyboardArrowUp,
  MdLogout,
  MdOutlineKeyboardArrowDown,
} from "react-icons/md";
import { useState } from "react";
import Logo from "../Shared/Logo";
import DashbordSVG from "../../../public/DashbordSVG";
import PredictionSVG from "../../../public/PredictionsSVG";
import UserSVG from "../../../public/UserSVG";

const menuItems = [
  {
    label: "Dashboard",
    path: "/",
    renderIcon: (isActive) => (
      <DashbordSVG strokeColor={isActive ? "#0B3666" : "#FEFEFE"} />
    ),
  },
  {
    label: "Predictions",
    path: "/predictions",
    renderIcon: (isActive) => (
      <PredictionSVG strokeColor={isActive ? "#0B3666" : "#FEFEFE"} />
    ),
  },
  {
    label: "User Management",
    path: "/user-management",
    renderIcon: (isActive) => (
      <UserSVG strokeColor={isActive ? "#0B3666" : "#FEFEFE"} />
    ),
  },
];

const settings = [
  {
    label: <span className="text-[18px]">Setting</span>,
    icon: <CiSettings size={24} />,
    path: "",
    children: [
      {
        label: "App Support",
        path: "/setting",
        icon: <PiNoteDuotone size={22} />,
      },
    ],
  },
];

const Sidebar = ({ closeSidebar }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const pathname = location.pathname;
  const [isSettingOpen, setIsSettingOpen] = useState(false);

  const handleLogout = () => {
    navigate("/signin");
    closeSidebar?.();
  };

  return (
    <div className="h-full px-3 pt-6" style={{ fontFamily: "Poppins" }}>
      {/* Logo */}
      <div className="flex items-center justify-center pb-6 cursor-pointer">
        <Logo />
      </div>

      {/* Menu Items */}
      <div style={{ backgroundColor: "#0B3666", color: "#929292" }}>
        {menuItems.map((item) => {
          const isActive = pathname === item.path;
          return (
            <div
              key={item.path}
              className={
                isActive
                  ? "bg-[#FEFEFE] text-[#0B3666] font-semibold text-xl rounded-sm transition-transform"
                  : "text-[#FEFEFE] text-xl"
              }
            >
              <Link
                to={item.path}
                onClick={closeSidebar}
                className="flex items-center gap-4 px-4 py-3"
              >
                <span>{item.renderIcon(isActive)}</span>
                {item.label}
              </Link>
            </div>
          );
        })}

        {/* Settings Accordion */}
        <div
          onClick={() => setIsSettingOpen(!isSettingOpen)}
          className="flex items-center ml-2 my-2 text-xl text-[#FEFEFE] cursor-pointer"
        >
          <CiSettings size={26} className="mr-2" />
          <span>Setting</span>
          <span className="ml-auto pr-4">
            {isSettingOpen ? (
              <MdKeyboardArrowUp />
            ) : (
              <MdOutlineKeyboardArrowDown />
            )}
          </span>
        </div>

        <div className={isSettingOpen ? "block" : "hidden"}>
          {settings.map((setting) => (
            <div key={setting.label}>
              {setting.children.map((child) => {
                const isChildActive = pathname === child.path;
                return (
                  <div
                    key={child.path}
                    className={
                      isChildActive
                        ? "bg-[#FEFEFE] text-[#0B3666] font-semibold text-xl rounded-sm transition-transform"
                        : "text-[#FEFEFE] text-xl"
                    }
                  >
                    <Link
                      to={child.path}
                      onClick={closeSidebar}
                      className="flex items-center gap-4 px-4 py-3"
                    >
                      <span>{child.icon}</span>
                      {child.label}
                    </Link>
                  </div>
                );
              })}
            </div>
          ))}
        </div>

        {/* Logout */}
        <div
          className="flex items-center mt-20 gap-3 text-[#929292] text-[18px] py-2 rounded-xl cursor-pointer ml-6"
          onClick={handleLogout}
        >
          <MdLogout className="font-bold" size={23} />
          <span>Logout</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
