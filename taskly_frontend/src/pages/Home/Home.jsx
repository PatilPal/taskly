import React from "react";
import { Link } from "react-router-dom";

import "./Home.css";
import { assets } from "../../assets/assets"; 
import { FaBolt, FaBroom, FaTools, FaPaintRoller, FaHammer } from "react-icons/fa";

const Home = () => {
  const categories = [
    { icon: <FaBolt />, name: "Electrical" },
    { icon: <FaBroom />, name: "Cleaning" },
    { icon: <FaTools />, name: "Plumbing" },
    { icon: <FaPaintRoller />, name: "Paint" },
    { icon: <FaHammer />, name: "Carpentry" },
  ];

  const popular = [
    {
      title: "House Cleaning",
      provider: "Tala Abdeen",
      price: "₹40/hr",
      rating: "3.4",
      img: assets.homeCleaning, 
    },
    {
      title: "Wall Painting",
      provider: "Hosam Rami",
      price: "₹25/hr",
      rating: "3.4",
      img: assets.painter, 
    },
    {
      title: "Electrician",
      provider: "Ram Sarma",
      price: "₹50/hr",
      rating: "5",
      img: assets.electrician,
    },
  ];

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <h1>Find trusted local professionals in minutes...</h1>
        <p>
          From electricians to AC repairs – chat, book, and get service
          on-demand with Taskly
        </p>
        <button className="hero-btn">Explore Services</button>
      </section>

      {/* Categories */}
      <section className="categories">
        <div className="section-header">
          <h2>Categories</h2>
          <a href="#">See all →</a>
        </div>
        <div className="categories-list">
          {categories.map((cat, index) => (
            <div key={index} className="category-card">
              <div className="cat-icon">{cat.icon}</div>
              <p>{cat.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Most Popular */}
      <section className="popular">
        <div className="section-header">
          <h2>Most Popular</h2>
          <Link to="/services">See all →</Link>
        </div>

        <div className="filter-chips">
          <button className="chip active">All</button>
          <button className="chip">Cleaning</button>
          <button className="chip">Paint</button>
          <button className="chip">Electrical</button>
          <button className="chip">Carpentry</button>
        </div>
        <div className="popular-list">
          {popular.map((item, index) => (
            <div key={index} className="popular-card">
              <img src={item.img} alt={item.title} /> 
              <div className="card-content">
                <h3>{item.title}</h3>
                <p>{item.provider}</p>
                <div className="card-meta">
                  <span>{item.price}</span>
                  <span>⭐ {item.rating}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
