import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; 

function Header() {
  return (
    <header className="header">
      <h1>My Basketball App</h1>
      <nav>
        <ul>
          <li><Link to="/">History</Link></li>
          <li><Link to="/teams">Teams</Link></li>
          <li><Link to="/getbetter">Get Better</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
