import React from "react";
import ServiceCard from "./ServiceCard";
import "./ServiceCategory.css";

const ServiceCategory = ({ category, services }) => {
  return (
    <div className="service-category">
      <h2>{category}</h2>
      <div className="service-list">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default ServiceCategory;
