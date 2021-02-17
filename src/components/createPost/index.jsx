import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Cookies from 'js-cookie';

const CreatePost = () => {

  const [input, setInput] = useState('');
  const userInfos = useSelector(state => state.userInfos)

  const handleSubmit = () => {
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
  }
      
  return (
      <>
        <div>CreatePost</div>
        <form onSubmit={handleSubmit} >
            <input type="text" onChange={e => setInput(e.target.value)} ></input>
            <button type="submit" >Post</button>
        </form>
      </>
  )
}
 
export default CreatePost
 