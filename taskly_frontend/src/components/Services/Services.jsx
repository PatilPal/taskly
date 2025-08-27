import React from "react";
import "./Services.css";

const services = [
  { name: "Electrician", img: "/images/electrician.jpg" },
  { name: "Plumber", img: "/images/plumber.jpg" },
  { name: "Painter", img: "/images/painter.jpg" },
  { name: "Pest control", img: "/images/pest.jpg" },
  { name: "Carpenter", img: "/images/carpenter.jpg" },
];

const Services = () => {
  return (
    <section className="services">
      <h2>Explore whats available</h2>
      <p>Lorem ipsum dolor sit amet consectetur. Id justo cursus interdum phasellus.</p>
      <div className="services-grid">
        {services.map((s, i) => (
          <div className="service-card" key={i}>
            <img src={s.img} alt={s.name} />
            <p>{s.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
