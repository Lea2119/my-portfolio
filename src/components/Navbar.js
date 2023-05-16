import React from "react";
import { Link } from "react-router-dom";
import "../style/Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <ul>
        <Link to={"/"}>
          <li>HOME</li>
        </Link>
        <Link to={"/projects"}>
          <li>PROJECTS</li>
        </Link>
        <Link to={"/about"}>
          <li>ABOUT</li>
        </Link>
        <Link to={"/contact"}>
          <li>CONTACT</li>
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;
