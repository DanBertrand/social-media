import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import Post from '../../components/post/index'

const User = ( { match } ) => {

  const [user, setUser] = useState([])
  const [posts, setPosts] = useState([])
  const userID = match.params.id
  const cookie = Cookies.get();

  const fetchData = () => {
    fetch(`http://localhost:1337/users/${userID}`, {
      method: 'get',
      headers: {
        'Authorization': `Bearer ${cookie.token}`, 
        'Content-Type': 'application/json'
        },
    })
      .then((response) => response.json())
      .then((response) => {
        const { username, email  } = response;
        console.log("RESPONSE: ", response)
        setUser([username, email])
      })
      fetch(`http://localhost:1337/posts?user.id=${userID}`, {
        method: 'get',
        headers: {
          'Authorization': `Bearer ${cookie.token}`, 
          'Content-Type': 'application/json'
          },
      })
        .then((response) => response.json())
        .then((response) => {
          setPosts(response)
          
        })
      }
      
  useEffect(() => {fetchData()}, [])
  
  return (
    <>
      <h3>{user[0]}</h3>
      <h4>{user[1]}</h4>
      {posts && posts.length > 0 ? (posts.map(post => <Post key={post.id} post={post} />)) : <p>This user didn't post anything yet</p>}
    </>
  )
}
 
export default User
