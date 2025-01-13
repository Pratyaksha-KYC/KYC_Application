import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="brand-logo">Pratyaksha</div>
      <nav className="navbar-links">
        <Link to="/features">Features</Link>
        <Link to="/about">About Us</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      <div className="navbar-buttons">
        <Link to="/login">
          <button className="btn-login">Login</button>
        </Link>
        <Link to="/signup">
          <button className="btn-signup">Sign Up</button>
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
