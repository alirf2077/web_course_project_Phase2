import React from 'react';
import TrendingQuestionItem from './TrendingQuestionItem';

function TrendingQuestions() {
  const questions = [
    { question: "What is the capital of France?", answers: 50 },
    { question: "Who discovered gravity?", answers: 40 },
    { question: "Which planet is known as the Red Planet?", answers: 35 },
  ];

  return (
    <div className="trending-questions">
      <h3>Trending Questions</h3>
      {questions.map((q, index) => (
        <TrendingQuestionItem
          key={index}
          question={q.question}
          answers={q.answers}
        />
      ))}
    </div>
  );
}

export default TrendingQuestions;
