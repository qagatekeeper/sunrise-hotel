import React, { useState } from "react";
import "./adminStatus.css";
import AdminTitle from "../adminTitle";
import StatusItem from "./adminStatusItem";
import BookedRooms from "./adminBookedRooms";
import Followers from "./adminFollowers";

import {
  bookedRoomsData,
  newRoomBookingData,
  followers,
} from "../../../helpers";

const Status = () => {
  const [expanded, setExpanded] = useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(panel);
  };

  return (
    <>
      <AdminTitle title="Status" span="Room Booking" />
      <div className="status-wrapper flex flex-column gap-1">
        <div>
          <div
            className={`status-new-roomBooking-container ${
              expanded === "panel1" ? "borderRadiusChange" : ""
            }`}
          >
            <div className="status-new-roomBooking-title">
              <a href="#sa" onClick={handleChange("panel1")}>
                <button className="btn new-room-booking-btn">
                  New Room Bookings
                  <small>
                    {newRoomBookingData.length < 10
                      ? "0" + newRoomBookingData.length
                      : newRoomBookingData.length}
                  </small>
                </button>
              </a>
            </div>
          </div>
          {expanded === "panel1" && (
            <StatusItem show={expanded} data={newRoomBookingData} />
          )}
        </div>
        <div>
          <div
            className={`booked-room-container ${
              expanded === "panel2" ? "borderRadiusChange" : ""
            }`}
          >
            <div className="booked-room-title">
              <a href="#sa" onClick={handleChange("panel2")}>
                <button className="btn booked-room-btn">
                  Booked Rooms
                  <small>
                    {bookedRoomsData.length < 10
                      ? "0" + bookedRoomsData.length
                      : bookedRoomsData.length}
                  </small>
                </button>
              </a>
            </div>
          </div>
          {expanded === "panel2" && <BookedRooms data={bookedRoomsData} />}
        </div>
        <div>
          <div
            className={`follower-container ${
              expanded === "panel3" ? "borderRadiusChange" : ""
            }`}
          >
            <div className="follower-title">
              <a href="#sa" onClick={handleChange("panel3")}>
                <button className="btn follower-btn">
                  Followers
                  <small>
                    {followers.length < 10
                      ? "0" + followers.length
                      : followers.length}
                  </small>
                </button>
              </a>
            </div>
          </div>
          {expanded === "panel3" && (
            <Followers show={expanded} data={followers} />
          )}
        </div>
      </div>
    </>
  );
};

export default Status;
