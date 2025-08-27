import React from "react";
import "./TopServices.css";

const topServices = new Array(6).fill({
  title: "Eco Point Smart",
  location: "Bengali market",
});

const TopServices = () => {
  return (
    <section className="top-services">
      <div className="header">
        <h2>Top Services Near You</h2>
        <a href="#">View More</a>
      </div>
      <div className="cards">
        {topServices.map((s, i) => (
          <div className="card" key={i}>
            <div className="card-image"></div>
            <div className="card-info">
              <h3>{s.title}</h3>
              <p>{s.location}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopServices;
