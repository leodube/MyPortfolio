import React from "react";
import { Link } from "react-router-dom";
import brandLogo from "/public/brand.svg";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md sticky-top navbar-light border-bottom pb-1 pt-2">
      <a className="navbar-brand" href="#">
        <img src={brandLogo} width="35" height="35" alt=""></img>
      </a>
      <button
        className="navbar-toggler ml-auto"
        type="button"
        data-toggle="collapse"
        data-target="#navbar"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbar">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item px-3">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item px-3">
            <Link to="/projects" className="nav-link">
              Projects
            </Link>
          </li>
          <li className="nav-item px-3">
            <Link to="/about" className="nav-link">
              About
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
