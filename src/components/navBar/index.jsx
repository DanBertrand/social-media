import React from 'react';
import './styles.scss';
import { Link, useHistory } from "react-router-dom";
import LogButton from '../logButton/logButton'

const NavBar = ( {handleLogOut} ) => {
  const history = useHistory();

  function handleClick() {
    history.push("/profile");
  }
  return (
     <nav>
         <Link to="/" ><h1>The SOcial Shit</h1></Link>
         <LogButton handleLogOut={handleLogOut} />
         <button type="button" onClick={handleClick}>
      Profile
    </button>
     </nav>
  )
}
 
export default NavBar
 