/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import {
  Redirect, Switch, BrowserRouter as Router, Route,
} from 'react-router-dom';
import Cookies from 'js-cookie';
import { useDispatch, useSelector } from 'react-redux';
import NavBar from '../navBar';
import Home from '../../pages/home';
import Register from '../../pages/register';
import Login from '../../pages/login';
import { LOGOUT, LOGIN, UPDATE } from '../../redux/actions/logActions';
import Profile from '../../pages/profile/index';

import User from '../../pages/user/index';

const App = () => {
  const dispatch = useDispatch();
  const logged = useSelector((state) => state.logged);

  const savedSession = () => {
    const cookie = Cookies.get();
    if (cookie.token) {
      dispatch(LOGIN());
      fetch('http://localhost:1337/users/me', {
        method: 'get',
        headers: {
          Authorization: `Bearer ${cookie.token}`,
          'Content-Type': 'application/json',
        },
      })
        .then((response) => response.json())
        .then((response) => {
          const userInfo = {
            id: response.id,
            username: response.username,
            email: response.email,
          };
          dispatch(UPDATE(userInfo));
        });
    } else {
      dispatch(LOGOUT());
    }
  };

  savedSession();

  const handleLogOut = () => {
    dispatch(LOGOUT());
    Cookies.remove('token');
    window.location.reload(true);
  };

  const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={(props) => (
        logged ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: '/login' }} />
        )
      )}
    />
  );

  const AlreadyLogged = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={(props) => (
        logged ? (
          <Redirect to={{ pathname: '/' }} />
        ) : (
          <Component {...props} />
        )
      )}
    />
  );

  return (
    <Router>
      <NavBar handleLogOut={handleLogOut} />
      <Switch>
        <Route path="/" exact>
          <Home savedSession={savedSession} />
        </Route>

        <AlreadyLogged path="/register" component={Register} />
        <AlreadyLogged path="/login" component={Login} />
        <PrivateRoute path="/profile" component={Profile} />
        <Route path="/user/:id" component={User} />

      </Switch>
    </Router>
  );
};

export default App;
