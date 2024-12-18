import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Login from './components/Login';
import PlayerPage from './components/PlayerPage';
import HomePage from './components/HomePage'
import QuestionDashboard from './components/QuestionDashboard';
import ScoreboardPage from './components/ScoreboardPage';
import DesignerDashboard from './components/DesignerDashboard';
import CategoryManagement from './components/CategoryManagement';
import QuestionManagement from './components/QuestionManagement';
import './App.css';
import './styles/shared_styles.css';
import './styles/home_styles.css';
import './styles/login_styles.css';
import './styles/player_styles.css';
import './styles/user_question_management_styles.css'
import './styles/scoreboard_styles.css'
import './styles/designer_dashboard_styles.css'
import './styles/category_management_styles.css'
import './styles/question_management_styles.css'


function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/login" element={<Login />} />
          <Route path="/player" element={<PlayerPage />}/>
          <Route path="/question-dashboard" element={<QuestionDashboard />} />
          <Route path="/scoreboard" element={<ScoreboardPage />} />
          <Route path="/designer-dashboard" element={<DesignerDashboard />} />
          <Route path="/category-management" element={<CategoryManagement />} />
          <Route path="/question-management" element={<QuestionManagement />} />


        </Routes>
    </Router>
  );
}

export default App;
