import React from "react";
import "../assets/css/header.css";

export const HeaderComponent = () => {
  return (
    <div className="header">
      <div className="header-title" style={{ color: "#30bff7" }}>
        HeaderComponent
      </div>

      <div className="header-nav">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </div>

      <button className="header-btn">Login</button>
    </div>
  );
};
