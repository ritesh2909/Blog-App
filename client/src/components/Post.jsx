import React from 'react'
import Singlepost from './Singlepost';
import { Link } from "react-router-dom";

function Post(props) {

    const PF = "http://localhost:8000/images/";

    console.log(PF);
    return (
        <>
            <div className="post">
                {props.post.photo && (
                    <img
                        src={PF + props.post.photo}
                        alt=""
                        className="postImg"
                    />
                )}

                <div className="postInfo">
                    <div className="postCats">

                        {props.post.categories.map((c) => {

                            <span className="postCat">{c.name}</span>

                        })}

                        <div className="postCat2">

                            <span className="postDate">{new Date(props.post.createdAt).toDateString()}</span>
                        </div>
                    </div>
                    <Link to={`/post/${props.post._id}`} className='link' > <span className="postTitle">{props.post.title}</span></Link>
                    <hr />
                </div>
                <div className="postDesc">{props.post.description}
                </div>

            </div>
        </>
    )
}

export default Post