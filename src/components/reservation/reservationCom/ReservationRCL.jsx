import {
  CardTitle,
  Form,
  FormGroup,
  RadioBtn,
  ReservationRightCenterLeft,
} from "../reservationStyle.js";

import { title, countries } from "../../../helpers/data/reservationData.js";
import { SelectOptions } from "../../common/index.jsx";
import { useState } from "react";

const ReservationRCL = () => {
  const intialValues = {
    title: "",
    firstName: "",
    lastName: "",
    email: "",
    nationality: "",
    countries: "",
    phoneNumber: "",
  };
  const [formValues, setFormValues] = useState(intialValues);

  const handleChange = (event) => {
    setFormValues({ ...formValues, [event.target.name]: event.target.value });
    console.log(formValues);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // setFormErrors(validate(formValues));
    // setIsSubmit(true);
  };
  return (
    <>
      <ReservationRightCenterLeft className="flex flex-column">
        <CardTitle>PERSONAL INFORMATION</CardTitle>
        <Form onSubmit={handleSubmit}>
          <FormGroup className="flex flex-column">
            <SelectOptions title="Title*:" data={title} name="title" />
          </FormGroup>
          <FormGroup className="flex flex-column">
            <label>First Name*:</label>
            <input
              type="text"
              placeholder="First name"
              name="firstName"
              value={formValues.firstName}
              onChange={handleChange}
              reqired
            />
          </FormGroup>
          <FormGroup className="flex flex-column">
            <label>Last Name*:</label>
            <input
              type="text"
              placeholder="Last name"
              name="lastName"
              value={formValues.lastName}
              onChange={handleChange}
              reqired
            />
          </FormGroup>
          <FormGroup className="flex flex-column">
            <label>Email*:</label>
            <input
              type="email"
              placeholder="email"
              name="email"
              value={formValues.email}
              onChange={handleChange}
              reqired
            />
          </FormGroup>
          <FormGroup className="flex ai-center">
            <label>Nationality*:</label>
            <RadioBtn className="flex absolute-center">
              <input
                type="radio"
                name="nationality"
                value="india"
                onChange={handleChange}
              />
              <span>India</span>
            </RadioBtn>
            <RadioBtn className="flex absolute-center">
              <input
                type="radio"
                name="nationality"
                value="non-india"
                onChange={handleChange}
              />
              <span>Non-India</span>
            </RadioBtn>
          </FormGroup>
          <FormGroup className="flex flex-column">
            <SelectOptions
              title="Passport Country*:"
              data={countries}
              name="countries"
            />
          </FormGroup>
          <FormGroup className="flex flex-column">
            <label>Phone Number:</label>
            <input
              type="phone"
              placeholder="Phone Number"
              name="phoneNumber"
              value={formValues.phoneNumber}
              onChange={handleChange}
              reqired
            />
          </FormGroup>
        </Form>
      </ReservationRightCenterLeft>
    </>
  );
};

export default ReservationRCL;
