// src/App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import Home from "./pages/Home/Home";
import Services from "./pages/Services/Services";
import Chat from "./pages/Chat/Chat";
import Footer from "./components/Footer/Footer";
import ProviderSignup from "./pages/ProviderSignup/ProviderSignup";
import ProviderDashboard from "./pages/ProviderDashboard/ProviderDashboard";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/provider-signup" element={<ProviderSignup />} />
          <Route path="/provider/dashboard" element={<ProviderDashboard />} />

        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
