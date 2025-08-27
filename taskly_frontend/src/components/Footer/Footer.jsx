import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <h2>Enter your Logo</h2>
        <div className="links">
          <ul>
            <li>Home</li>
            <li>Services</li>
            <li>Products</li>
            <li>About Us</li>
          </ul>
          <ul>
            <li>Privacy Policy</li>
            <li>Refund Terms</li>
            <li>FAQ</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className="social">
          <p>Follow us</p>
          <div className="icons">[social icons here]</div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2022 Girnar Software Pvt. Ltd.</p>
      </div>
    </footer>
  );
};

export default Footer;
