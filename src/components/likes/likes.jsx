import './style.scss'
import React from 'react'
import { useSelector } from 'react-redux';

const Likes = ( { post, handleLikes } ) => {
    const user = useSelector(state => state.userInfos);
    
    const like = post.likes.filter(like => like.id === user.id)

  return (
     <>
        <span>{post.likes.length}</span> 
        {like.length !== 0 ? <button className="unlike" type="button" onClick={handleLikes} >Unlike</button> : <button className="like" type="button" onClick={handleLikes} >Like</button>}
     </>
  )
}
 
export default Likes
 