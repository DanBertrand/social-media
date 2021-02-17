import React from 'react'
 
const LoginForm = ( { logIn, identifier, password, handleIdentifier, handlePassword } ) => {
  return (
   <>
    <h2>LOG IN</h2>
      <form onSubmit={logIn} >
        <label>User Name</label>
        <input type="text" value={identifier} onChange={e => handleIdentifier(e.target.value)} name="userName" ></input><br/>
        <br/>
        <label>Password</label>
        <input type="text" value={password}  onChange={e => handlePassword(e.target.value)}  name="password" ></input><br/>
        <br/>
        <br/><br/>
        <button type="submit">Submit</button>
      </form> 
  </>
  );
}
 
export default LoginForm
 