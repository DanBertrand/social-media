import React from 'react';

const LoginForm = ({
  logIn, identifier, password, handleIdentifier, handlePassword,
}) => (
  <>
    <h2>LOG IN</h2>
    <form onSubmit={logIn}>
      <label>
        User Name
        <input type="text" value={identifier} onChange={(e) => handleIdentifier(e.target.value)} name="userName" />
      </label>
      <br />
      <br />
      <label>
        Password
        <input type="password" value={password} onChange={(e) => handlePassword(e.target.value)} name="password" />
      </label>
      <br />
      <br />
      <br />
      <br />
      <button type="submit">Submit</button>
    </form>
  </>
);

export default LoginForm;
