import axios from 'axios';
import React from 'react'
import { Link } from "react-router-dom";
import { useContext, useRef } from 'react';
import { Context } from '../context/Context';


function Login() {
  const userRef = useRef();
  const passwordRef = useRef();
  const {user,dispatch, isFetching } = useContext(Context);

  const handleSubmit = async (e) => {

    e.preventDefault();
    dispatch({type: "LOGIN_START"});

    try {

      const res = await axios.post("http://localhost:8000/api/auth/login", {
        username: userRef.current.value,
        password: passwordRef.current.value,
      })
      dispatch({type: "LOGIN_SUCCESS",payload: res.data});     
      // console.log(res.data);
      
      
    } catch (error) {      
      dispatch({type: "LOGIN_FAILURE"});
      console.log(error);
    }
    
    console.log(user.others);
    
  }
  console.log(isFetching);

  return (
    <>
      <div className="login">
        <span className="loginTitle">Login</span>
        <form className="loginForm" onSubmit={handleSubmit} >
          <label >Username</label>
          <input className='loginInput' type="text" placeholder='Enter your Username' ref={userRef} />

          <label >Password</label>
          <input className='loginInput' type="password" placeholder='Enter your passwords' ref={passwordRef} />

          <button className="loginButton" type='submit'  disabled={isFetching} >Login</button>
          <button className="loginRegisterButton">
            <Link className='link' to="/register" >Register</Link>
          </button>
        </form>
      </div>
    </>
  )
}

export default Login