import axios from 'axios';
import React, { useState } from 'react'
import { useContext } from 'react';
import { Context } from '../context/Context';

function Write() {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [file, setFile] = useState(null);

    const { user } = useContext(Context);


    const handleSubmit = async (e) => {
        e.preventDefault();
        const newPost = {
            title,
            description,
            username: user.others.username,
        }
        console.log(newPost);
        console.log(user.others.username);
        if (file) {
            const data = new FormData();
            const fileName = Date.now() + file.name;
            data.append("name", fileName);
            data.append("file", file);
            newPost.photo = fileName;
            try {

               const out =  await axios.post("http://localhost:8000/api/upload", data);
               console.log(out);


            } catch (error) {
                console.error(error.response.data);

            }
        }

        try {
            const res = await axios.post("http://localhost:8000/api/posts/newpost", newPost);
            window.location.replace("/post"+ "/" + res.data._id);
            console.log(res);
        } catch (error) {
            console.log(error);
        }

    }

    return (
        <>
            <div className="write">

                {file &&(
                    <img
                        className='writeImg'
                        src={URL.createObjectURL(file)}
                        alt=""
                    />
                )}
                <form className="writeForm" onSubmit={handleSubmit} >
                    <div className="writeFormGroup">
                        <label htmlFor="fileInput">
                            <i className="writeIcon fa-solid fa-file-circle-plus"></i>
                        </label>
                        <input type="file" id='fileInput' style={{ display: "none" }} onChange={(e) => { setFile(e.target.files[0]) }} />
                        <input type="text" placeholder='Title' className='writeInput' autoFocus={true} onChange={e => { setTitle(e.target.value) }} />
                    </div>

                    <div className="writeFormGroup">
                        <textarea
                            placeholder='Tell Your Story...'
                            type="text"
                            className='writeInput writeText'
                            onChange={e => { setDescription(e.target.value) }}
                        ></textarea>
                    </div>

                    <button className="writeSubmit" type='submit'>Publish</button>

                </form>
            </div>
        </>
    )
}

export default Write