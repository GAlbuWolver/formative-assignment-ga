import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const auth = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    auth.login({ username });
    navigate('/teams');
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
      <h1>Welcome to Basketball World</h1>
        <h2>Login</h2>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          className="input-modern"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="input-modern"
        />
        <button type="submit" className="button-modern">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
