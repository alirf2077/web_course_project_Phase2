import React from 'react';
import Sidebar from './Sidebar';
import UserCard from './UserCard';
import Scoreboard from './Scoreboard';

function ScoreboardPage() {
  const username = 'Username';
  const userScore = 1234;

  return (
    <div className="scoreboard-page">
      <Sidebar />
      <div className="main-content">
        <UserCard username={username} score={userScore} />
        <h1>Your Scoreboard</h1>
        <Scoreboard />
      </div>
    </div>
  );
}

export default ScoreboardPage;
