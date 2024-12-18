// src/App.js
import React from 'react';
import Sidebar from './components/Sidebar';
import TrendingQuestions from './components/TrendingQuestions';
import './App.css';  // Import global styles
import './styles/shared_styles.css';
import './styles/home_styles.css';
import Welcome from './components/Welcome'; // Import the Welcome component


function App() {
  const handleLoginClick = () => {
    window.location.href = 'login.html';
  };

  return (
    <div className="main-content">
      <Sidebar />
      <button id="loginBtn" className="btn btn-login" onClick={handleLoginClick}>
        Login
      </button>
      <Welcome />

      <TrendingQuestions />
    </div>
  );
}

export default App;
