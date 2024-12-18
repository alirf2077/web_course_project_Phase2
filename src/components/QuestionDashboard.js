import React from 'react';
import Sidebar from './Sidebar';
import UserCard from './UserCard';
import OptionsContainer from './OptionsContainer';

function QuestionDashboard() {
  const username = "Username"; // Replace with dynamic data if needed
  const score = 1234; // Replace with dynamic data if needed
  const sidebarOptions = [
    { label: 'Home', link: '/player' },
    { label: 'Scoreboard', link: '/scoreboard' },
    { label: 'Questions', link: '/question-dashboard' },

  ];
  return (
    <div className="question-dashboard">
      <Sidebar options={sidebarOptions} />
      <div className="main-content">
        <UserCard username={username} score={score} />
        <h1>Question Dashboard</h1>
        <OptionsContainer />
      </div>
    </div>
  );
}

export default QuestionDashboard;
