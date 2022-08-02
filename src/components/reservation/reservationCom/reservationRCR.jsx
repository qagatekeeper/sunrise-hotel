import React from "react";

import {
  ReservationRightCenterRight,
  CardTitle,
  Form,
  FormGroup,
} from "../reservationStyle.js";

import {
  roomCategory,
  beddingType,
  noOfRooms,
  mealPlan,
} from "../../../helpers/data/reservationData.js";

import { SelectOptions } from "../../common/index.jsx";

const ReservationRCR = () => {
  return (
    <>
      <ReservationRightCenterRight className="flex flex-column">
        <CardTitle>RESERVATION INFORMATION</CardTitle>
        <Form>
          <FormGroup className="flex flex-column">
            <SelectOptions title="Type Of Room*:" data={roomCategory} />
          </FormGroup>
          <FormGroup className="flex flex-column">
            <SelectOptions title="Bedding Type:" data={beddingType} />
          </FormGroup>
          <FormGroup className="flex flex-column">
            <SelectOptions title="No.of Rooms*:" data={noOfRooms} />
          </FormGroup>
          <FormGroup className="flex flex-column">
            <SelectOptions title="Meal Plan*:" data={mealPlan} />
          </FormGroup>
          <FormGroup className="flex flex-column">
            <label>Check-In:</label>
            <input
              type="date"
              placeholder="dd/mm/yyyy"
              name="date"
              min="2022-08-02"
              reqired
            />
          </FormGroup>
          <FormGroup className="flex flex-column">
            <label>Check-Out:</label>
            <input
              type="date"
              placeholder="dd/mm/yyyy"
              name="date"
              min="2022-08-02"
              reqired
            />
          </FormGroup>
        </Form>
      </ReservationRightCenterRight>
    </>
  );
};

export default ReservationRCR;
