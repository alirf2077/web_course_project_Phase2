import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import TrendingQuestions from './components/TrendingQuestions';
import Welcome from './components/Welcome';
import Login from './components/Login';
import './App.css';
import './styles/shared_styles.css';
import './styles/home_styles.css';
import './styles/login_styles.css';


function App() {
  return (
    <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <div className="main-content">

                <Sidebar />

                <button id="loginBtn" className="btn btn-login">
                  <Link to="/login" className="text-decoration-none text-white">Login</Link>
                </button>
                <Welcome />
                <TrendingQuestions />
                </div>

              </>
            }
          />
          <Route path="/login" element={<Login />} />
        </Routes>
    </Router>
  );
}

export default App;
