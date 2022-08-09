import React, { useState } from "react";
import "./adminMain.css";
import AdminSidebar from "../adminSidebar";
import {
  Status,
  NewsLetters,
  RoomBooking,
  Payment,
  Profile,
  Logout,
} from "../index.jsx";

const AdminMain = () => {
  const [activeTab, setActiveTab] = useState("Status");

  return (
    <div className="admin-main flex">
      <div className="admin-sidebar">
        <AdminSidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>
      <div className="admin-Rightbar">{getCorrectScreen(activeTab)}</div>
    </div>
  );
};

const getCorrectScreen = (tab) => {
  switch (tab) {
    case "Status":
      return <Status />;

    case "News letters":
      return <NewsLetters />;

    case "Room Booking":
      return <RoomBooking />;

    case "Payment":
      return <Payment />;

    case "Profile":
      return <Profile />;

    case "Logout":
      return <Logout />;

    default:
      return <Status />;
  }
};

export default AdminMain;
