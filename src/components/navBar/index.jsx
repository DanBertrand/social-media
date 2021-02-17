import React from 'react';
import './styles.scss';
import { useHistory } from "react-router-dom";
import LogButton from '../logButton/logButton'

const NavBar = ( {handleLogOut} ) => {
  const history = useHistory();

  function handleClick() {
    history.push("/profile");
  }
  return (
     <nav>
         <h1>The SOcial Shit</h1>
         <LogButton handleLogOut={handleLogOut} />
         <button type="button" onClick={handleClick}>
      Profile
    </button>
     </nav>
  )
}
 
export default NavBar
 