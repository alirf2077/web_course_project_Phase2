import React, { useEffect, useState } from 'react';
import ScoreItem from './ScoreItem';

function Scoreboard() {
  const [scores, setScores] = useState([]); // State to hold the scores
  const [loading, setLoading] = useState(true); // State to track loading
  const [error, setError] = useState(null); // State to track errors

  // Fetch scores from the API
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
        setScores(data); // Set the scores state with the API response
      } catch (err) {
        setError(err.message); // Handle errors
      } finally {
        setLoading(false); // Stop loading
      }
    };

    fetchScores();
  }, []);

  // Render loading state
  if (loading) {
    return <div>Loading...</div>;
  }

  // Render error state
  if (error) {
    return <div>Error: {error}</div>;
  }

  // Render the leaderboard
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
