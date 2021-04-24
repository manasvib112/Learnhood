import React, { useState } from "react";
import Login from "../Login";
import Successful from "../Successful";
import "./style.css";

const Register = (props) => {
  const setIsLogin = props.setIsLogin;
  const [isSuccessful, setIsSuccessful] = useState(false);
  //   console.log(setIsLogin);
  //   console.log("this is props", props);
  return (
    <>
      {isSuccessful ? (
        <Successful />
      ) : (
        <>
          <input type="text" placeholder="Enter Email"></input>
          <input type="text" placeholder="Enter User Name"></input>
          <input type="text" placeholder="Enter Password"></input>
          <input type="text" placeholder="Confirm Password"></input>
          <button
            onClick={() => {
              setIsSuccessful(true);
            }}
          >
            Register
          </button>
          <span>
            Already have an account?{" "}
            <a
              onClick={() => {
                setIsLogin(true);
              }}
            >
              Log In
            </a>
          </span>
        </>
      )}
    </>
  );
};

export default Register;
