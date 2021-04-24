import React from "react";
import UserAuthenticationLeft from "../../components/UserAuthenticationLeft";
import UserAuthenticationRight from "../../components/UserAuthenticationRight";
import "./style.css";

const UserAuthentication = () => {
  return (
    <div>
      <div className="user-authentication">
        <UserAuthenticationLeft />
        <UserAuthenticationRight />
      </div>
    </div>
  );
};

export default UserAuthentication;
