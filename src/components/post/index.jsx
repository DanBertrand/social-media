import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Cookies from 'js-cookie';
import Likes from '../likes/likes'

const Post = ( { post, handleDelete, handleLikeChange } ) => {
  const logged = useSelector(state => state.logged);
  const user = useSelector(state => state.userInfos);
  const cookie = Cookies.get();


  const handleLikes = (e) => {
    
      e.preventDefault();
      let previousLikes = [];

      fetch(`http://localhost:1337/posts/${post.id}`, {
        method: 'GET',
        headers: {
        'Authorization': `Bearer ${cookie.token}`, 
        'Content-Type': 'application/json'
        },
      })
      .then((response) => response.json())
      .then((response) => {
        previousLikes = response.likes

        const find = previousLikes.filter(userlike => userlike.id === user.id)

        if(find.length === 0){

        const data = {
          likes: [...previousLikes, user.id]
        }
        fetch(`http://localhost:1337/posts/${post.id}`, {
          method: 'PUT',
          headers: {
          'Authorization': `Bearer ${cookie.token}`, 
          'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        })
        .then((response) => response.json())
        .then((response) => {

          handleLikeChange()
          return
        })
        }
        if(find.length > 0){
          const removedLike = previousLikes.filter(userlike => userlike.id !== user.id);
          const data = {
            likes: removedLike
          }
          fetch(`http://localhost:1337/posts/${post.id}`, {
            method: 'PUT',
            headers: {
            'Authorization': `Bearer ${cookie.token}`, 
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
          })
          .then((response) => response.json())
          .then(() => {handleLikeChange()})
        }
      })  
  }

  return (
    <div>
        <h2>{post.text}</h2>
        {logged ? 
          <>
        <Link to={`/user/${post.user.id}`} >
          <p>{post.user.username}</p>
            </Link>
            <Likes post={post} handleLikes={handleLikes} />
            {post.user.id === user.id && <button type="button" onClick={e => {handleDelete(post.id)}} >Delete</button>}
          </>
        
        : null}
      </div>
  )
}
 
export default Post
 