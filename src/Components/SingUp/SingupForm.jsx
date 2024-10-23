import React, { useState } from 'react';
import './SingupForm.css'; // Link to the CSS

const SingupForm = () => {
  const [activeStep, setActiveStep] = useState(1); // Default to the first step

  const renderFormContent  = () => {
    switch (activeStep) {
      case 1:
        return (
          <div>
            <div className="form-group">
              <input type="text" placeholder="Full Name" />
            </div>
            <div className="form-group">
              <input type="text" placeholder="Username" />
            </div>
            <div className="form-group">
              <input type="email" placeholder="Email Address" />
            </div>
            <div className="form-group phone-input">
              <select>
                <option>+123</option>
              </select>
              <input type="text" placeholder="Phone Number" />
            </div>
          </div>
        );
      case 2:
        return (
          <div>
            <div className="form-group">
              <input type="text" placeholder="Street Address" />
            </div>
            <div className="form-group">
              <input type="text" placeholder="City" />
            </div>
            <div className="form-group">
              <input type="text" placeholder="Postal Code" />
            </div>
          </div>
        );
      case 3:
        return (
          <div>
            <div className="form-group">
              <input type="password" placeholder="Password" />
            </div>
            <div className="form-group">
              <input type="password" placeholder="Confirm Password" />
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="registration-container">
      <div className="form-wrapper">
        <h2 className="form-title">Account Registration</h2>
        
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
    </div>
  );
};

export default SingupForm;
