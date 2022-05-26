import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { Context } from '../context/Context';


function Sidebar(props) {

  const { user } = useContext(Context);

  const [cats, setCats] = useState([]);

  useEffect(() => {
    const fetchCats = async () => {

      const res = await axios.get("http://localhost:8000/api/categories");
      setCats(res.data);
    }
    fetchCats();
  }, [])


  return (

    <>
      <div className="sidebar">
        <div className="sidebarItem">
          <span className='sidebarTitle'>ABOUT ME</span>
          <img
            src="https://png.pngtree.com/element_our/png/20181206/female-avatar-vector-icon-png_262142.jpg"
            alt=""
            className=''
          />
          <p>Simple and Easy for your audience to learn about you, simple for you to set up</p>
        </div>

        <div className="sidebarItem">
          <span className='sidebarTitle'>CATEGORIES</span>

          <ul className="sidebarList">
            {cats.map((c) => {

              <Link className='link' to={`/?cat=${c.name}`}>
                <li className="sidebarListItem">{c.name}</li>
                {console.log(c.name)}
              </Link>
            })}
          </ul>

        </div>

        <div className="sidebarItem">
          <span className='sidebarTitle'>FOLLOW US</span>
          <div className="sidebarSocial">
            <i className="sidebarIcon fa-brands fa-facebook-square"></i>
            <i className="sidebarIcon fa-brands fa-twitter-square"></i>
            <i className="sidebarIcon fa-brands fa-pinterest-square"></i>
            <i className="sidebarIcon fa-brands fa-instagram-square"></i>
          </div>
        </div>


      </div>
    </>

  )
}

export default Sidebar