import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import Cookies from 'js-cookie';
import { useDispatch } from 'react-redux';
import { LOGIN } from '../../redux/actions/logActions';
import { UPDATE } from '../../redux/actions/logActions'
import LoginForm from '../../components/loginForm/index';

const Login = () => {
  
  const dispatch = useDispatch();
  
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const [redirect, setRedirect] = useState(false);
  const [errors, setErrors] = useState('');
  
  const handleIdentifier = (e) => {
    setIdentifier(e)
  }
  const handlePassword= (e) => {
    setPassword(e)
  }
  const data = {
    identifier: identifier,
    password: password
  };
  
  const logIn = (e) => {
    e.preventDefault();
    fetch('http://localhost:1337/auth/local', 
      {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
      }
    )
    .then((response) => response.json())
    .then((response) => {
      if (response.user && response.user.confirmed) {
        dispatch(LOGIN());
        Cookies.set('token', response.jwt);
        setRedirect(true);
        
        const userInfo = {
          id: response.user.id,
          username: response.user.username,
          email: response.user.email
        }
        dispatch(UPDATE(userInfo));
        window.location.reload(true)
      }
      if(response.error){
        setErrors(response.message[0].messages[0].message);
      }
    })    
  }

  return (
    <>
      {errors && <p> {errors} </p>}
      {redirect ? <Redirect to='/'/> :
      <div>
        <LoginForm  
          logIn={logIn} 
          identifier={identifier} 
          password={password} 
          handleIdentifier={handleIdentifier} 
          handlePassword={handlePassword}
        />
        <p>No account yet ?</p><Link to="/register" >Create an account</Link>
        </div>
      }
    </>
  );
}

export default Login

 