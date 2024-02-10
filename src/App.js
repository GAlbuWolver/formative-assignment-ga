import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import HistoryPage from './pages/History';
import TeamsPage from './pages/PlayerTeams';
import GetBetterPage from './pages/GetBetter';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/history" element={<HistoryPage />} />
          <Route path="/teams" element={<TeamsPage />} />
          <Route path="/getbetter" element={<GetBetterPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
