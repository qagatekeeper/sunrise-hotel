import "./adminSidebar.css";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../../redux/actions/userActions.js";

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
];

const AdminSidebar = (props) => {
  const { activeTab, setActiveTab } = props;
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const logoutHandler = () => {
    dispatch(logout());
  };

  useEffect(() => {}, [userInfo]);
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
          <div>
            {item.icon}
            {item.title}
          </div>
        </div>
      ))}
      <div className="admin-sidebar-item" onClick={logoutHandler}>
        <div>
          <i className="uil uil-sign-out-alt"></i>
          Logout
        </div>
      </div>
    </>
  );
};

export default AdminSidebar;
