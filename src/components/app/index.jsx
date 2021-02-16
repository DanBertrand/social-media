/* eslint-disable no-unused-vars */
import React from 'react'
import { Link, Switch, BrowserRouter as Router, Route,  useHistory  } from 'react-router-dom'
import NavBar from '../navBar'
import Home from '../../pages/home';
import Register from '../../pages/register';
import Login from '../../pages/login';
import Cookies from 'js-cookie';
import { LOGOUT } from '../../redux/actions/logActions';
import { useDispatch } from 'react-redux';
import Profil from '../../pages/profil'

const App = () => {
    const dispatch = useDispatch()

    const handleLogOut = () => {
        dispatch(LOGOUT());
        Cookies.remove('token');
        window.location.reload(true)
    }

  return (
     <Router>
         <NavBar handleLogOut={handleLogOut} />
         <Switch>
             <Route path="/" exact>
                 <Home />
             </Route>
             <Route path="/register">
                 <Register />
             </Route>
             <Route path="/login">
                 <Login />
             </Route>
             <Route path="/profil">
                 <Profil />
             </Route>
         </Switch>
     </Router>
  )
}
 
export default App
 