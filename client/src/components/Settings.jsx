import React from 'react'
import { useContext, useState } from 'react';
import { Context } from '../context/Context';
import Sidebar from './Sidebar';
import axios from 'axios';


function Settings() {


  const { user } = useContext(Context);
  const [file, setFile] = useState(null);

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false);
  const PF = "http://localhost:8000/images/";
  

  const handleSubmit = async (e) => {
    e.preventDefault();

    const updatedUser = {
      userId: user.others._id,
      username,
      email,
      password
    }

    console.log(updatedUser);
    console.log(user.others.username);
    if (file) {
      const data = new FormData();
      const fileName = Date.now() + file.name;
      data.append("name", fileName);
      data.append("file", file);
      updatedUser.profilePic = fileName;
      try {

        const out = await axios.post("http://localhost:8000/api/upload", data);
        console.log(out);


      } catch (error) {
        console.log(error);

      }
    }

    try {
      const res = await axios.put("http://localhost:8000/api/users" + "/" + user.others._id, updatedUser);
      console.log(res);
      setSuccess(true)
    } catch (error) {
      console.log(error);
    }

  }


  return (

    <>
      <div className="settings">
        <div className="settingsWrapper">
          <div className="settingsTitle">
            <span className="settingsUpdateTitle">Update Your Account</span>
            <span className="settingsDeleteTitle">Delete Your Account</span>
          </div>
          <form className="settingsForm" onSubmit={handleSubmit}>
            <label >Profile Picture</label>
            <div className="settingsPP">
              <img
                src={file ? URL.createObjectURL(file) : user.others.profilePic}
                alt=""
                
              />
              {console.log()}
              <label htmlFor="fileInput">
                <i className="settingsPPIcon fa-solid fa-user"></i>
              </label>
              <input type="file" id='fileInput' style={{ display: "none" }}  onChange={(e) => { setFile(e.target.files[0]) }} />
            </div>

            <label>Username</label>
            <input type="text" placeholder={user.others.username} style={{ "padding": "1%", "paddingLeft": "3%" }} onChange={(e) => { setUsername(e.target.value) }} />
            <label>Email</label>
            <input type="email" placeholder={user.others.email} style={{ "padding": "1%", "paddingLeft": "3%" }} onChange={(e) => { setEmail(e.target.value) }} />
            <label>Password</label>
            <input type="password" style={{ "padding": "1%", "paddingLeft": "3%" }} onChange={(e) => setPassword(e.target.value)} />


            <button className="settingsSubmit" type='submit' >Update</button>
          </form>
          <br />
          {success && (<span style={{ "color": "green", marginLeft: "49%", marginTop: "-28px", position: "absolute" }}>Profile Updated !!</span>)}
        </div>
        <Sidebar />
      </div>

    </>
  )
}

export default Settings