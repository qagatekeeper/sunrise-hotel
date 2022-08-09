import React from "react";
import "./statusItem.css";

const StatusItem = ({ show, data }) => {
  return (
    <>
      <div
        className={` ${
          show === "panel1" ? "status-item-wrapper open" : "status-item-wrapper"
        }`}
      >
        <div className="status-item">
          <table className="status-table">
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Email</th>
                <th>Country</th>
                <th>Room</th>
                <th>Bedding</th>
                <th>Meal</th>
                <th>Check-In</th>
                <th>Check-Out</th>
                <th>Status</th>
                <th>More</th>
              </tr>
            </thead>
            <tbody>
              {data.map((data, index) => (
                <tr key={index}>
                  <td>{data.id}</td>
                  <td>{data.name}</td>
                  <td>{data.email}</td>
                  <td>{data.country}</td>
                  <td>{data.room}</td>
                  <td>{data.beddingType}</td>
                  <td>{data.meal}</td>
                  <td>{data.checkIn}</td>
                  <td>{data.checkOut}</td>
                  <td>{data.status}</td>
                  <td>
                    <a href="#1" className="btn">
                      Action
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default StatusItem;
