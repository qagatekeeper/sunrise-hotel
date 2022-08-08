import React from "react";
import "./statusItem.css";

const StatusItem = () => {
  return (
    <>
      <div className="status-item-wrapper">
        <div className="status-item">
          <table>
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
            <tr>
              <td>1</td>
              <td>Rakesh</td>
              <td>Rkathiriya@gmail.com</td>
              <td>India</td>
              <td>Superior Room</td>
              <td>Single</td>
              <td>Room only</td>
              <td>2022-07-09</td>
              <td>2022-08-03</td>
              <td>Not Conform</td>
              <td>
                <button className="btn">Action</button>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </>
  );
};

export default StatusItem;
