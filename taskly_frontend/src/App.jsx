import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";
import Footer from "./components/Footer/Footer";
const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Services />
      <Footer />
    </div>
  );
};

export default App;
