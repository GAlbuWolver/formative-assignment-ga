import React from 'react';

function Header() {
  return (
    <header>
      <h1>My Basketball App</h1>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/teams">Teams</a></li>
          <li><a href="/players">Players</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
