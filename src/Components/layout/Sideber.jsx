import { Link, useLocation, useNavigate } from 'react-router-dom';
import { CiSettings } from 'react-icons/ci';
import { PiNoteDuotone } from 'react-icons/pi';

import { MdKeyboardArrowUp, MdLogout, MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { useState } from 'react';
import Logo from '../Shared/Logo';
import { RxDashboard } from 'react-icons/rx';



const menuItems = [
    { label: 'Dashboard', path: '/', icon: <RxDashboard size={22} /> },

    ,



];

const settings = [
    {
        label: <span className="text-[18px]">Setting</span>,
        icon: <CiSettings size={24} />,
        path: '',
        children: [
            { label: 'App Support', path: '/setting', icon: <PiNoteDuotone size={22} /> },
            ,
        ],
    },
];

const Sidebar = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const pathname = location.pathname;
    const [isSettingOpen, setIsSettingOpen] = useState(false);

    const handleLogout = () => {
        navigate('/signin');
    };
    return (
        <div className="h-full px-3" style={{ backgroundColor: '', fontFamily: 'Poppins' }}>
            <div className="flex items-center justify-center pt-10 cursor-pointer">
                <Logo></Logo>
            </div>

            <div style={{ backgroundColor: '#0B3666', color: '#929292' }} className="mt-10  ">
                {menuItems.map((item) => {
                    return (
                        <div
                            key={item.path}
                            className={
                                pathname === item.path
                                    ? 'bg-primary rounded-sm w-[100%] text-nowrap text-xl font-semibold  text-[#0B3666] bg-[#FEFEFE] transition-transform'
                                    : 'text-xl text-[#FEFEFE]'
                            }
                        >
                            <Link className={`flex items-center gap-4 font-semibold text-xl p-4 py-3`} to={item.path}>
                                <span>{item.icon}</span>
                                {item.label}
                            </Link>
                        </div>
                    );
                })}

                <div onClick={() => setIsSettingOpen(!isSettingOpen)} className="cursor-pointer">
                    <div className="flex items-center ml-2 my-2 text-xl ">
                        <div className="flex gap-3 text-[#FEFEFE]">
                            <span>
                                <CiSettings size={26} />
                            </span>
                            <span> Setting</span>
                        </div>
                        <div className="ml-28">
                            {isSettingOpen ? <MdKeyboardArrowUp /> : <MdOutlineKeyboardArrowDown />}
                        </div>
                    </div>
                </div>

                {/* dublicate */}
                <div className={isSettingOpen ? 'block' : 'hidden'}>
                    {settings.map((setting) => (
                        <div key={setting.path}>
                            {setting.children.map((child) => (
                                <div
                                    key={`${setting.path}-${child.path}`}
                                    className={
                                        pathname === child.path
                                            ? 'bg-primary rounded-sm w-[100%] text-nowrap text-xl font-semibold text-[#0B3666] bg-[#FEFEFE] transition-transform'
                                            : 'text-xl text-[#FEFEFE]'
                                    }
                                >
                                    <Link to={child.path} className="flex items-center gap-4 text-xl font-semibold p-4  py-3">
                                        <span>{child.icon}</span>
                                        {child.label}
                                    </Link>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>

                <div
                    className=" flex items-center mt-20 gap-3 text-[#929292]  text-[18px]  py-2 rounded-xl cursor-pointer ml-6"
                    onClick={handleLogout}
                >
                    <span>
                        <MdLogout className="font-bold" size={23} />
                    </span>
                    <span>Logout</span>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
