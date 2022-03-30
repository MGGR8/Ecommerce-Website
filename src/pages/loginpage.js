import React, { Component } from "react";
import  {useState} from "react";
import { Link } from "react-router-dom";
import {getAuth,signInWithEmailAndPassword} from "firebase/auth";
import { toast } from "react-toastify";
import Loader from "../components/Loader";
function Loginpage () {
  
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [loading,setLoading]=useState(false);
    const auth=getAuth();
    const login=async()=>{
        try{
            setLoading(true);
            const result=await signInWithEmailAndPassword(auth,email,password)
            localStorage.setItem('currentUser',JSON.stringify(result));
            toast.success("User login successfully")
            window.location.href='/home'
            setLoading(false);
        }
        catch(error){
            console.log(error)
            toast.error("Error logging in user")
            setLoading(false);
        }
    }
    return (
      <div className="login-parent">
          {loading && (<Loader/>)}
        <div className="row justify-content-center">
          <div className="col-md-5">
            <lottie-player
              src="https://assets9.lottiefiles.com/packages/lf20_q6wsiidu.json"
              background="transparent"
              speed="1"
              loop
              autoplay
            ></lottie-player>
          </div>
          <div className="col-md-4 z1">
              <div className="login-form">
                  <h2>Login</h2>
                  <hr></hr>
                  <input type="text" className="form-control" placeholder="email" value={email} onChange={(e)=>{setEmail(e.target.value)}}></input>
                  <input type="text" className="form-control" placeholder="password" value={password} onChange={(e)=>{setPassword(e.target.value)}}></input>
                  
                  <button className="my-3" onClick={login}>Login</button>
                  <hr></hr>
                  <Link to='/register'>Click here to register</Link>
              </div>
          </div>
        </div>
      </div>
    );
  
}

export default Loginpage;
