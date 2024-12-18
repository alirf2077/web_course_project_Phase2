import React from 'react';

function ScoreItem({ player, score }) {
  return (
    <div className="score-item">
      <p>
        <strong>{player}</strong> - Score: {score}
      </p>
    </div>
  );
}

export default ScoreItem;
