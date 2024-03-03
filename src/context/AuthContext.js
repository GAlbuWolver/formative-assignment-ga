import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [authData, setAuthData] = useState(null);

  const login = (userData) => {
    setAuthData(userData);
    localStorage.setItem('authData', JSON.stringify(userData));
  };

  const logout = () => {
    setAuthData(null);
    localStorage.removeItem('authData');
  };

  const value = { authData, login, logout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
