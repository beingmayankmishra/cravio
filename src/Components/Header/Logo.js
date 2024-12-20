import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

function Logo({ children }) {
  const [btnNmaeReact, setbtnNmaeReact] = useState("Login");

  return (
    <header className="flex justify-between items-center bg-gradient-to-r from-white via-gray-100 to-white px-8 py-4 shadow-md">
      {/* Logo Section */}
      <div className="flex items-center space-x-3">
        <img
          className="w-12 h-12 object-cover rounded-full"
          src="/Logo.jpg"
          alt="logo"
        />
        <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-black to-white tracking-wide relative">
          CRAVIO
          <span className="absolute inset-0 bg-gradient-to-r from-black to-white opacity-20 blur-md"></span>
        </h1>
      </div>

      {/* Navigation, Search, and Login Section */}
      <div className="flex items-center space-x-6">
        <nav className="flex items-center space-x-6 text-gray-700 font-medium">
          <NavLink
            to="/"
            className="hover:text-orange-500 transition"
          >
            Home
          </NavLink>
          <NavLink
            to="/AboutUs"
            className="hover:text-orange-500 transition"
          >
            About Us
          </NavLink>
          <NavLink
            to="/Contactus"
            className="hover:text-orange-500 transition"
          >
            Contact Us
          </NavLink>
          <NavLink
            to="/Cart"
            className="hover:text-orange-500 transition"
          >
            Cart
          </NavLink>
        </nav>
        {children}
        <button
          className="ml-6 bg-black hover:bg-orange-600 text-white px-4 py-2 rounded-md shadow-sm transition"
          onClick={() =>
            setbtnNmaeReact((prev) => (prev === "Login" ? "Logout" : "Login"))
          }
        >
          {btnNmaeReact}
        </button>
      </div>
    </header>
  );
}

export default Logo;