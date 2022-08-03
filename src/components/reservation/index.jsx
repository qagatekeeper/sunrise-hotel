import {
  ReservationWrapper,
  ReservationLeft,
  ReservationRight,
  ReservationRightTop,
  ReservationRightCenter,
  ReservationRightBottom,
  FormBtn,
  Form,
} from "./reservationStyle.js";

import ReservationLeftSide from "./reservationCom/reservationLeftSide.jsx";
import ReservationRCL from "./reservationCom/ReservationRCL.jsx";
import ReservationRCR from "./reservationCom/reservationRCR.jsx";

const Reservation = () => {
  return (
    <ReservationWrapper className="flex">
      <ReservationLeft>
        <ReservationLeftSide />
      </ReservationLeft>
      <ReservationRight>
        <ReservationRightTop>
          <h1>RESERVATION</h1>
        </ReservationRightTop>
        <ReservationRightCenter
          className="flex"
          style={{ marginRight: "100px", marginBottom: "1.5rem" }}
        >
          <ReservationRCL />
          <ReservationRCR />
        </ReservationRightCenter>
        <ReservationRightBottom>
          <h1>HUMAN VERIFICATION</h1>
          <h2>Type Below this code 35470912</h2>
          <p>Enter the random code</p>
          <div className="flex gap-1">
            <input type="text" />
            <FormBtn>
              <input
                type="submit"
                name="submit"
                value="Submit"
                className="btn"
              />
            </FormBtn>
          </div>
        </ReservationRightBottom>
      </ReservationRight>
    </ReservationWrapper>
  );
};

export default Reservation;
