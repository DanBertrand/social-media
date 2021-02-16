import React from 'react';
import './styles.scss';

import LogButton from '../logButton/logButton'

 
const NavBar = ( {handleLogOut} ) => {

  return (
     <nav>
         <h1>The SOcial Shit</h1>
         <LogButton handleLogOut={handleLogOut} />
     </nav>
  )
}
 
export default NavBar
 