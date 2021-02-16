import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
 
const Register = () => {

  const [userName, setUserName] = useState();
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();
  const [redirect, setRedirect] = useState(false);
  const [errors, setErrors] = useState();
  
  const API  = 'http://localhost:1337/auth/local/register'
  
  const data = {
    username: userName,
    email: email,
    password: password
  };
  
      const register = (e) => {
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
              console.log("Register Worked!")
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
          <form onSubmit={register} >
          <label>User Name</label>
          <input type="text" value={userName} onChange={e => setUserName(e.target.value)} name="userName" ></input><br/>
          <br/>
          <label>Email</label>
          <input type="text" value={email}  onChange={e => setEmail(e.target.value)}  name="email" ></input><br/>
          <br/>
          <label>Password</label>
          <input type="text" value={password}  onChange={e => setPassword(e.target.value)}  name="password" ></input><br/>
          <br/>
          <br/><br/>
        <button type="submit" onClick={e => register(e)} >Submit</button>
        </form>  
    }
     </>
    );
}

 
export default Register
 