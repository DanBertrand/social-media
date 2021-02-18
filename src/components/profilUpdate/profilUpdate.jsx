import React from 'react'
 
const ProfilUpdate = ( { updateProfile, username, email,  setUsername, setEmail   } ) => {
  return (
    <div className="updateProfile" >
    <form onSubmit={updateProfile} >
      <label>Username</label>
      <input type="text" value={username} onChange={(e)=>{setUsername(e.target.value)}}  name="username" ></input>
      <label>Email</label>
      <input type="text" value={email} onChange={(e)=>{setEmail(e.target.value)}}   name="email" ></input>
      <button type="submit" >Update</button>
    </form>
  </div>
  )
}
 
export default ProfilUpdate
 