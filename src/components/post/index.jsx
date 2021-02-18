import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Post = ( { post, handleDelete } ) => {
  const logged = useSelector(state => state.logged)
  const user = useSelector(state => state.userInfos)



  // console.log("POST, ", post)
  // console.log("User ID, ", user.id)

  return (
    <div>
        <h2>{post.text}</h2>
        {logged ? 
          <>
        <Link to={`/user/${post.user.id}`} >
          <p>{post.user.username}</p>
            <span>{post.like}</span> 
            <button type="button" >Like</button>
            </Link>
            {post.user.id === user.id && <button type="button" onClick={e => {handleDelete(post.id)}} >Delete</button>}
          </>
        
        : null}
      </div>
  )
}
 
export default Post
 