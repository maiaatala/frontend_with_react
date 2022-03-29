import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const handleStyle = ({ isActive }) => {
    return { color: isActive ? "red" : "grey" };
    // {} because it is returning STYL
  };

  return (
    <nav className="navbar">
      <NavLink to="/" style={handleStyle}>
        Home
      </NavLink>
      <NavLink
        to="about"
        className={({ isActive }) => {
          return isActive ? "active" : "link";
        }}
      >
        About
      </NavLink>
      <NavLink
        to="/products"
        style={({ isActive }) => {
          return { color: isActive ? "red" : "grey" };
        }}
      >
        Products
      </NavLink>
      <NavLink to="/login" style={handleStyle}>
        Login
      </NavLink>
    </nav>
  );
};

export default Navbar;
