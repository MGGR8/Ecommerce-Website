import React, { Component } from "react";
import  {useState} from "react";
import { Link } from "react-router-dom";
import Loader from "../components/Loader";
import {getAuth,createUserWithEmailAndPassword} from "firebase/auth";
import {toast} from "react-toastify";
function Registerpage () {
  
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [cpassword,setCpassword]=useState('')
    const [loading,setLoading]=useState(false);
    const auth=getAuth();
    const register=async()=>{
        try{
            
            setLoading(true);
             createUserWithEmailAndPassword(auth,email,password)
           
            setLoading(false);
             toast.success("User created successfully")
        }
        catch(error){
            console.log(error)
            toast.error('Error creating user')
            setLoading(false);
        }
    }
    return (
      <div className="register-parent">
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
              <div className="register-form">
                  <h2>Register</h2>
                  <hr></hr>
                  <input type="text" className="form-control" placeholder="email" value={email} onChange={(e)=>{setEmail(e.target.value)}}></input>
                  <input type="text" className="form-control" placeholder="password" value={password} onChange={(e)=>{setPassword(e.target.value)}}></input>
                  <input type="text" className="form-control" placeholder="confirm password" value={cpassword} onChange={(e)=>{setCpassword(e.target.value)}}></input>
                  <button className="my-3" onClick={register}>Register</button>
                  <hr></hr>
                  <Link to='/login'>Click here to login</Link>

              </div>
          </div>
        </div>
      </div>
    );
  
}

export default Registerpage;
