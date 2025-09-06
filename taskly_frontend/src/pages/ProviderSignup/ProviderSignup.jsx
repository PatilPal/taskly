// ================= PROVIDER SIGNUP PAGE =================
// Later, you will connect this to backend (provider signup API)
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ProviderSignup.css";

const ProviderSignup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    skill: "",
    experience: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // ========== TEMPORARY (Replace with API call) ==========
    console.log("Provider Registered:", formData);
    alert("Signup successful! Redirecting to Provider Dashboard...");
    navigate("/provider/dashboard");
    // =======================================================
  };

  return (
    <div className="provider-signup">
      <h2>Become a Provider</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Full Name" onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
        <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
        <input type="text" name="skill" placeholder="Skill (e.g. Electrician, Plumber)" onChange={handleChange} required />
        <input type="text" name="experience" placeholder="Experience (in years)" onChange={handleChange} required />

        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default ProviderSignup;
