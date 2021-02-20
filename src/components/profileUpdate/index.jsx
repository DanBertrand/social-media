import React from 'react';

const ProfileUpdate = ({
  updateProfile, username, email, setUsername, setEmail,
}) => (
  <div className="updateProfile">
    <form onSubmit={updateProfile}>
      <label>Username</label>
      <input type="text" value={username} onChange={(e) => { setUsername(e.target.value); }} name="username" />
      <label>Email</label>
      <input type="text" value={email} onChange={(e) => { setEmail(e.target.value); }} name="email" />
      <button type="submit">Update</button>
    </form>
  </div>
);

export default ProfileUpdate;
