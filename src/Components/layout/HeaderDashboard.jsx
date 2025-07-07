import { Layout } from 'antd';
import { IoIosNotificationsOutline } from 'react-icons/io';
import { Link, useLocation } from 'react-router-dom';

import { HiArrowSmallLeft } from 'react-icons/hi2';
import PageTitle from '../Shared/PageTitle';


const { Header } = Layout;

const path = [
    { path: '/', name: 'Analytics' },
    { path: '/stafflist', name: 'Staff List' },
    { path: '/faq', name: 'FAQ' },
    { path: '/clients-details', name: 'Clients Details' },
    { path: '/quote-update', name: 'Quote Update' },
    { path: '/quote-history', name: 'Quote History' },
    { path: '/notifications', name: 'Notifications' },
    { path: '/profile', name: 'Profile' },
    { path: '/edit-profile', name: 'Edit Profile' },
    { path: '/change-password', name: 'Change Password' },
    { path: '/raw-material', name: 'Raw Material' },
    { path: '/standard-recipes', name: 'Standard Recipes' },
    { path: '/about', name: 'About Westfert' },
    { path: '/terms-condition', name: 'Terms & Conditions' },
    { path: '/notifications', name: 'Notifications' },
    { path: '/faq', name: 'Faq' },
    { path: '/news', name: 'News' },
];

const HeaderDashboard = () => {
    const location = useLocation();
    const currentPath = location.pathname;

    const currentPage = path.find((item) => item.path === currentPath);
    return (
        <Header
            className=" "
            style={{
                width: '100%',
                height: '80px',
                overflow: 'hidden',
                background: '#0B3666',
            }}
        >
            <div className="flex    justify-between items-center">
                <div>
                    {currentPage ? (
                        currentPage.path === '/employee-details' ||
                            currentPage.path === '/customer-details' ||
                            currentPage.path === '/all-details' ? (
                            <div className="flex items-center gap-2">
                                <HiArrowSmallLeft className="" size={25} /> <PageTitle>{currentPage.name}</PageTitle>
                            </div>
                        ) : (
                            <PageTitle className="text-[#fefefe] uppercase ">{currentPage.name}</PageTitle>
                        )
                    ) : (
                        ''
                    )}
                </div>
                <div className="flex items-center justify-end gap-5 h-full ">
                    <div>

                        <Link to={'/notifications'}>
                            <div className="size-10 rounded-full   flex items-center justify-center  ">
                                <button className="py-4 px-1 relative border-2 border-transparent rounded-full  focus:outline-none focus:text-[fefefe] transition duration-150 ease-in-out">
                                    <span className="absolute inset-0 -top-4  -mr-4">
                                        <div className="inline-flex items-center px-1 py-0.3  text-[11px] font-semibold leading-4 rounded-full   text-[#fefefe]">
                                            1
                                        </div>
                                    </span>

                                    < IoIosNotificationsOutline className='text-[#fefefe]' size={28} />
                                </button>
                            </div>
                        </Link>
                    </div>
                    <div>
                        {/* profile */}

                        <Link
                            to={'/admin-profile'}
                            className='h- cursor-pointer flex items-center gap-2 '

                        ><img
                                src="/admin.jpg"
                                className="rounded-full border-2 border-[#ff0000] object-cover"
                                style={{ width: '40px', height: '40px' }}
                                alt="Admin"
                            />

                            <h2
                                className="text-[#fefefe] font-semibold pt-3"
                                style={{
                                    fontSize: '20px',
                                }}
                            >
                                Admin baigy
                            </h2>
                        </Link>
                    </div>
                </div>
            </div>
        </Header>
    );
};

export default HeaderDashboard;
