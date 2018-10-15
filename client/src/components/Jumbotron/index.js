import React from "react";
import "./style.css";

const Jumbotron = ({ children }) => (
  <div className="jumbotron mt-2">
    {children}
    <h1>Yummy Recipe</h1>
    <h2>Create your favorite recipe collection</h2>
  </div>
);

export default Jumbotron;
