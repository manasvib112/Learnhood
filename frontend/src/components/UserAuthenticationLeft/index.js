import React from "react";
import "./style.css";
import logo from "../../assets/images/logo.png";
const UserAuthenticationLeft = () => {
  return (
    <div className="user-authentication-left-component">
      <div className="left-component element-container">
        <img classname=" logo" alt="learnhood" src={logo}></img>
        <h1>Learnhood</h1>
        <h2>Welcome,</h2> {/*alt uparrow to interchange or anywhere we want*/}
        <span>Sign in or create an account on the website </span>
        <button>Need help?</button>
      </div>
    </div>
  );
};
export default UserAuthenticationLeft;
