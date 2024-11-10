import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import { FaEarthAsia } from "react-icons/fa6";
import "react-phone-input-2/lib/style.css";
import {
  FaUser,
  FaLock,
  FaPhoneAlt,
  FaHome,
  FaFlag,
  FaMapMarkerAlt,
  FaCity,
  FaCalendarAlt,
  FaVenusMars,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import "./SignupForm.css";

const DateOfBirthField = () => {
  const [dob, setDob] = useState("");

  const handleDateChange = (e) => {
    setDob(e.target.value);
  };

  return (
    <div className="form-group">
      {dob ? (
        <input type="date" value={dob} onChange={handleDateChange} required />
      ) : (
        <input
          type="text"
          placeholder="Enter Date of Birth"
          onFocus={(e) => (e.target.type = "date")}
          onBlur={(e) => {
            if (!dob) e.target.type = "text";
          }}
          onChange={handleDateChange}
          required
        />
      )}
      <FaCalendarAlt className="username-icon" />
    </div>
  );
};

const GenderSelectField = () => {
  const [gender, setGender] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const handleGenderChange = (e) => {
    setGender(e.target.value);
    setIsFocused(false); // Hide dropdown after selection
  };

  return (
    <div className="form-group">
      {isFocused || gender ? (
        <select
          value={gender}
          onChange={handleGenderChange}
          required
          onBlur={() => setIsFocused(false)}
          autoFocus
        >
          <option value="" disabled hidden>
            Select Gender
          </option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      ) : (
        <input
          type="text"
          placeholder="Select Gender"
          onFocus={() => setIsFocused(true)}
          readOnly
          required
        />
      )}
      <FaVenusMars className="username-icon" />
    </div>
  );
};

const SignupForm = () => {
  const [activeStep, setActiveStep] = useState(1);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isValid, setIsValid] = useState(true);

  const handlePhoneNumberChange = (value) => {
    setPhoneNumber(value);
    setIsValid(validatePhoneNumber(value));
  };

  const validatePhoneNumber = (phoneNumber) => {
    const phoneNumberPattern = /^\d{12}$/;
    return phoneNumberPattern.test(phoneNumber.replace(/\D/g, ""));
  };

  const renderFormContent = () => {
    switch (activeStep) {
      case 1:
        return (
          <div>
            <div className="input-pair">
              <div className="form-group">
                <input type="text" placeholder="First Name" required />
                <FaUser className="username-icon" />
              </div>
              <div className="form-group">
                <input type="text" placeholder="Last Name" required />
                <FaUser className="username-icon" />
              </div>
            </div>

            <div className="input-pair">
              <DateOfBirthField />
              <GenderSelectField />
            </div>

            <div className="form-group">
              <input type="email" placeholder="Email Address" required />
              <MdEmail className="username-icon" />
            </div>
            <div className="form-group phone-input">
              <PhoneInput
                country={"in"}
                value={phoneNumber}
                onChange={handlePhoneNumberChange}
                inputProps={{
                  required: true,
                }}
              />
              {!isValid && (
                <p className="error-message">
                  Please enter a valid phone number!
                </p>
              )}
            </div>
          </div>
        );
      case 2:
        return (
          <div>
            <div className="form-group">
              <input type="text" placeholder="Street Address" required />
              <FaHome className="username-icon" />
            </div>
            <div className="input-pair">
              <div className="form-group">
                <input type="text" placeholder="City" required />
                <FaCity className="username-icon" />
              </div>
              <div className="form-group">
                <input type="text" placeholder="State" required />
                <FaFlag className="username-icon" />
              </div>
            </div>
            <div className="input-pair">
              <div className="form-group">
                <input type="text" placeholder="Postal code" required />
                <FaMapMarkerAlt className="username-icon" />
              </div>
              <div className="form-group">
                <input type="text" placeholder="Country" required />
                <FaEarthAsia className="username-icon" />
              </div>
            </div>
          </div>
        );
      case 3:
        return (
          <div>
            <div className="form-group">
              <input type="password" placeholder="Password" required />
              <FaLock className="username-icon" />
            </div>
            <div className="form-group">
              <input type="password" placeholder="Confirm Password" required />
              <FaLock className="username-icon" />
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted");
  };

  return (
    <div className="wrapper-signup">
      <h1 className="form-title">Sign Up</h1>
      <div className="breadcrumb-nav">
        <div
          className={`breadcrumb ${activeStep === 1 ? "active" : ""}`}
          onClick={() => setActiveStep(1)}
        >
          Base Information
        </div>
        <div
          className={`breadcrumb ${activeStep === 2 ? "active" : ""}`}
          onClick={() => setActiveStep(2)}
        >
          Address Details
        </div>
        <div
          className={`breadcrumb ${activeStep === 3 ? "active" : ""}`}
          onClick={() => setActiveStep(3)}
        >
          Security
        </div>
      </div>
      <form className="registration-form" onSubmit={handleSubmit}>
        {renderFormContent()}
        <button type="submit" className="submit-btn">
          Save & Continue
        </button>
      </form>
    </div>
  );
};

export default SignupForm;
