import React from 'react';
import { useState } from 'react';
import './consultancy.css';
import data from './data';
import axios from 'axios';
const Consultancy = ({userId})=>{
    const [errMsg, setErrMsg] = useState();
    const [consultData,setConsultData] = useState({
        name: "",
        phone: "",
        mode: "",
        speciality: "",
        desc:"",
        userId: userId,
        status:"pending"
    });

    const handleSubmit = (e)=>{
        e.preventDefault();
        if(!consultData.userId){
            setErrMsg("Login First!!");
            return;
        }
        if(!consultData.name || !consultData.phone || !consultData.mode || !consultData.desc){
            setErrMsg("fill all fields !!")
            // console.log("user",values);
            return;
        }
        console.log("user",consultData);
        
        // const {name,email,password} = values;
        axios.post('http://localhost:4000/consultancy',consultData);
        setConsultData({
            name: "",
            phone: "",
            mode: "",
            speciality: "",
            desc:"",
            userId: userId
        });
    }
    return (
        <div className="section2">
            <div className="right">
                <form action="/consult" method="POST" className="form">
                    <h2>Consult online</h2>
                            <i className="fas fa-check-circle"></i>
                            <input type="text" name="name" value = {data.name} placeholder="Full Name" onChange={(e)=>{
                                setConsultData((prev)=>({...prev,[e.target.name]:e.target.value}));
                                console.log(consultData);
                            }} />
                            <div className="half">
                            <input type="number" name="phone" id="" placeholder="Phone " onChange={(e)=>{
                                setConsultData((prev)=>({...prev,[e.target.name]:e.target.value}));
                                console.log(consultData);
                            }} />
                            <input type="email" name="email" id="" value = {data.email} placeholder="E-mail" onChange={(e)=>{
                                setConsultData((prev)=>({...prev,[e.target.name]:e.target.value}));
                                console.log(consultData);
                            }} />
                            </div>
                            <div className="half">
                            <select name="mode" id="" value = {data.mode} onChange={(e)=>{
                                setConsultData((prev)=>({...prev,["mode"]:e.target.value}));
                                console.log(consultData);
                            }}>
                                <option value="" >--- Select Mode ---</option>
                                <option value="In person">In Person</option>
                                <option value="Video call">Video call</option>
                                <option value="Phone call">Phone call</option>
                                <option value="whatsapp">Whatsapp</option>
                            </select>
                            <select name="speciality" id="" value = {data.speciality} onChange={(e)=>{
                                setConsultData((prev)=>({...prev,["speciality"]:e.target.value}));
                                console.log(consultData);
                            }}>
                                <option value="">--- Select speciality ---</option>
                                <option value="Quantitative_Analyst">Quantitative Analyst</option>
                                <option value="Financial_planner">Financial Planner</option>
                                <option value="Economic_analyst">Economic Analyst</option>
                                <option value="Financial_analyst">Financial Analyst</option>
                            </select>
                            </div>

                            <textarea className='desc' name="desc" value={data.desc} id="" placeholder="Description" onChange={(e)=>{
                                setConsultData((prev)=>({...prev,["desc"]:e.target.value}));
                                console.log(consultData);
                            }}></textarea>
                            <p>{errMsg}</p>
                            <input type="submit" value="Submit" onClick={handleSubmit} />
                </form>
            </div>
            <div className="left">
                <h2>Why Finco ?</h2>
                <ul>
                    <li>Round-the-clock adviser availability</li>
                    <li>Broad range of features</li>
                    <li>Detailed digital guides</li>
                    <li>Different types of finance related calculator related to finance</li>
                    <li>Digitised health records</li>
                </ul>
            </div>
        </div>
      
 
 
    );
}
export default Consultancy;