import './styles.scss';
import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import LogButton from '../logButton/logButton';

const NavBar = ({ handleLogOut }) => {
  const logged = useSelector((state) => state.logged);
  const user = useSelector((state) => state.userInfos);
  const history = useHistory();

  function handleClick() {
    history.push('/profile');
  }
  return (
    <nav>
      <Link to="/"><h1>The Social Network</h1></Link>
      {logged && (
      <p>
        Logged as
        {' '}
        {user.username}
      </p>
      )}
      <LogButton handleLogOut={handleLogOut} />
      <button type="button" onClick={handleClick}>
        Profile
      </button>
    </nav>
  );
};

export default NavBar;
