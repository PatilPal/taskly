import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-banner">
        <div className="dots">
          <span></span>
          <span className="active"></span>
          <span></span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
