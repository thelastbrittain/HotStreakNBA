import React from "react";
import { Link } from "react-router-dom";

const NavBar: React.FC = () => {
  return (
    <nav
      style={{
        backgroundColor: "red",
        padding: "10px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Link
        to="/"
        style={{
          textDecoration: "none",
          color: "white",
          fontSize: "24px",
          fontWeight: "bold",
        }}
      >
        Hot Streak NBA
      </Link>
      <Link
        to="/about"
        style={{ textDecoration: "none", color: "white", fontSize: "18px" }}
      >
        About
      </Link>
    </nav>
  );
};

export default NavBar;
