import React from 'react';

function TrendingQuestionItem({ question, answers }) {
  return (
    <div className="trending-question-item">
      <p><strong>{question}</strong></p>
      <span>Answers: {answers}</span>
    </div>
  );
}

export default TrendingQuestionItem;
