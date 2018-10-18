import React from "react";
import "./recipe.css";
import { Link } from "react-router-dom";

const Recipe = () => {
  return (
    <div className="row justify-content-between">
      <div className="col-3" />
      <div className="col-9 " id="search">
        <div className="row">
          <div className="col-2" />
          <div className="col-5">
            <form class="form-inline">
              <input
                class="form-control form-control-sm ml-3 w-75"
                type="text"
                placeholder="Search"
                aria-label="Search"
              />
              <i class="fa fa-search" aria-hidden="true" />
            </form>
          </div>
          <div className="col-2" id="recipeboard" />
        </div>
        <div className="row" id="search-result" />
      </div>
    </div>
  );
};

export default Recipe;
