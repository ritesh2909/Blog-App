import axios from 'axios';
import React, { useState } from 'react'
import { Link } from "react-router-dom";


function register() {


  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {

    e.preventDefault();
    setError(false)
    try {
      const res = await axios.post("http://localhost:8000/api/auth/register", {
        username, email, password
      });
      res.data && window.location.replace("/login");
      console.log(res);

    } catch (error) {
      setError(true);
      console.log(error);
    }

  }

  return (
    <>
      <div className="register">
        <span className="registerTitle">Register</span>
        <form className="registerForm" onSubmit={handleSubmit}>


          <label >Username</label>
          <input
            className='registerInput'
            type="text"
            placeholder='Enter your username'
            onChange={e => { setUsername(e.target.value) }}
          />
          <label >Email</label>

          <input
            className='registerInput'
            type="email"
            placeholder='Enter your email'
            onChange={e => { setEmail(e.target.value) }}
          />

          <label >Password</label>
          <input
            className='registerInput'
            type="password"
            placeholder='Enter your passwords'
            onChange={e => { setPassword(e.target.value) }}
          />

          <button className="registerButton" type='submit' >Register</button>

          {( error && <p style={{"color": "red", "marginTop": "5%", "textAlign": "center"}}>Something went wrong !!</p>)}

          <button className="registerRegisterButton">
            <Link className='link' to="/login" >Login</Link>
          </button>
        </form>
      </div>
    </>
  )
}

export default register