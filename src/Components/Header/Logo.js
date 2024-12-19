import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

function Logo() {
  const [btnNmaeReact, setbtnNmaeReact] = useState("Login");

  return (
    <>
      <div className="header">
        <div className="logo-container">
        <img className="logo" src="/Logo.jpg" alt="logo" />

        </div>
        <div className="nav-items">

        <ul>
  <li><NavLink to="/">Home</NavLink></li>
  <li><NavLink to="/AboutUs">About Us</NavLink></li>
  <li><NavLink to="/Contactus">Contact Us</NavLink></li>
  <li>Cart</li>
  <li>
    <button
      className="login"
      onClick={() => {
        btnNmaeReact === "Login"
          ? setbtnNmaeReact("Logout")
          : setbtnNmaeReact("Login");
      }}
    >
      {btnNmaeReact}
    </button>
  </li>
</ul>

 
        </div>
      </div>
    </>
  );
}

export default Logo;
