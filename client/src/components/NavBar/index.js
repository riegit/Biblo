import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar navbar-light">
      <a className="navbar-brand" href="/">
        YumYum
      </a>
    </nav>
  );
};

export default NavBar;
