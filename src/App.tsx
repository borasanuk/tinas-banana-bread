import React from "react";
import "./App.css";

function App() {
  return (
    <div className="tinas-app-container">
      <div className="tinas-navbar">
        <img
          className="tinas-navbar-logo"
          src="https://i.ibb.co/XVNFSWJ/logo-white.png"
          alt="logo-white"
        />
        <div className="tinas-navbar-item tinas-navbar-item-selected">home</div>
        <div className="tinas-navbar-item">about</div>
        <div className="tinas-navbar-item">contact</div>
      </div>
      <div className="tinas-hero">
        <div className="tinas-hero-bg-container">
          <img
            className="tinas-hero-bg"
            src="https://i.ibb.co/zZC8sF9/whitney-wright-q-Kx-ELx-IH5t8-unsplash.jpg"
            alt="whitney-wright-q-Kx-ELx-IH5t8-unsplash"
          />
        </div>
        <div className="tinas-hero-title">
          tina's bananas
          <br />
          about banana bread.
        </div>
      </div>
    </div>
  );
}

export default App;
