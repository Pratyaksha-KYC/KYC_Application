import React from "react";
import "./Features.css";

const Features = () => {
  return (
    <section className="features-section" id="features">
      <h2>Our Features</h2>
      <div className="features-container">
        <div className="feature-card">
          <h3>Fast Verification</h3>
          <p>Get your identity verified in minutes.</p>
        </div>
        <div className="feature-card">
          <h3>Secure</h3>
          <p>State-of-the-art security to protect your data.</p>
        </div>
        <div className="feature-card">
          <h3>Seamless</h3>
          <p>Easy-to-use interface for a smooth experience.</p>
        </div>
      </div>
    </section>
  );
};

export default Features;
