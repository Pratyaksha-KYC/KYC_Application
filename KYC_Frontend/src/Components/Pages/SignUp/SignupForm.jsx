import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import { FaEarthAsia } from "react-icons/fa6";
import "react-phone-input-2/lib/style.css";
import { MdEmail, MdOutlinePhonelinkLock } from "react-icons/md";
import {
  FaUser,
  FaLock,
  FaHome,
  FaFlag,
  FaMapMarkerAlt,
  FaCity,
  FaCalendarAlt,
  FaVenusMars,
} from "react-icons/fa";
import "./SignupForm.css";
import axios from "axios";

const DateOfBirthField = ({ formData, setFormData }) => {
  const handleDateChange = (e) => {
    setFormData({ ...formData, dob: e.target.value });
  };

  return (
    <div className="form-group">
      <input
        type="date"
        value={formData.dob || ""}
        onChange={handleDateChange}
        required
      />
      <FaCalendarAlt className="username-icon" />
    </div>
  );
};

const GenderSelectField = ({ formData, setFormData }) => {
  const handleGenderChange = (e) => {
    setFormData({ ...formData, gender: e.target.value });
  };

  return (
    <div className="form-group">
      <select
        value={formData.gender || ""}
        onChange={handleGenderChange}
        required
      >
        <option value="" disabled hidden>
          Select Gender
        </option>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="other">Other</option>
      </select>
      <FaVenusMars className="username-icon" />
    </div>
  );
};

const SignupForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    dob: "",
    gender: "",
    email: "",
    phoneNumber: "",
    streetAddress: "",
    city: "",
    state: "",
    postalCode: "",
    country: "",
    password: "",
    confirmPassword: "",
    otp: "",
  });

  const [activeStep, setActiveStep] = useState(1);
  const [isValidPhoneNumber, setIsValidPhoneNumber] = useState(true);
  const [otpSent, setOtpSent] = useState(false);

  const handlePhoneNumberChange = (value) => {
    const phoneNumberPattern = /^\d{12}$/;
    setFormData({ ...formData, phoneNumber: value });
    setIsValidPhoneNumber(phoneNumberPattern.test(value.replace(/\D/g, "")));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (activeStep === 3) {
      // Verify OTP
      try {
        const response = await axios.post(
          "http://127.0.0.1:8000/api/verify-otp/",
          { email: formData.email, otp: formData.otp }
        );
        alert(response.data.message || "Verification successful!");
      } catch (error) {
        alert(
          "Error: " + (error.response?.data?.error || "Something went wrong")
        );
      }
      return;
    }

    // Validate passwords match
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/register/",
        formData
      );
      alert(response.data.message || "Signup successful!");
      setActiveStep(activeStep + 1); // Proceed to OTP Verification
    } catch (error) {
      alert(
        "Error: " + (error.response?.data?.error || "Something went wrong")
      );
    }
  };

  const handleSendOtp = async () => {
    try {
      await axios.post("http://127.0.0.1:8000/api/send-otp/", {
        email: formData.email,
      });
      setOtpSent(true);
      alert("OTP sent to your email!");
    } catch (error) {
      alert("Error: " + (error.response?.data?.error || "Failed to send OTP"));
    }
  };

  const isNextDisabled = () => {
    if (activeStep === 1) {
      return (
        !formData.firstName ||
        !formData.lastName ||
        !formData.dob ||
        !formData.gender ||
        !formData.email ||
        !isValidPhoneNumber
      );
    } else if (activeStep === 2) {
      return (
        !formData.streetAddress ||
        !formData.city ||
        !formData.state ||
        !formData.postalCode ||
        !formData.country
      );
    }
    return false;
  };

  const renderFormContent = () => {
    switch (activeStep) {
      case 1:
        return (
          <div>
            <div className="input-pair">
              <div className="form-group">
                <input
                  type="text"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={(e) =>
                    setFormData({ ...formData, firstName: e.target.value })
                  }
                  required
                />
                <FaUser className="username-icon" />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={(e) =>
                    setFormData({ ...formData, lastName: e.target.value })
                  }
                  required
                />
                <FaUser className="username-icon" />
              </div>
            </div>
            <div className="input-pair">
              <DateOfBirthField formData={formData} setFormData={setFormData} />
              <GenderSelectField
                formData={formData}
                setFormData={setFormData}
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                required
              />
              <MdEmail className="username-icon" />
            </div>
            <div className="form-group phone-input">
              <PhoneInput
                country={"in"}
                value={formData.phoneNumber}
                onChange={handlePhoneNumberChange}
                inputProps={{
                  required: true,
                }}
              />
              {!isValidPhoneNumber && (
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
              <input
                type="text"
                placeholder="Street Address"
                value={formData.streetAddress}
                onChange={(e) =>
                  setFormData({ ...formData, streetAddress: e.target.value })
                }
                required
              />
              <FaHome className="username-icon" />
            </div>
            <div className="input-pair">
              <div className="form-group">
                <input
                  type="text"
                  placeholder="City"
                  value={formData.city}
                  onChange={(e) =>
                    setFormData({ ...formData, city: e.target.value })
                  }
                  required
                />
                <FaCity className="username-icon" />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="State"
                  value={formData.state}
                  onChange={(e) =>
                    setFormData({ ...formData, state: e.target.value })
                  }
                  required
                />
                <FaFlag className="username-icon" />
              </div>
            </div>
            <div className="input-pair">
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Postal code"
                  value={formData.postalCode}
                  onChange={(e) =>
                    setFormData({ ...formData, postalCode: e.target.value })
                  }
                  required
                />
                <FaMapMarkerAlt className="username-icon" />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Country"
                  value={formData.country}
                  onChange={(e) =>
                    setFormData({ ...formData, country: e.target.value })
                  }
                  required
                />
                <FaEarthAsia className="username-icon" />
              </div>
            </div>
          </div>
        );
      case 3:
        return (
          <div>
            <div className="form-group">
              <input
                type="password"
                placeholder="Password"
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
                required
              />
              <FaLock className="username-icon" />
            </div>
            <div className="form-group">
              <input
                type="password"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={(e) =>
                  setFormData({ ...formData, confirmPassword: e.target.value })
                }
                required
              />
              <FaLock className="username-icon" />
            </div>
            <p className="otp-instruction">
              Please enter the OTP sent to your email:
            </p>
            <div className="form-group">
              <input
                type="text"
                placeholder="Enter OTP"
                value={formData.otp}
                onChange={(e) =>
                  setFormData({ ...formData, otp: e.target.value })
                }
                required
              />
              <MdOutlinePhonelinkLock className="username-icon" />
            </div>
            {!otpSent && (
              <button type="button" className="otp-btn" onClick={handleSendOtp}>
                Send OTP
              </button>
            )}
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
          Address Details
        </div>
        <div
          className={`breadcrumb ${activeStep === 3 ? "active" : ""}`}
          onClick={() => setActiveStep(3)}
        >
          Security & Verification
        </div>
      </div>
      <form className="registration-form" onSubmit={handleSubmit}>
        {renderFormContent()}
        <button
          type={activeStep === 3 ? "submit" : "button"}
          className="submit-btn"
          onClick={
            activeStep === 3 ? undefined : () => setActiveStep(activeStep + 1)
          }
          disabled={isNextDisabled()}
        >
          {activeStep === 3 ? "Verify & Sign Up" : "Next"}
        </button>
      </form>
    </div>
  );
};

export default SignupForm;
