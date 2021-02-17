import React from 'react'
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom'
import NavBar from '../navBar'
import Home from '../../pages/home';
import Register from '../../pages/register';
import Login from '../../pages/login';
import Cookies from 'js-cookie';
import { LOGOUT } from '../../redux/actions/logActions';
import { useDispatch } from 'react-redux';
import Profile from '../../pages/profile/index'
import { LOGIN } from '../../redux/actions/logActions';
import { UPDATE } from '../../redux/actions/logActions'

const App = () => {

    const dispatch = useDispatch()

    const savedSession = () => {
        const cookie = Cookies.get();
        if(cookie.token){
          dispatch(LOGIN())
          fetch('http://localhost:1337/users/me', {
            method: 'get',
            headers: {
              'Authorization': `Bearer ${cookie.token}`, 
              'Content-Type': 'application/json'
            },
          })
          .then((response) => response.json())
          .then((response) => {
            console.log("RESPONSE", response)
            const userInfo = {
                id: response.id,
                username: response.username,
                email: response.email
              }
              dispatch(UPDATE(userInfo));
          })
        }
        else{
          dispatch(LOGOUT())
        }
      }

    savedSession()
    
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
                 <Home savedSession={savedSession} />
             </Route>
             <Route path="/register">
                 <Register />
             </Route>
             <Route path="/login">
                 <Login />
             </Route>
             <Route path="/profile">
                 <Profile savedSession={savedSession} />
             </Route>
         </Switch>
     </Router>
  )
}
 
export default App
 