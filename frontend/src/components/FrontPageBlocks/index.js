import React from "react";
import { useHistory } from "react-router";
import "./style.css";


const FrontPageBlock=(props)=>{
const  {name,text,path} =props; 
const history= useHistory();
    return(
        <div className="front-page-block">
            <h1>{name}</h1>
            <span>{text}</span>
            <div className="circle-wrapper" onClick={()=>{history.push(path)}}>
            <div className="circle">
            </div>
            </div>
        </div>
    )

}
export default FrontPageBlock;