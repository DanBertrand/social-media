import React from 'react';
import { useSelector } from 'react-redux';
import CreatePost from '../../components/createPost/index'

const Home = () => {
  const logged = useSelector(state => state.logged);
  const userInfos = useSelector(state => state.userInfos);
 
  return (
    <>
     <div>Home</div>
     {!logged ? 
        <p>Please Log In or create an account</p> 
      : 
      <>
        <p>You logged In !!</p> 
        <CreatePost />
      </>
      }


     {userInfos ? <p>{userInfos.email}</p> : <p>You logged In !!</p> }
     
     </>
  )
}
 
export default Home
 