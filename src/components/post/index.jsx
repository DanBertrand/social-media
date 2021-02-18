import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Post = ( { post, handleDelete } ) => {
  const logged = useSelector(state => state.logged)
  const user = useSelector(state => state.userInfos)

  console.log("LIKES", post.likes.length)

  return (
    <div>
        <h2>{post.text}</h2>
        {logged ? 
          <>
        <Link to={`/user/${post.user.id}`} >
          <p>{post.user.username}</p>
            </Link>
            <span>{post.likes.length}</span> 
            <button type="button"  >Like</button>
            {post.user.id === user.id && <button type="button" onClick={e => {handleDelete(post.id)}} >Delete</button>}
          </>
        
        : null}
      </div>
  )
}
 
export default Post
 