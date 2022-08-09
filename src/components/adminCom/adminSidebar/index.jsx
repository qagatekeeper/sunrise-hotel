import "./adminSidebar.css";

const sidebarData = [
  {
    icon: <i className="uil uil-dashboard"></i>,
    title: "Status",
  },
  {
    icon: <i className="uil uil-desktop"></i>,
    title: "News letters",
  },
  {
    icon: <i className="uil uil-chart"></i>,
    title: "Room Booking",
  },
  {
    icon: <i className="uil uil-bill"></i>,
    title: "Payment",
  },
  {
    icon: <i className="uil uil-user-circle"></i>,
    title: "Profile",
  },
  {
    icon: <i className="uil uil-sign-out-alt"></i>,
    title: "Logout",
  },
];

const AdminSidebar = (props) => {
  const { activeTab, setActiveTab } = props;
  return (
    <>
      {sidebarData.map((item, index) => (
        <div
          className={`admin-sidebar-item ${
            activeTab === item.title ? "active" : ""
          }`}
          onClick={() => setActiveTab(`${item.title}`)}
          key={index}
        >
          <a href={`#${item.title}`}>
            {item.icon}
            {item.title}
          </a>
        </div>
      ))}
    </>
  );
};

export default AdminSidebar;
