import React, { useState } from 'react';
import { FaUser, FaLock } from "react-icons/fa";
import './SignupForm.css'; 

const SignupForm = () => {
  const [activeStep, setActiveStep] = useState(1); // Default to the first step

  const renderFormContent  = () => {
    switch (activeStep) {
      case 1:
        return (
          <div>
            <div className="input-pair">
            <div className="form-group">
              <input type="text" placeholder="First Name" required/>
              <FaUser className="username-icon" />
            </div>
            <div className="form-group">
              <input type="text" placeholder="Last Name" required/>
            </div>
            </div>
            <div className="form-group">
              <input type="email" placeholder="Email Address" required />
            </div>
            <div className="form-group phone-input">
              <select>
                <option>+123</option>
              </select>
              <input type="text" placeholder="Phone Number" required/>
            </div>
          </div>
        );
      case 2:
        return (
          <div>
            <div className="form-group">
              <input type="text" placeholder="Street Address" required/>
            </div>
            <div className="form-group">
              <input type="text" placeholder="City" required/>
            </div>
            <div className="form-group">
              <input type="text" placeholder="Postal Code" required/>
            </div>
          </div>
        );
      case 3:
        return (
          <div>
            <div className="form-group">
              <input type="password" placeholder="Password" required/>
            </div>
            <div className="form-group">
              <input type="password" placeholder="Confirm Password" required/>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (

      <div className="wrapper-signup">
        <h1 className="form-title">Sing Up</h1>
        
        {/* Breadcrumb Navigation */}
        <div className="breadcrumb-nav">
          <div
            className={`breadcrumb ${activeStep === 1 ? 'active' : ''}`}
            onClick={() => setActiveStep(1)}
          >
            Base Information
          </div>
          <div
            className={`breadcrumb ${activeStep === 2 ? 'active' : ''}`}
            onClick={() => setActiveStep(2)}
          >
            Contact Details
          </div>
          <div
            className={`breadcrumb ${activeStep === 3 ? 'active' : ''}`}
            onClick={() => setActiveStep(3)}
          >
            Security
          </div>
        </div>
        
        {/* Dynamic Form Content */}
        <form className="registration-form">
          {renderFormContent()}
          <button type="submit" className="submit-btn">Save & Continue</button>
        </form>
      </div>
  );
};

export default SignupForm;
