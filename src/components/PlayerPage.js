import React from 'react';
import Sidebar from './Sidebar';
import UserCard from './UserCard';
import TrendingQuestions from './TrendingQuestions';

function PlayerPage() {
  const username = "Username"; // Replace with dynamic data if needed
  const score = 1234; // Replace with dynamic data if needed

  return (
    <div className="player-page">
      <Sidebar />
      <div className="main-content">
        <UserCard username={username} score={score} />
        <h1>Your Dashboard</h1>
        <TrendingQuestions />
      </div>
    </div>
  );
}

export default PlayerPage;
