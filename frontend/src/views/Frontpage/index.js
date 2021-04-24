import React from "react";
import "./style.css"
import Header from "../../components/Header";
import picture from "../../assets/images/picture.png";
import FrontPageBlock from "../../components/FrontPageBlocks"
const FrontPage=()=>{

return(
    <div className="upper-page">
     <Header username="Manasvi"/>
     <div className="middle-page">
         <div className="middle-page-left">
         <span>Learnhood</span>
         <p>It is a platform where anyone can sell or buy the books and students will be provided with the previous year papers and notes . This could be your promising step towards building a well educated nation</p>
         </div>
     <img src={picture}/>
     </div>
     <div className="bottom-page">
     <FrontPageBlock name="Books" text="Browse or share handmade notes. Find your books on this platform." path="/login"/>
     <FrontPageBlock name="Papers" text="Browse or share handmade Papers. Find your notes on this platform."/>
     <FrontPageBlock name="Notes" text="Browse or share handmade notes. Find your notes on this platform."/>
     </div>

    </div>
);
};
 
export default FrontPage;