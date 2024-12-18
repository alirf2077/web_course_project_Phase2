import React, { useEffect, useState } from 'react';
import ScoreItem from './ScoreItem';

function Scoreboard() {
  const [scores, setScores] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchScores = async () => {
      try {
        setLoading(true);
        const response = await fetch('http://localhost:5000/scoreboard', {

        });

        if (!response.ok) {
          throw new Error(`Error: ${response.status} ${response.statusText}`);
        }

        const data = await response.json();
        setScores(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchScores();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="scoreboard">
      <h3>Leaderboard</h3>
      {scores.map((item, index) => (
        <ScoreItem key={index} player={item.username} score={item.score} />
      ))}
    </div>
  );
}

export default Scoreboard;
