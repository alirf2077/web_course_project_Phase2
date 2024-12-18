import React from 'react';

function UserCard({ username, score }) {
  return (
    <div className="user-card">
      <h3>Welcome, {username}!</h3>
      <p>Score: <span id="user-score">{score}</span></p>
    </div>
  );
}

export default UserCard;
