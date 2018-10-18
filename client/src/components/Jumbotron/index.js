import React from "react";
import "./jumbotron.css";

const Jumbotron = ({ children }) => (
  <div className="jumbotron mt-2">
    {/* {children} */}
    <h1>Yummy Recipe</h1>
    <h3 style={{ color: "black" }}>
      Create your own favorite recipe collection
    </h3>
    <span />
  </div>
);

export default Jumbotron;
