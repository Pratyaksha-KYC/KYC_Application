import React from 'react';
import './HomePage.css';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-container">
      <header className="navbar">
        <div className="brand-logo">KYC App</div>
        <nav>
        <Link to="/login">
          <button className="btn-login">Login</button>
        </Link>
        <Link to="/signup">
          <button className="btn-signup">Sign Up</button>
          </Link>
        </nav>
      </header>

      <section className="hero-section">
        <h1>Welcome to KYC Verification</h1>
        <p>Securely verify your identity with ease and confidence.</p>
        <div className="hero-buttons">
          <button className="btn-primary">Get Started</button>
          <button className="btn-secondary">Learn More</button>
        </div>
      </section>

      <footer className="footer">
        <p>&copy; 2024 KYC App. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
