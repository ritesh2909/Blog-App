import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router';
import { Link } from "react-router-dom";
import { useContext } from 'react';
import { Context } from '../context/Context';

function Singlepost() {

    const { user } = useContext(Context);
    const location = useLocation();
    const path = location.pathname.split("/")[2];
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [updateMode, setUpdateMode] = useState(false);


    const [post, setPost] = useState([])
    // console.log(user);

    useEffect(() => {

        const getPost = async () => {
            const res = await axios.get("http://localhost:8000/api/posts/" + path);
            setPost(res.data);
            setTitle(res.data.title);
            setDescription(res.data.description);
        }
        getPost();
    }, [path])

    const PF = "http://localhost:8000/images/"


    const handleDelete = async () => {

        try {
            await axios.delete("http://localhost:8000/api/posts" + "/" + path, { data: { username: user.others.username } });
            window.location.replace("/");
        } catch (error) {
            
        }
    }
    
    const handleUpdate = async () => {
        try {
            
            await axios.put("http://localhost:8000/api/posts" + "/" + path, {
                username: user.others.username, title, description
            })
            setUpdateMode(false);
            // window.location.reload();
            

        } catch (error) {

            console.log(error);

        }
    }
    return (
        <>
            <div className="singlePost" style={{ "marginTop": "18px" }}>
                <div className="singlePostWrapper">
                    {post.photo && (
                        <img
                            src={PF + post.photo}
                            alt=""
                            className='singlePostImg'
                        />
                    )}

                    

                    {updateMode ? (
                        <div style={{ "marginLeft": "60px", "marginTop": "40px" }} >
                            <label style={{ "marginTop": "20px", "fontWeight": "bold" }} >Title :</label>
                            <input style={{ "marginLeft": "56px" }} type='text' value={title} className="singlePostTitleInput" autoFocus onChange={(e) => { setTitle(e.target.value) }} />
                        </div>

                    ) :
                        (<h1 className="singlePostTitle">
                            {title}

                            {post.username === user.others.username && (
                                <div className="singlePostEdit">
                                    <i className="singlePostIcon fa-solid fa-pen-to-square" onClick={(e) => { setUpdateMode(true) }} ></i>
                                    <i className="singlePostIcon fa-solid fa-trash" onClick={handleDelete} ></i>
                                </div>
                            )}
                        </h1>
                        )}

                    {!updateMode && (


                        <div className="singlePostInfo">

                            <span className='singlePostAuthor'>Author : <b>
                                <Link className='link' to={`/?user=${post.username}`}>
                                    {post.username}

                                </Link>
                            </b> </span>


                            <span className='singlePostDate'>{new Date(post.createdAt).toDateString()} </span>
                        </div>
                    )}


                    {updateMode ? (

                        <div style={{ "marginLeft": "60px", "marginTop": "20px" }} >
                            <label style={{ "marginTop": "20px", "fontWeight": "bold", }} >Description :</label>
                            <textarea style={{ "fontSize": "18px" }} value={description} className='singlePostDescInput' cols={30} rows={10} onChange={(e) => { setDescription(e.target.value) }} />
                        </div>
                    ) : (


                        <div className="singlePostDesc">

                            <p> {description}
                            </p>
                        </div>
                    )}


                    {updateMode &&

                        <button
                            className="singlePostButton"
                            style={{
                                "width": "200px", "padding": "10px 5px ",
                                "color": "white", "backgroundColor": "teal",
                                "border": "none", "cursor": "pointer",
                                "alignContent": "center",
                                "marginLeft": "40%", "marginTop": "10%",
                                "marginRight": "6%", "marginBottom": "40%"
                            }}
                            onClick={handleUpdate}
                        >   Update  </button>
                    }

                </div>
            </div>
        </>
    )
}

export default Singlepost