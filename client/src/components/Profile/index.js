import React from "react";
import "./profile.css";
import { Link } from "react-router-dom";

const Profile = props => {
  return (
    <div>
      <h1>Welcome {props.auth.username} !</h1>
      <p>{props.auth.username}</p>
      <button onClick={props.handleLogout}>Log Out</button>
    </div>
  );
};

export default Profile;
