import React, { useState } from "react";
import "./style.css";
import Login from "../Login";
import Register from "../Register";

const UserAuthenticationRight = () => {
  const [isLogin, setIsLogin] = useState(true); //initial state is passed in useState
  return (
    <div className="user-authentication-right-component">
      <div className="user-authentication-center-component">
        {isLogin == true ? (
          <Login setIsLogin={setIsLogin} />
        ) : (
          <Register setIsLogin={setIsLogin} />
        )}
      </div>
    </div>
  );
};
export default UserAuthenticationRight;
