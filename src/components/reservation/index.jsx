import {
  ReservationWrapper,
  ReservationLeft,
  ReservationRight,
  ReservationRightTop,
  ReservationRightCenter,
  ReservationRightBottom,
  ReservationRightCenterLeft,
  CardTitle,
  ReservationRightCenterRight,
  Form,
} from "./reservationStyle.js";

import ReservationLeftSide from "./reservationCom/reservationLeftSide.jsx";
import ReservationRCL from "./reservationCom/ReservationRCL.jsx";
import ReservationRCR from "./reservationCom/reservationRCR.jsx";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";

const Reservation = () => {
  const [val, setVal] = useState("");
  useEffect(() => {
    setVal(Math.floor(1000000000 + Math.random() * 9000000000));
  }, []);

  const {
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  const onError = (errors) => {
    console.log(errors);
  };

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
          <ReservationRightCenterLeft className="flex flex-column">
            <CardTitle>PERSONAL INFORMATION</CardTitle>
            <Form onSubmit={handleSubmit(onSubmit, onError)}>
              <ReservationRCL />
            </Form>
          </ReservationRightCenterLeft>
          <ReservationRightCenterRight className="flex flex-column">
            <CardTitle>RESERVATION INFORMATION</CardTitle>
            <Form onSubmit={handleSubmit(onSubmit, onError)}>
              <ReservationRCR />
            </Form>
          </ReservationRightCenterRight>

          <ReservationRightBottom>
            <h1>HUMAN VERIFICATION</h1>
            <h2>Type Below this code {val}</h2>
            <p>Enter the random code</p>
            <div className="flex gap-1">
              <input type="text" name="code1" />
              <input type="hidden" name="code" value={val} />
              <input
                type="submit"
                name="submit"
                value="Submit"
                className="btn"
              />
            </div>
          </ReservationRightBottom>
        </ReservationRightCenter>
      </ReservationRight>
    </ReservationWrapper>
  );
};

export default Reservation;
