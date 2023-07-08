import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="container">
      <nav className="navbar navbar-expand-sm bg-brown navbar-light">
        <div className="container ">
          <a href="#" className="navbar-brand">
            <img
              src={require("../assets/images/CPR_logo.JPG")}
              width="150"
              height="100"
            />
            <span style={{ color: "black", fontSize: "20px" }}>
              <b>CPR HOSPITAL KOLHAPUR </b>
            </span>
          </a>
          <button
            type="button"
            className="navbar-toggler"
            data-bs-toggle="collapse"
            data-bs-target="#collapsenavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            id="collapsenavbar"
            className="collapse navbar-collapse justify-content-end"
          >
            <ul className="navbar-nav ">
              <Link to={"/"} className="nav-item">
                <a className="nav-link">Home</a>
              </Link>
              <Link to={"/aboutus"} className="nav-item">
                <a className="nav-link">About</a>
              </Link>
              <Link to={"/services"} className="nav-item">
                <a className="nav-link">Services</a>
              </Link>
              <Link to={"/gallery"} className="nav-item">
                <a className="nav-link">Gallery</a>
              </Link>
              <Link to={"/contactus"} className="nav-item">
                <a className="nav-link">Contact</a>
              </Link>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
