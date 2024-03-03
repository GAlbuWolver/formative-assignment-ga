

import React from 'react';
import {Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './Header.css'

const Header = () => {
  const auth = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    auth.logout();
    navigate('/login');
  };

  return (
    <header className='header'>
       <nav>
        <ul>
          <h1>Basketball World</h1>
          <li><Link to="/">History</Link></li>
          <li><Link to="/teams">Teams</Link></li>
          <li><Link to="/getbetter">Get Better</Link></li>
        </ul>
        
      </nav>
      {auth.authData && (
        <button onClick={handleLogout} className="sign-out-button">Sign Out</button>
      )}
    </header>
  );
};

export default Header;
