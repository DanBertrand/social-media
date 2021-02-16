import React, { useState } from 'react'
import { Redirect } from 'react-router-dom';

const Login = () => {
  const [identifier, setidentifier] = useState();
  const [password, setPassword] = useState();
  const [redirect, setRedirect] = useState(false);
  const [errors, setErrors] = useState();
  
  const API  = 'http://localhost:1337/auth/local'
  
  const data = {
    identifier: identifier,
    password: password
  };
  
      const logIn = (e) => {
        e.preventDefault();
        console.log(e)
         fetch(API, {
          method: 'post',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        })
        .then((response) => response.json())
        .then((response) => {
  
          console.log(response)
  
            if (response.user && response.user.confirmed) {
              console.log("logIn Worked!")
              console.log('User ID: ', response.user.id)
              setRedirect(true)
             
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
    }
     </>
    );
}

 
export default Login
 