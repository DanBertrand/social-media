/* eslint-disable no-unused-vars */
import React from 'react'
import { Link, Switch, BrowserRouter as Router, Route } from 'react-router-dom'
import Home from '../../pages/home';
import Register from '../../pages/register';
import Login from '../../pages/login';
 
const App = () => {
  return (
     <Router>
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
         </Switch>
     </Router>
  )
}
 
export default App
 