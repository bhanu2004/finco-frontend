import { useState } from "react";
import './sign.css';
import axios from 'axios';


const Sign = ({setUser})=>{

    const [values, setValues] = useState({
        name:"",
        email:"",
        pass:"",
    });

    const [inUser, setInUser] = useState({
        email: "",
        pass:""
    })

    const [errMsg, setErrMsg] = useState();
    const handleSubmit = (e)=>{
        e.preventDefault();
        if(!values.name || !values.email || !values.pass){
            setErrMsg("fill all fields !!")
            console.log("user",values);
            return;
        }
        console.log("user",values);
        const {name, email, pass} = values;
        // const {name,email,password} = values;
        axios.post('https://finco-backend.vercel.app/signup',values).then(res=>{
            setCd(!cd);
        });
        setCd(!cd);
        setValues({
            name:"",
            email:"",
            pass:""
        });
    }
    
    const handleLoginSubmit = (e)=>{
        e.preventDefault();
        if(!inUser.email || !inUser.pass){
            setErrMsg("fill the the fields!!");
        }
        console.log(inUser);
        axios.post('https://finco-backend.vercel.app/signin',inUser)
        .then(res =>{
            alert(res.data.message);
            console.log(res.data.user);
            if(res.data.user){
            setUser(res.data.user);
            } 
            
        });
    }
    const [cd, setCd] = useState(true);
    return(
        <div class="container2">

        <div class="form2">
            <div class={cd? 'openRegistor inner-box' : 'openLogin inner-box'} id="card ">
                <div class="front-cov">
                    <h2>Login</h2>
                    <i className="fas fa-check-circle"></i>
                    <form >
                        <input type="email" class="input-box" placeholder="Email-Id" name = "email" value = {inUser.email} required onChange={(e)=>{
                            setInUser((prev)=>({...prev,[e.target.name]:e.target.value}));
                        }} />
                        <input type="password" class="input-box" placeholder="password" name = "pass" value = {inUser.pass} required onChange={(e)=>{
                            setInUser((prev)=>({...prev,[e.target.name]:e.target.value}));
                        }}/>
                        <button type="submit" class="submit-btn" onClick={handleLoginSubmit}>Submit</button>
                        {/* <input type="checkbox" class="check" /><span>Remember me</span> */}
                    
                    </form>
                    <button class="submit-btn" id="front-btn" onClick={()=>{setCd(!cd)}}>I'm New here</button>
                    <a href="">Forgot password</a>
                    
                </div>
                <div class="back-cov" id="back-cov">
                    <h2>Registor</h2>
                    <i className="fas fa-check-circle"></i>
                    <form >
                        <input type="text" name="name" value = {values.name} class="input-box" placeholder="Name" required onChange={(e)=>{
                            setValues((prev) =>({...prev,[e.target.name]:e.target.value}));
                            console.log(e.target.name,e.target.value);
                        }} />
                        <input type="text" name="email" value = {values.email} class="input-box" placeholder="Email-Id" required onChange={(e)=>{
                            setValues((prev) =>({...prev,[e.target.name]:e.target.value}))
                        }} />
                        <input type="text" name="pass" value = {values.pass} class="input-box" placeholder="password" required onChange={(e)=>{
                            setValues((prev) =>({...prev,[e.target.name]:e.target.value}))
                        }}/>
                        <p className="errMsg">{errMsg}</p>
                        <button class="submit-btn" onClick={handleSubmit} type="submit">Submit</button>
                        {/* <div><input type="checkbox" class="check" /><span>Remember me</span></div> */}
                        
                    
                    </form>
                    <button class="submit-btn" id="back-btn" onClick={()=>{setCd(!cd)}}>Already have an account</button>
                    <a href="">Forgot password</a>
                </div>
            </div>
            

        </div>
    </div>
    )
}
export default Sign;