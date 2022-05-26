import React from 'react'
import Post from './Post'

function Posts(props) {
  return (
    <>
      <div className="posts">

        {props.posts.map((p) => (
          <Post post = {p} />
        ))}

      </div>
    </>
  )
}

export default Posts