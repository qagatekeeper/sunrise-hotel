import React from "react";
import "./adminStatus.css";
import AdminTitle from "../adminTitle";
import StatusItem from "./adminStatusItem";

const Status = () => {
  return (
    <div>
      <AdminTitle title="Status" span="Room Booking" />
      <div className="status-wrapper">
        <div className="status-new-roomBooking">
          <div className="status-new-roomBooking-title">
            <a href="#sa">
              <button className="btn">
                New Room Bookings
                <small>01</small>
              </button>
            </a>
          </div>
        </div>
        <StatusItem />
      </div>
    </div>
  );
};

export default Status;
