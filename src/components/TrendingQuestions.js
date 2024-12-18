import React, { useState, useEffect } from 'react';

function TrendingQuestions() {
  const [question, setQuestion] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRandomQuestion = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        setError('User is not authenticated.');
        return;
      }

      try {
        const response = await fetch('http://localhost:5000/questions/random', {
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
        setQuestion(data);
      } catch (err) {
        setError('Failed to fetch random question.');
      }
    };

    fetchRandomQuestion();
  }, []);

  if (error) {
    return <div className="error-message">{error}</div>;
  }

  if (!question) {
    return <div>Loading...</div>;
  }

  return (
      <div className="trending-questions">
        <h3>Random Question</h3>
        <div className="trending-question-item">
          <p><strong>{question.text}</strong></p>
          <ul>
            {question.options.map((option, index) => (
                <li key={index}>{option}</li>
            ))}
          </ul>
        </div>
      </div>
  );
}

export default TrendingQuestions;
