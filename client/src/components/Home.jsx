import React, { useState, useEffect } from 'react'
import Sidebar from './Sidebar';
import Header from './Header';
import Posts from './Posts';
import axios from 'axios';
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';

function Home() {
  const [post, setPost] = useState([]);
  const {search} = useLocation();
  

  useEffect(()=>{
    const fetchPosts = async () =>{

      const res = await axios.get("http://localhost:8000/api/posts" + search);
      setPost(res.data);
    }
    
    fetchPosts();
    

  },[search])

  return (
    <>

      <Header />
      <div className="home">
        <Posts posts = {post} />
        <Sidebar />

      </div>

    </>
  )
}

export default Home