import React, { useState } from "react";
import "./adminMain.css";
import AdminSidebar from "../adminSidebar";
import Status from "../adminStatus";

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
      return "News letters";

    case "Room Booking":
      return "Room Booking";

    case "Payment":
      return "Payment";

    case "Profile":
      return "Profile";

    case "Logout":
      return "Logout";

    default:
      return "status";
  }
};

export default AdminMain;
