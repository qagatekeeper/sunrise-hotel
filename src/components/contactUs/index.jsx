import React from "react";
import IconGrp from "../common/iconGroup";
import "./contactUs.css";

const ContactUs = () => {
  return (
    <div className="contactUs-wrapper" id="contact-us">
      <div className="container">
        <div className="contact-us flex gap-1">
          <div className="contactUs-left">
            <h3>Contact Us</h3>
            <p>Sign Up For Our News Letters</p>
            <form action="">
              <div className="form-group flex flex-column">
                <label>Full Name:</label>
                <input
                  type="text"
                  placeholder="Full name"
                  name="fullName"
                  reqired
                />
              </div>
              <div className="form-group flex flex-column">
                <label>Phone Number:</label>
                <input
                  type="text"
                  placeholder="phone number"
                  name="phoneNumber"
                  reqired
                />
              </div>
              <div className="form-group flex flex-column">
                <label>Email Address:</label>
                <input type="email" placeholder="email" name="email" reqired />
              </div>
              <div className="form-btn">
                <input
                  type="submit"
                  name="submit"
                  value="Send now"
                  className="btn"
                />
              </div>
            </form>
          </div>
          <div className="contactUs-right">
            <h3>Contact with Us</h3>
            <h2>
              <span>Phone : </span>
              +94 (65)222-44-55
            </h2>
            <h2>
              <span>Email : </span>
              INFO@SUNRISE.COM
            </h2>
            <h2>
              <span>Address : </span>
              New Kalmunai Road, Batticaloa, Sri Lanka
            </h2>
            <IconGrp />
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3074.7905052320443!2d-77.84987248482734!3d39.586871613613056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c9f6a80ccf0661%3A0x7210426c67abc40!2sVirginia+Welcome+Center%2FSafety+Rest+Area!5e0!3m2!1sen!2sin!4v1485760915662"></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
