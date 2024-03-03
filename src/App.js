import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import Header from './components/Header';
import Footer from './components/Footer';
import HistoryPage from './pages/History';
import TeamsPage from './pages/PlayerTeams';
import GetBetterPage from './pages/GetBetter';
import LoginPage from './pages/LoginPage';

const ProtectedRoute = ({ children }) => {
  const { authData } = useAuth();
  return authData ? children : <Navigate to="/login" replace />;
};

const AppContent = () => {
  const { pathname } = useLocation();
  const { authData } = useAuth();

  return (
    <div className="app-wrapper">
      {pathname !== '/login' && <Header />}
      <div className="content">
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<ProtectedRoute><HistoryPage /></ProtectedRoute>} />
          <Route path="/teams" element={<ProtectedRoute><TeamsPage /></ProtectedRoute>} />
          <Route path="/getbetter" element={<ProtectedRoute><GetBetterPage /></ProtectedRoute>} />
        </Routes>
      </div>
      {pathname !== '/login' && <Footer />}
    </div>
  );
};

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="*" element={<AppContent />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
