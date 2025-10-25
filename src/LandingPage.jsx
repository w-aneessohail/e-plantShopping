// import React from "react";
import { useNavigate } from "react-router-dom";
import "./LandingPage.css";

const LandingPage = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/productlist");
  };

  return (
    <div className="landing">
      <div className="landing-content">
        <h1>Welcome to Paradise Nursery 🌿</h1>
        <p>
          Explore our wide collection of aromatic and medicinal plants to bring
          nature’s freshness into your home.
        </p>
        <button onClick={handleGetStarted}>Get Started</button>
      </div>
    </div>
  );
};

export default LandingPage;
