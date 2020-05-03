import React, { Component } from "react";
import logo from "../../assets/logo.PNG";
import { Link } from "react-router-dom";
import "./navbar-style.css";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-white">
        <Link className="navbar-logo" to="/">
          <img className="brand" src={logo} alt="Logo" />
        </Link>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto"></ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
