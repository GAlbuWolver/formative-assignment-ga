import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HistoryPage from "./pages/History";
import TeamsPage from "./pages/PlayerTeams";
import GetBetterPage from "./pages/GetBetter";

function App() {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<HistoryPage />} />
            <Route path="/teams" element={<TeamsPage />} />
            <Route path="/getbetter" element={<GetBetterPage />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}


export default App;
