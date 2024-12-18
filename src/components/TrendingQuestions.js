// src/components/TrendingQuestions.js
import React from 'react';

function TrendingQuestions() {
  return (
    <div className="trending-questions">
      <h3>Trending Questions</h3>
      <div className="trending-question-item">
        <p><strong>What is the capital of France?</strong></p>
        <span>Answers: 50</span>
      </div>
      <div className="trending-question-item">
        <p><strong>Who discovered gravity?</strong></p>
        <span>Answers: 40</span>
      </div>
      <div className="trending-question-item">
        <p><strong>Which planet is known as the Red Planet?</strong></p>
        <span>Answers: 35</span>
      </div>
    </div>
  );
}

export default TrendingQuestions;
