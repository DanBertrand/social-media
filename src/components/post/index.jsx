import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Post = ( { post } ) => {
  const logged = useSelector(state => state.logged)
  return (
    <>
      <h2>{post.text}</h2>
      {logged ? 
        <>
          <Link to={`/user/${post.user.id}`} >{post.user.username}</Link>
          <span>{post.like}</span> 
          <button type="button" >Like</button>
        </>
      : null}
    </>
     
  )
}
 
export default Post
 