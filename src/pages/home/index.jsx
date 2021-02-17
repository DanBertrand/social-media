import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import CreatePost from '../../components/createPost/index';
import Post from '../../components/post/index';
import Cookies from 'js-cookie';

const Home = () => {

  const userInfos = useSelector(state => state.userInfos);

  const [newPost, setNewPost] = useState(0);
  const [input, setInput] = useState('');
  const [postsList, setpostsList] = useState([]);
  const [errors, setErrors] = useState('');

  const handleChange = (e) => {
    setErrors('')
    setInput(e)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if(input.length > 3){

      setNewPost(newPost + 1)
      const cookie = Cookies.get();
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
      });
      return
    }
    setErrors("Your post need at least 3 characters")
  }

  const fetchList = () => {
    fetch('http://localhost:1337/posts', {method: 'get'})
      .then((response) => response.json())
      .then((response) => {
        console.log(response)
        setpostsList(response)
      })
  }

  useEffect(()=>{fetchList()}, [newPost])
  

  return (
    <>
      <h2>Home</h2>
      <CreatePost handleSubmit={handleSubmit} handleChange={handleChange} errors={errors} />
      {postsList.length && postsList.map(post => <Post key={post.id} post={post} />)}   
   
    </>
  )
}
 
export default Home
 