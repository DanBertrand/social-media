import React from 'react'
 
const Profil = () => {

  const myToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjEzNDg1MTI3LCJleHAiOjE2MTM1NzE1Mjd9.2g2x1jjuYvb2MJnOp3ydSayUMH9aWhGYwKc7KVlMnvs"

  // const data = {
  //   username: userName,
  //   email: email,
  //   password: password
  // };

  fetch('API_URL', {
    method: 'post',
    headers: {
      'Authorization': `Bearer ${myToken}`, 
      'Content-Type': 'application/json'
    },
    // body: JSON.stringify(data)
  });

  return (
     <h2>My Profil</h2>
  )
}
 
export default Profil
 