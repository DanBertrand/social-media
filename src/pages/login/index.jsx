import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import Cookies from 'js-cookie';
import { useDispatch } from 'react-redux';
import { LOGIN } from '../../redux/actions/logActions';

const Login = () => {

  const dispatch = useDispatch();

  const [identifier, setidentifier] = useState();
  const [password, setPassword] = useState();
  const [redirect, setRedirect] = useState(false);
  const [errors, setErrors] = useState();
  
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

        // console.log("logIn Worked!");
        // console.log('User ID: ', response.user.id);
        
        dispatch(LOGIN());
        Cookies.set('token', response.jwt);
        setRedirect(true);
        
      }
      if(response.error){
        console.log("Failed", response.message[0].messages[0].message)
        setErrors(response.message[0].messages[0].message);
      }
    })    
  }
    return (
      <>
        {errors && <p> {errors} </p>}
        {redirect ? <Redirect to='/'/> :
          <>
            <h2>LOG IN</h2>
              <form onSubmit={logIn} >
                <label>User Name</label>
                <input type="text" value={identifier} onChange={e => setidentifier(e.target.value)} name="userName" ></input><br/>
                <br/>
                <label>Password</label>
                <input type="text" value={password}  onChange={e => setPassword(e.target.value)}  name="password" ></input><br/>
                <br/>
                <br/><br/>
                <button type="submit" onClick={e => logIn(e)} >Submit</button>
              </form> 
              <p>No account yet ?</p><Link to="/register" >Create an account</Link>
          </>
       }
      </>
    );
}

export default Login

 