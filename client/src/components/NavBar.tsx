import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar: React.FC = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">
        Hot Streak NBA
      </Link>
      <Link to="/about" className="navbar-link">
        About
      </Link>
    </nav>
  );
};

export default NavBar;
