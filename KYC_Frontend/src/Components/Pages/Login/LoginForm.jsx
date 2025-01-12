import React, { useState, useEffect } from "react";
import "./LoginForm.css";
import { FaUser, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { MdEmail } from "react-icons/md";
import axios from "axios"; // Import Axios for API calls

const LoginForm = () => {
  const [username, setUsername] = useState(""); // Email or phone number
  const [password, setPassword] = useState(""); // Password field
  const [phoneNumber, setPhoneNumber] = useState(""); // For phone input
  const [icon, setIcon] = useState(<FaUser className="username icon" />);
  const [error, setError] = useState(""); // Error messages
  const [isValidPhoneNumber, setIsValidPhoneNumber] = useState(true); // Phone number validation
  const [isPhoneField, setIsPhoneField] = useState(false); // Distinguish email or phone input
  const [isLoading, setIsLoading] = useState(false); // Loading state for the API call
  const [passwordVisible, setPasswordVisible] = useState(false); // Toggle password visibility

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  // Handle changes for username input (email or phone)
  const handleUsernameChange = (e) => {
    const value = e.target.value;
    setUsername(value);
    setError(""); // Reset the error message

    // Case 1: If the field is empty, reset to default field
    if (value === "") {
      setIsPhoneField(false); // Revert to default username field
      setIcon(<FaUser className="username icon" />); // Default icon
    }
    // Case 2: If the input starts with a "+" or a number, switch to phone input
    else if (/^\+?\d/.test(value)) {
      setIsPhoneField(true);
      setIcon(null); // Remove the username icon since it's a phone input
    }
    // Case 3: If the input starts with an alphabet (email address), switch to email input
    else if (emailRegex.test(value)) {
      setIsPhoneField(false); // Revert to email field
      setIcon(<MdEmail className="username icon" />); // Email icon
    }
    // Case 4: Any other input, default to username field
    else {
      setIsPhoneField(false); // Revert to default username field
      setIcon(<FaUser className="username icon" />); // Default username icon
    }
  };

  const handlePhoneChange = (value) => {
    const phoneNumberPattern = /^\d{10,15}$/;
    setPhoneNumber(value);
    setIsValidPhoneNumber(phoneNumberPattern.test(value.replace(/\D/g, "")));
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  // API call to the login endpoint
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Clear previous errors

    // Validate fields before submitting
    if (username.trim() === "" || password.trim() === "") {
      setError("Please fill out all fields.");
      return;
    }

    // Prepare payload
    const payload = isPhoneField
      ? { phoneNumber: phoneNumber.replace(/\D/g, ""), password }
      : { email: username, password };

    try {
      setIsLoading(true); // Show loading indicator
      const response = await axios.post(
        "http://localhost:8000/api/login/",
        payload
      );

      if (response.status === 200) {
        console.log("Login successful:", response.data);
        alert("Login successful!");
        // Handle success (e.g., save user info, redirect, etc.)
      }
    } catch (err) {
      setError(
        err.response?.data?.error ||
          "An error occurred. Please try again later."
      );
    } finally {
      setIsLoading(false); // Stop loading indicator
    }
  };

  useEffect(() => {
    if (phoneNumber === "") {
      setIsPhoneField(false);
      setUsername("");
      setIcon(<FaUser className="username icon" />); // Default icon when no phone input
    }
  }, [phoneNumber]);

  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setPasswordVisible((prevState) => !prevState);
  };

  return (
    <div className="wrapper-login">
      <form onSubmit={handleSubmit}>
        <h1 className="form-title">Login</h1>

        <div className="input-box">
          <div className="icon-container">{icon}</div>

          {isPhoneField ? (
            <div className="phone-input">
              <PhoneInput
                country={"us"}
                value={phoneNumber}
                onChange={handlePhoneChange}
                inputClass="phone-input-field"
                containerClass="react-tel-input"
              />
              {!isValidPhoneNumber && (
                <p className="error-message">
                  Please enter a valid phone number!
                </p>
              )}
            </div>
          ) : (
            <input
              type="text"
              placeholder="Username (Email or Phone Number)"
              required
              value={username}
              onChange={handleUsernameChange}
            />
          )}
        </div>

        {error && <p className="error-message">{error}</p>}

        <div className="input-box">
          <input
            type={passwordVisible ? "text" : "password"}
            placeholder="Password"
            required
            value={password}
            onChange={handlePasswordChange}
          />
          <FaLock className="password icon" />
          <div className="eye-icon" onClick={togglePasswordVisibility}>
            {passwordVisible ? <FaEyeSlash /> : <FaEye />}
          </div>
        </div>

        <div className="remember-forgot">
          <label>
            <input type="checkbox" />
            Remember me
          </label>
          <a href="/forgotPassword">Forgot Password?</a>
        </div>

        <button type="submit" disabled={isLoading}>
          {isLoading ? "Logging in..." : "Login"}
        </button>

        <div className="register-link">
          <p>
            Don't have an account? <a href="/signup">Register</a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
