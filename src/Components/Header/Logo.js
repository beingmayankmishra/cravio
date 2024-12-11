import React from "react";
import { useState } from "react";

function Logo() {

  const [btnNmaeReact ,setbtnNmaeReact] = useState("Login")


  return (
    <>
      <div className="header">
        <div className="logo-container">
          <img className="logo" src="Logo.jpg" alt="logo" />
        </div>
        <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Cart</li>
                <button className="login"onClick={()=> {btnNmaeReact === "Login" ? setbtnNmaeReact("Logout") : setbtnNmaeReact("Login") }} >{btnNmaeReact}</button>
            </ul>
        </div>
      </div>
    </>
  );
}

export default Logo;
