import React, { useState } from 'react';
import ProfilUpdate from '../../components/profilUpdate/profilUpdate'
import { useSelector } from 'react-redux';
import Cookies from 'js-cookie';
 
const Profile = () => {
  const [updating, setUpdating] = useState(false)
  const [updated, setUpdated] = useState(false)
  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')
  const [errors, setErrors] = useState('')
  const user = useSelector(state => state.userInfos);
  const cookie = Cookies.get();

  const updateProfile = (e) => {
    e.preventDefault();
    
    setErrors('')
    if(email.length < 5){setErrors('Email needs more than 4 characters'); return}
    if(username.length < 3){setErrors('Username needs more than 2 characters '); return}
    const data = {
      username: username,
      email: email
    };

    fetch(`http://localhost:1337/users/${user.id}`, {
      method: 'PUT',
      headers: {
      'Authorization': `Bearer ${cookie.token}`, 
      'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then((response) => response.json())
    .then((response) => {
        if(response.statusCode){
          if(response.data[0].messages[0].message){
            setErrors(response.data[0].messages[0].message);
            return
          }
        }
      setErrors('Profile Updated')
      setUpdating(false)
      setUpdated(true)
    })
  }
 
  return (
    <>
      <div className="profile" >
        <h2>My Profil</h2>
        {!updated ? 
            <>
              <p>Username: {user.username}</p>
              <p>Email: {user.email}</p>
            </>
        : 
            <>
              <p>Username: {username}</p>
              <p>Email: {email}</p>
            </>
        }
      </div>
      {!updating && <button type="button" onClick={()=> setUpdating(true)} >Update my profile</button>}
      {errors && <p>{errors}</p>}
      {updating && <ProfilUpdate updateProfile={updateProfile} username={username} email={email} setUsername={setUsername}  setEmail={setEmail}/> }

    </>
  )
}
 
export default Profile
 