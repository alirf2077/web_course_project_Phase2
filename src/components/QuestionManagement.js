import React, { useState } from 'react';
import Sidebar from './Sidebar';
import QuestionList from './QuestionList';
import CreateQuestionForm from './CreateQuestionForm';

function QuestionManagement() {
  const [questions, setQuestions] = useState([
    'What is the capital of France?',
    'Who discovered gravity?',
    'Which planet is closest to the sun?',
  ]);
  const categories = ['Mathematics', 'Science', 'History'];
  const relatedQuestions = questions;

  const handleAddQuestion = (newQuestion) => {
    setQuestions([...questions, newQuestion.questionText]);
  };

  return (
    <div className="question-management-page">
      <Sidebar />
      <div className="question-content">
        <h1>Manage Questions</h1>
        <QuestionList questions={questions} />
        <CreateQuestionForm
          categories={categories}
          relatedQuestions={relatedQuestions}
          onSubmit={handleAddQuestion}
        />
      </div>
    </div>
  );
}

export default QuestionManagement;
