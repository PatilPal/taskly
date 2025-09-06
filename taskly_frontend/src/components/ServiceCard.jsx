import React from "react";
import "../components/ServiceCard.css";

const ServiceCard = ({ title, provider, price, rating, img }) => {
  return (
    <div className="service-card">
      <img src={img} alt={title} />
      <h3>{title}</h3>
      <p>{provider}</p>
      <p className="price">{price}</p>
      <p className="rating">⭐ {rating}</p>
    </div>
  );
};

export default ServiceCard;
