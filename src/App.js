import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import TrendingQuestions from './components/TrendingQuestions';
import Welcome from './components/Welcome';
import Login from './components/Login';
import PlayerPage from './components/PlayerPage';
import './App.css';
import './styles/shared_styles.css';
import './styles/home_styles.css';
import './styles/login_styles.css';
import './styles/player_styles.css';
import HomePage from './components/HomePage'



function App() {
  return (
    <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <HomePage />
              </>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/player" element={<PlayerPage />
} />

        </Routes>
    </Router>
  );
}

export default App;
