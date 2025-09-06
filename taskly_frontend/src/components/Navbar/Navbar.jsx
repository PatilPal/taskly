import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import assets from "../../assets/logo.png";

const Navbar = () => {
  return (
    <header className="navbar">
      {/* Logo */}
      <div className="logo">
        <img src={assets} alt="Taskly" />
      </div>

      {/* Navigation Links */}
      <nav className="nav-links">
        <NavLink to="/" exact activeClassName="active">
          Home
        </NavLink>
        <NavLink to="/services" activeClassName="active">
          Services
        </NavLink>
        <NavLink to="/chat" activeClassName="active">
          Chat
        </NavLink>
        <NavLink to="/history" activeClassName="active">
          History
        </NavLink>
        <NavLink to="/about" activeClassName="active">
          About
        </NavLink>
        <NavLink to="/provider-signup" activeClassName="active">
    Become a Provider
  </NavLink>
      </nav>

      {/* Register/Login Button */}
      <div className="nav-auth">
        <NavLink to="/login" className="login-btn">
          Register / Login
        </NavLink>
      </div>
    </header>
  );
};

export default Navbar;
