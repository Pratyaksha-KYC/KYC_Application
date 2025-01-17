import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import "./ForgotPasswordForm.css";
import { MdEmail } from "react-icons/md";
import { MdOutlinePhonelinkLock } from "react-icons/md";
import { FaLock } from "react-icons/fa";
import { BiMessageDetail } from "react-icons/bi";
import ConfusedImage from "../../../Assets/confused.png"; // Adjust path as needed

const ForgotPasswordForm = () => {
  const [activeStep, setActiveStep] = useState(1);
  const [contact, setContact] = useState("");
  const [isPhone, setIsPhone] = useState(false);
  const [isValid, setIsValid] = useState(true);

  const handleContactChange = (value) => {
    const isNumeric = /^\d+$/.test(value);
    setIsPhone(isNumeric);
    setContact(value);

    if (isNumeric) {
      setIsValid(validatePhoneNumber(value));
    } else {
      setIsValid(true);
    }

    if (value === "") {
      setIsPhone(false);
    }
  };

  const validatePhoneNumber = (phoneNumber) => {
    const phoneNumberPattern = /^\d{12}$/;
    return phoneNumberPattern.test(phoneNumber);
  };

  const renderFormContent = () => {
    switch (activeStep) {
      case 1:
        return (
          <div>
            <div className="form-group">
              <div className="form-group phone-input">
                {isPhone ? (
                  <PhoneInput
                    country={"in"}
                    value={contact}
                    onChange={(value) => handleContactChange(value)}
                    inputProps={{
                      required: true,
                    }}
                  />
                ) : (
                  <div className="input-wrapper">
                    <input
                      type="text"
                      value={contact}
                      placeholder="Enter Email or Phone Number"
                      onChange={(e) => handleContactChange(e.target.value)}
                      required
                    />
                    {contact === "" ? (
                      <BiMessageDetail className="username-icon" />
                    ) : (
                      <MdEmail className="username-icon" />
                    )}
                  </div>
                )}
                {!isValid && isPhone && (
                  <p className="error-message">
                    Please enter a valid 10-digit phone number!
                  </p>
                )}
              </div>
            </div>
          </div>
        );
      case 2:
        return (
          <div>
            <div className="form-group">
              <input
                type="text"
                placeholder="OTP"
                required
                onChange={(e) => {
                  const value = e.target.value;
                  if (/^\d*$/.test(value)) {
                    e.target.value = value;
                  }
                }}
              />
              <MdOutlinePhonelinkLock className="username-icon" />
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
    console.log("Form submitted");
  };

  const getButtonText = () => {
    if (activeStep === 1) return "Send OTP";
    if (activeStep === 2) return "Submit OTP";
    return "Save & Continue";
  };

  return (
    <div className="wrapper-signup">
      <h1 className="form-title">Forgot Password</h1>
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
          OTP
        </div>
        <div
          className={`breadcrumb ${activeStep === 3 ? "active" : ""}`}
          onClick={() => setActiveStep(3)}
        >
          Security
        </div>
      </div>

      {/* Conditionally render image based on activeStep */}
      {activeStep !== 3 && (
        <div className="image-container">
          <img src={ConfusedImage} alt="Confused" className="confused-image" />
        </div>
      )}

      <form className="registration-form" onSubmit={handleSubmit}>
        {renderFormContent()}
        <button type="submit" className="submit-btn">
          {getButtonText()}
        </button>
      </form>
    </div>
  );
};

export default ForgotPasswordForm;
