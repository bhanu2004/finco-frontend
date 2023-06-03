import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import './profile.css'
export default function Profile({user}){

    const [consultData, setConsultData] = useState([]);
    const [userid, setUserid] = useState({id:user._id});
    var cont = 0;
    useEffect(()=>{
            // setUserid({id:userId});
            console.log(cont);
            cont= cont+1;
            console.log(userid);
            axios.post("https://finco-backend.vercel.app/profile",userid).then(res=>{
                console.log(res.data);
                setConsultData(res.data);
            });
         
        
        console.log(user);
        
    },[]);
    return(
        <>
        <div className="profileOuterContainer">
            <div className="ProfileInnerContainer">
                <div className="profileImg">

                </div>
                <div className="profileDataSection">
                    <p><b>Name: </b>{user.name}</p>
                    <p><b>E-mail: </b>{user.email}</p>
                    <p><b>Phone No: </b></p>
                </div>

                <div className="consultStatus">
                    <h1>Consultancy Status</h1>
                    <ul className="consultLists">
                        {consultData.map((item,index)=>{
                            return(
                                <li className="singleData">
                                    <p className={item.status=='pending' ? "currStatus" : "currStatus pass"}>{item.status}</p>
                                    <p>name: {item.name}</p>
                                    <p>mode: {item.mode}</p>
                                    <p className="consultDesc">{item.desc}</p>
                                </li>
                            )
                        })}
                      
                    </ul>
                </div>
            </div>
        </div>
        
        </>
    )
}