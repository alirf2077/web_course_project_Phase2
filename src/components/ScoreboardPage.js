import React from 'react';
import Sidebar from './Sidebar';
import UserCard from './UserCard';
import Scoreboard from './Scoreboard';

function ScoreboardPage() {
  const username = 'Username';
  const userScore = 1234;
  const sidebarOptions = [
    { label: 'Home', link: '/player' },
    { label: 'Scoreboard', link: '/scoreboard' },
    { label: 'Questions', link: '/question-dashboard' },

  ];
  
  return (
    <div className="scoreboard-page">
      <Sidebar options={sidebarOptions} />

      <div className="main-content">
        <UserCard username={username} score={userScore} />
        <h1>Your Scoreboard</h1>
        <Scoreboard />
      </div>
    </div>
  );
}

export default ScoreboardPage;
