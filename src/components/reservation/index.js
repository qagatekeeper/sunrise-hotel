import React from "react";
import { Link } from "react-router-dom";
import {
  ReservationWrapper,
  ReservationLeft,
  ReservationRight,
  ReservationNavigationToHome,
  ReservationRightTop,
  ReservationRightCenter,
  ReservationRightCenterLeft,
  ReservationRightCenterRight,
  CardTitle,
  Form,
  FormGroup,
} from "./reservationStyle.js";

import { Autocomplete, TextField } from "@mui/material";

const Reservation = () => {
  return (
    <ReservationWrapper className="flex">
      <ReservationLeft>
        <ReservationNavigationToHome>
          <Link to="/" className="flex absolute-center">
            <i className="uil uil-home"></i>
            <h3>HomePage</h3>
          </Link>
        </ReservationNavigationToHome>
      </ReservationLeft>
      <ReservationRight>
        <ReservationRightTop>
          <h1>RESERVATION</h1>
        </ReservationRightTop>
        <ReservationRightCenter className="flex">
          <ReservationRightCenterLeft className="flex flex-column">
            <CardTitle>PERSONAL INFORMATION</CardTitle>
            <Form action="">
              <FormGroup className="flex flex-column">
                <Autocomplete
                  required
                  disablePortal
                  id="combo-box-demo"
                  options={title}
                  sx={{ width: "100%" }}
                  renderInput={(params) => (
                    <TextField {...params} label="Title" />
                  )}
                />
              </FormGroup>
            </Form>
          </ReservationRightCenterLeft>
          <ReservationRightCenterRight className="flex flex-column">
            <CardTitle>PERSONAL INFORMATION</CardTitle>
          </ReservationRightCenterRight>
        </ReservationRightCenter>
      </ReservationRight>
    </ReservationWrapper>
  );
};

export default Reservation;

const title = ["Dr.", "Miss.", "Mr.", "Mrs.", "Prof.", "Rev.", "Rev. Fr."];
