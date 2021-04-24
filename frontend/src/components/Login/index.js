import React, {useState} from "react";
import "./style.css";
import Ellipse from "../../assets/images/Ellipse.png";


const Login = (props) => {

  const setIsLogin = props.setIsLogin;
  console.log("this is props login", props);
  const  [login,setLogin]=useState({email:"",password:""});
  const handleChange=(event)=>{
    if(event.target.name === "email"){
      setLogin({email:event.target.value})
    }else{
      setLogin({password:event.target.value})
    }
    console.log(event.target.name);
  }

  return (
    <div className="login-container"> 
    <img classname="Ellipse" alt="learnhood" src={Ellipse}></img> 
      <input name="email" type="text" placeholder="Email" onChange={handleChange} value={login.email}></input>
      <input name="password" type="password" placeholder="Password" onChange={handleChange} value={login.password} ></input>
      <button>Login</button>
      <span>
        Don't have an account?{" "}
        <a
          onClick={() => {
            setIsLogin(false);
          }}
        >
          Sign Up
        </a>
      </span>
      <a>Forget Password?</a>
      </div>
      );
};

export default Login;
