import React from "react";
import "./style.css";
import Logo from "../../assets/images/logo.png";
import Ellipse from "../../assets/images/Ellipse.png";
import {Link} from "react-router-dom"

const Header=(props)=>{
  const {username}=props;

    return(
        <div className="nav-bar">
         <div className ="images-row">
         <div className="left-side">
         <img src={Logo}/>
         <span class="logo">Learnhood</span> 
         </div>
         <div className="right-side">
         <span>Hi, <strong>{username}</strong></span>
         <img src={Ellipse}/>
         </div>
         </div>
         <nav> 
              <ul>
            <li><Link href="#">Home</Link></li>
            <li><Link href="#">Books</Link></li>
            <li><Link href="#">Paper</Link></li> 
            <li><Link href="#">Notes</Link></li>
            <li><Link href="#">About</Link></li>
             </ul>
             
         </nav>
        
         
     </div>
    )
};

export default Header;