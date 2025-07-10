import { Layout } from 'antd';
import { Link, useLocation } from 'react-router-dom';
import { HiArrowSmallLeft } from 'react-icons/hi2';
import PageTitle from '../Shared/PageTitle';
import { RxHamburgerMenu } from "react-icons/rx"; // hamburger icon
import { MdClose } from "react-icons/md"; // close (X) icon

const { Header } = Layout;

const path = [
  { path: '/', name: 'Analytics' },
  { path: '/stafflist', name: 'Staff List' },
  { path: '/faq', name: 'FAQ' },
  // ... other routes
];

const HeaderDashboard = ({ toggleSidebar, isSidebarOpen }) => {
  const location = useLocation();
  const currentPath = location.pathname;
  const currentPage = path.find((item) => item.path === currentPath);

  return (
    <Header
      style={{
        width: '100%',
        height: '80px',
        overflow: 'hidden',
        background: '#0B3666',
      }}
    >
      <div className="flex justify-between items-center px-4 pt-2">
        {/* Left side: page title */}
        <div className="flex items-center gap-2">
          {currentPage ? (
            currentPage.path === '/employee-details' ||
            currentPage.path === '/customer-details' ||
            currentPage.path === '/all-details' ? (
              <div className="flex items-center gap-2">
                <HiArrowSmallLeft size={25} />
                <PageTitle>{currentPage.name}</PageTitle>
              </div>
            ) : (
              <PageTitle className="text-[#fefefe] uppercase">{currentPage.name}</PageTitle>
            )
          ) : null}
        </div>

        {/* Right side: notifications, profile, and toggle button */}
     <div className="flex items-center gap-4 lg:gap-6">
  {/* Notification Icon */}
  <Link to="/notifications" className="relative flex items-center justify-center">
    <img src="/notification.png" className="h-7 w-7" alt="Notification" />
    <div className="absolute -top-1.5 -right-1.5 bg-red-600 text-white text-xs px-1 rounded-full leading-none">
      1
    </div>
  </Link>

  {/* Admin Profile */}
  <Link to="/admin-profile" className="flex items-center gap-2">
    <img
      src="/admin.jpg"
      className="rounded-full border-2 border-[#ff0000] object-cover"
      style={{ width: '40px', height: '40px' }}
      alt="Admin"
    />
    <h2 className="text-[#fefefe] font-semibold text-base mt-[2px]">Admin baigy</h2>
  </Link>

  {/* Toggle button for mobile */}
  <button
    onClick={toggleSidebar}
    className="lg:hidden  text-3xl focus:outline-none cursor-pointer"
    aria-label="Toggle sidebar"
    style={{ color: '#fefefe'   }}
  >
    {isSidebarOpen ? <MdClose size={28} /> : <RxHamburgerMenu size={28} />}
  </button>
</div>

      </div>
    </Header>
  );
};

export default HeaderDashboard;
