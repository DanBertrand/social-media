import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
 
const LogButton = ( { handleLogOut } ) => {
    const logged = useSelector(state => state.loggedReducer.logged);
  return (
    (!logged ?  <Link to="/login" ><button type="button" >Log in</button></Link> :  <Link to="/" ><button type="button" onClick={handleLogOut} >Log Out</button></Link>)
  )
}
 
export default LogButton
 