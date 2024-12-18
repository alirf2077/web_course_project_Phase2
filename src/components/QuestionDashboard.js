import React from 'react';
import Sidebar from './Sidebar';
import UserCard from './UserCard';
import OptionsContainer from './OptionsContainer';

function QuestionDashboard() {
  const username = "Username"; // Replace with dynamic data if needed
  const score = 1234; // Replace with dynamic data if needed

  return (
    <div className="question-dashboard">
      <Sidebar />
      <div className="main-content">
        <UserCard username={username} score={score} />
        <h1>Question Dashboard</h1>
        <OptionsContainer />
      </div>
    </div>
  );
}

export default QuestionDashboard;
