import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import CreatePost from '../../components/createPost/index';
import Post from '../../components/post/index';
import Cookies from 'js-cookie';
import { sort } from './functions'

const Home = () => {

  const cookie = Cookies.get();

  const userInfos = useSelector(state => state.userInfos);
  const logged = useSelector(state => state.logged)

  const [postAction, setpostAction] = useState(0);
  const [input, setInput] = useState('');
  const [postsList, setpostsList] = useState([]);
  const [errors, setErrors] = useState('');

  const handleChange = (e) => {
    setErrors('')
    setInput(e)
  }

  const handleDelete = (id) => {
    console.log("DELETE post : ", id);
    fetch(`http://localhost:1337/posts/${id}`, {
      method: 'DELETE',
      headers: {
      'Authorization': `Bearer ${cookie.token}`, 
      'Content-Type': 'application/json'
      },
    })
    .then((response) => response.json())
    .then(() => {fetchList()})
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!logged){
      setErrors('Please register or log in before adding a post');
      return
    }
    if(input.length > 3){

      setpostAction(postAction + 1)

      const data = {
          text: input,
          user: userInfos.id
          };
      fetch('http://localhost:1337/posts', {
          method: 'post',
          headers: {
          'Authorization': `Bearer ${cookie.token}`, 
          'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
      })
      .then( () =>{fetchList()})
      return
    }
    setErrors("Your post need at least 3 characters")
  }

  const fetchList = () => {
    fetch('http://localhost:1337/posts', {method: 'get'})
      .then((response) => response.json())
      .then((response) => {
        setpostsList(sort(response))
      })
  }

 useEffect(()=>{fetchList()}, [])

  return (
    <>
      <h2>Home</h2>
      <p>Welcome on My Social Network. This website is a training to Redux and React. We use auth and routing to create a small social media website.</p>
      <CreatePost handleSubmit={handleSubmit} handleChange={handleChange} errors={errors} />
      {postsList.length && postsList.map(post => <Post key={post.id} post={post} handleDelete={handleDelete} />)}   
   
    </>
  )
}
 
export default Home
 