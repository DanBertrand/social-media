import React, { useSelector } from 'react-redux'
 
const Profil = () => {
  const userInfos = useSelector(state => state.userInfos);
 
  return (
  <>
     <h2>My Profil</h2>
     <p>ID: {userInfos.id}</p>
     <p>User Name: {userInfos.username}</p>
     <p>Email: {userInfos.email}</p>
     </>
  )
}
 
export default Profil
 