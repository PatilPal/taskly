// src/components/Footer/Footer.jsx
import React from "react";
import "./Footer.css";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h3 className="logo">Taskly</h3>
        <nav className="footer-links">
          <a href="/">Home</a>
          <a href="/services">Services</a>
          <a href="/chat">Chat</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
        </nav>
        <div className="footer-social">
          <FaFacebook />
          <FaTwitter />
          <FaInstagram />
        </div>
      </div>
      <p className="footer-copy">
        © {new Date().getFullYear()} Taskly. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
