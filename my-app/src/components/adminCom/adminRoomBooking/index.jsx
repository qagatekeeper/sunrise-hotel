import AdminTitle from "../adminTitle";
import "./roomBooking.css";
import { roomBookingData, rightsideData } from "../../../helpers";

const RoomBooking = () => {
  return (
    <>
      <AdminTitle title="Room Booking" span="2022/08/09" />
      <div className="roomBooking-wrapper flex gap-2">
        <div className="roomBooking-left">
          <div className="roomBooking-title">Booking Conformation</div>
          <div className="roomBooking-table-container">
            <table className="roomBooking-table">
              <thead>
                <tr>
                  <th>DESCRIPTION</th>
                  <th>INFORMATION</th>
                </tr>
              </thead>
              <tbody>
                {roomBookingData.map((data, index) => (
                  <tr key={index}>
                    <td style={{ fontWeight: "bold" }}>{data.description}</td>
                    <td>{data.information}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="roomBooking-conformation-container flex flex-column gap-1">
            <small>Select the Conformation</small>
            <select name="Room-Booking" defaultValue>
              <option value="" selected>
                --Select Conformation--
              </option>
              <option value="conform">Conform</option>
            </select>
            <button className="btn success-btn">Conform</button>
          </div>
        </div>
        <div className="roomBooking-right">
          <div className="roomBooking-right-header">available room details</div>
          <div className="roomBooking-right-table">
            <table className="roomBooking-right-table">
              <tbody>
                {rightsideData.map((data, index) => (
                  <tr key={index} style={{ paddingTop: "100px" }}>
                    <td style={{ fontWeight: "bold" }}>{data.roomName}</td>
                    <td>
                      <button className={`btn btn-number ${data.className}`}>
                        {data.number}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default RoomBooking;
