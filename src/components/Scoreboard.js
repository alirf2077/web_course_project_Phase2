import React from 'react';
import ScoreItem from './ScoreItem';

function Scoreboard() {
  const scores = [
    { player: 'Player 1', score: 1500 },
    { player: 'Player 2', score: 1400 },
    { player: 'Player 3', score: 1300 },
    { player: 'Player 4', score: 1200 },
    { player: 'Player 5', score: 1100 },
  ];

  return (
    <div className="scoreboard">
      <h3>Leaderboard</h3>
      {scores.map((item, index) => (
        <ScoreItem key={index} player={item.player} score={item.score} />
      ))}
    </div>
  );
}

export default Scoreboard;
