import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from './Sidebar';
import UserCard from './UserCard';
import TrendingQuestions from './TrendingQuestions';

function PlayerPage() {
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      const token = localStorage.getItem('token');
      const username = localStorage.getItem('username');

      if (!token || !username) {
        navigate('/login');
        return;
      }

      try {
        const response = await fetch(`http://localhost:5000/users/${username}`, {
          headers: {
            'Authorization': `${token}`,
          },
        });

        if (!response.ok) {
          const errorData = await response.json();
          setError(errorData.message);
          return;
        }

        const data = await response.json();
        setUserData(data);
      } catch (err) {
        setError('Failed to fetch user data');
      }
    };

    fetchUserData();
  }, [navigate]);

  if (error) {
    return <div className="error-message">{error}</div>;
  }

  if (!userData) {
    return <div>Loading...</div>;
  }

  const sidebarOptions = [
    { label: 'Home', link: '/player' },
    { label: 'Scoreboard', link: '/scoreboard' },
    { label: 'Questions', link: '/question-dashboard' },
  ];

  return (
      <div className="player-page">
        <Sidebar options={sidebarOptions} />
        <div className="main-content">
          <UserCard username={userData.username} score={userData.score} />
          <h1>Your Dashboard</h1>
          <TrendingQuestions />
        </div>
      </div>
  );
}

export default PlayerPage;
