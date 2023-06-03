import React from "react";
import './about.css';
const AboutUs = ()=>{
    return(
        <div className="aboutOuterBody">
        <div className="aboutInnerBody">
            <div className="aboutLeftInnerBody">
                <h2>About Us</h2>
                <ul>
                    <li><p>
                Finco is here to make your money choices clearer. Here, we will help you manage your money, give you financial 
                advice and provide you suggestion according your need.
                </p></li>
                <li>
                <p> We will provide you multiple tools through which you can 
                calculate your income tax, pension, investment etc. 
                </p>
                </li>
                <li><p>
                 For clear money help that’s on your side and free to use, just search for MoneyHelper. 
                 </p></li>
                </ul>
                
                
                
                
            </div>
            <div className="aboutRightInnerBody">
                <img src="./images/aboutPic.png" alt="" />
            </div>

        </div>
        
        
        </div>
    )
}
export default AboutUs;