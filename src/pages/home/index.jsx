import React from 'react';
import { useSelector } from 'react-redux';
import Cookies from 'js-cookie';
import { useDispatch } from 'react-redux';
import { LOGIN } from '../../redux/actions/logActions';
import { LOGOUT } from '../../redux/actions/logActions';
 
const Home = ( ) => {
  const logged = useSelector(state => state.loggedReducer.logged);
  const dispatch = useDispatch();
    
  const savedSession = () => {
    const cookie = Cookies.get();
    console.log('Cookie: ', cookie)

    if(cookie.token){
      dispatch(LOGIN())
    }
    else{
      dispatch(LOGOUT())
    }
  }
  savedSession()

    console.log("Logged: ", logged)

  return (
    <>
     <div>Home</div>
     {!logged ? <p>Please Log In or create an account</p> : <p>You logged In !!</p> }
     
     </>
  )
}
 
export default Home
 