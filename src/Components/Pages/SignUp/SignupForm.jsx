import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import {
  FaUser,
  FaLock,
  FaPhoneAlt,
  FaHome,
  FaMapMarkerAlt,
  FaCity,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import "./SignupForm.css";

const SignupForm = () => {
  const [activeStep, setActiveStep] = useState(1);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [phoneError, setPhoneError] = useState("");

  const handlePhoneNumberChange = (value) => {
    setPhoneNumber(value);
    validatePhoneNumber(value);
  };

  const validatePhoneNumber = (value) => {
    const phoneNumberDigits = value.replace(/\D/g, ""); // Remove non-digit characters
    const localNumber = phoneNumberDigits.slice(-10); // Extract last 10 digits

    if (localNumber.length === 10) {
      setPhoneError("");
      return true;
    } else {
      setPhoneError("Please enter a valid 10-digit phone number");
      return false;
    }
  };

  const handlePhoneChange = (value) => {
    setPhoneNumber(value);
    validatePhoneNumber(value);
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
            <div className="form-group">
              <input type="email" placeholder="Email Address" required />
              <MdEmail className="username-icon" />
            </div>
            <div className="form-group phone-input">
              <PhoneInput
                country={"us"}
                value={phoneNumber}
                onChange={handlePhoneNumberChange}
              />
              <FaPhoneAlt className="username-icon" />
              <div className="error-message" id="phoneError">
                {phoneError}
              </div>{" "}
              {/* Error message element */}
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
                <input type="text" placeholder="Postal Code" required />
                <FaMapMarkerAlt className="username-icon" />
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
          Contact Details
        </div>
        <div
          className={`breadcrumb ${activeStep === 3 ? "active" : ""}`}
          onClick={() => setActiveStep(3)}
        >
          Security
        </div>
      </div>
      <form className="registration-form">
        {renderFormContent()}
        <button type="submit" className="submit-btn">
          Save & Continue
        </button>
      </form>
    </div>
  );
};

export default SignupForm;
