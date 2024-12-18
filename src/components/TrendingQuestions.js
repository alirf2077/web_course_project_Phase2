import React, { useState, useEffect } from 'react';

function TrendingQuestions() {
  const [question, setQuestion] = useState(null);
  const [selectedOption, setSelectedOption] = useState('');
  const [feedback, setFeedback] = useState(null);
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

  const handleAnswerSubmit = async () => {
    const token = localStorage.getItem('token');
    if (!token) {
      setError('User is not authenticated.');
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/answers', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `${token}`,
        },
        body: JSON.stringify({
          questionId: question.id,
          selectedOption,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        setError(errorData.message);
        return;
      }

      const data = await response.json();
      setFeedback(data.message);
    } catch (err) {
      setError('Failed to submit answer.');
    }
  };

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
                <li key={index}>
                  <label>
                    <input
                        type="radio"
                        name="answer"
                        value={option}
                        onChange={() => setSelectedOption(option)}
                    />
                    {option}
                  </label>
                </li>
            ))}
          </ul>
          <button onClick={handleAnswerSubmit} disabled={!selectedOption}>
            Submit Answer
          </button>
        </div>
        {feedback && <div className="feedback-message">{feedback}</div>}
      </div>
  );
}

export default TrendingQuestions;
