import React from "react";
import { Link } from "react-router-dom";
import "../style/Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <ul>
        <li>
          <Link to={"/"} className="nav-link">
            HOME
          </Link>
        </li>
        <li>
          <Link to={"/projects"} className="nav-link">
            PROJECTS
          </Link>
        </li>
        <li>
          <Link to={"/about"} className="nav-link">
            ABOUT
          </Link>
        </li>
        <li>
          <Link to={"/contact"} className="nav-link">
            CONTACT
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
