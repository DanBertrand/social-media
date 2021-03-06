import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import Cookies from 'js-cookie';
import { useDispatch } from 'react-redux';
import { UPDATE, LOGIN } from '../../redux/actions/logActions';

const Register = () => {
  const dispatch = useDispatch();

  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [redirect, setRedirect] = useState(false);
  const [errors, setErrors] = useState('');

  const data = {
    username: userName,
    email,
    password,
  };

  const register = (e) => {
    e.preventDefault();

    fetch('http://localhost:1337/auth/local/register', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((response) => {
        if (response.user && response.user.confirmed) {
          const userInfo = {
            id: response.user.id,
            username: response.user.username,
            email: response.user.email,
          };
          Cookies.set('token', response.jwt);
          dispatch(LOGIN());
          dispatch(UPDATE(userInfo));
          setRedirect(true);
        }
        if (response.error) {
          setErrors(response.message[0].messages[0].message);
        }
      });
  };
  return (
    <>
      {errors && (
      <p>
        {' '}
        {errors}
        {' '}
      </p>
      )}
      {redirect ? <Redirect to="/" />
        : (
          <>
            <h2>REGISTER</h2>
            <form onSubmit={register}>
              <label>User Name</label>
              <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} name="userName" />
              <br />
              <br />
              <label>Email</label>
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} name="email" />
              <br />
              <br />
              <label>Password</label>
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} name="password" />
              <br />
              <br />
              <br />
              <br />
              <button type="submit" onClick={(e) => register(e)}>Submit</button>
            </form>
          </>
        )}
    </>
  );
};

export default Register;
