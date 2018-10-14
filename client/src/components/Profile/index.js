import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

const Profile = props => {
  return (
    <div>
      <h1>You should only see this if you are logged in!</h1>
      <p>{props.auth.username}</p>
      <button onClick={props.handleLogout}>Log Out</button>
    </div>
  );
};

export default Profile;
