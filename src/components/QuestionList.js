import React from 'react';

function QuestionList({ questions }) {
  return (
    <div className="form-section">
      <h3>Existing Questions</h3>
      <ul>
        {questions.map((question, index) => (
          <li key={index}>{question}</li>
        ))}
      </ul>
    </div>
  );
}

export default QuestionList;
