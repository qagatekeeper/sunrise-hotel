import { ReservationRightCenterLeft } from "../reservationStyle.js";

import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";

import { CardTitle, Form, FormGroup } from "../reservationStyle.js";

import { title, countries } from "../../../helpers/data/reservationData.js";
import { SelectOptions } from "../../common/index.jsx";

const ReservationRCL = () => {
  return (
    <>
      <ReservationRightCenterLeft className="flex flex-column">
        <CardTitle>PERSONAL INFORMATION</CardTitle>
        <Form action="">
          <FormGroup className="flex flex-column">
            <SelectOptions title="Title*:" data={title} />
          </FormGroup>
          <FormGroup className="flex flex-column">
            <label>First Name*:</label>
            <input
              type="text"
              placeholder="First name"
              name="FirstName"
              reqired
            />
          </FormGroup>
          <FormGroup className="flex flex-column">
            <label>Last Name*:</label>
            <input
              type="text"
              placeholder="Last name"
              name="LastName"
              reqired
            />
          </FormGroup>
          <FormGroup className="flex flex-column">
            <label>Email*:</label>
            <input type="email" placeholder="email" name="email" reqired />
          </FormGroup>
          <FormGroup className="flex ai-center">
            <label>Nationality*:</label>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
            >
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="India"
                checked
              />
              <FormControlLabel
                value="male"
                control={<Radio />}
                label="Non India"
              />
            </RadioGroup>
          </FormGroup>
          <FormGroup className="flex flex-column">
            <SelectOptions title="Passport Country*:" data={countries} />
          </FormGroup>
          <FormGroup className="flex flex-column">
            <label>Phone Number:</label>
            <input
              type="phone"
              placeholder="Phone Number"
              name="PhoneNumber"
              reqired
            />
          </FormGroup>
        </Form>
      </ReservationRightCenterLeft>
    </>
  );
};

export default ReservationRCL;
