import React from "react";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <section className="hero-section">
      <h1>Welcome to Pratyaksha</h1>
      <p>Effortless and Secure KYC Verification</p>
      <div className="hero-buttons">
        <button className="btn-primary">Get Started</button>
        <button className="btn-secondary">Learn More</button>
      </div>
    </section>
  );
};

export default HeroSection;
