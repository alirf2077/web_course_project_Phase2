import React, { useState } from 'react';

function CreateQuestionForm({ categories, relatedQuestions, onSubmit }) {
  const [formData, setFormData] = useState({
    questionText: '',
    optionA: '',
    optionB: '',
    optionC: '',
    optionD: '',
    correctAnswer: 'A',
    questionCategory: '',
    difficultyLevel: 'Easy',
    relatedQuestions: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleMultiSelectChange = (e) => {
    const selectedValues = Array.from(e.target.selectedOptions, (option) => option.value);
    setFormData({ ...formData, relatedQuestions: selectedValues });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({ ...formData, questionText: '' }); // Reset question text
  };

  return (
    <div className="form-section">
      <h3>Create Multiple Choice Question</h3>
      <form onSubmit={handleSubmit}>
        {/* Question Text */}
        <div className="mb-3">
          {/* <label className="form-label">Question Text</label> */}
          <textarea
            className="form-control"
            name="questionText"
            rows="5"
            placeholder="Enter your question here..."
            value={formData.questionText}
            onChange={handleChange}
          
          />
        </div>

        {/* Options */}
        {['A', 'B', 'C', 'D'].map((option) => (
          <div className="mb-3" key={option}>
            <label className="form-label">Option {option}</label>
            <input
              type="text"
              className="form-control"
              name={`option${option}`}
              placeholder={`Enter option ${option}`}
              value={formData[`option${option}`]}
              onChange={handleChange}
              // style={{ width: '400px' }} // Set a fixed width

            />
          </div>
        ))}

        {/* Correct Answer */}
        <div className="mb-3">
          <label className="form-label">Correct Answer</label>
          <select
            className="form-select"
            name="correctAnswer"
            value={formData.correctAnswer}
            onChange={handleChange}
          >
            {['A', 'B', 'C', 'D'].map((option) => (
              <option key={option} value={option}>
                Option {option}
              </option>
            ))}
          </select>
        </div>

        {/* Category Selection */}
        <div className="mb-3">
          <label className="form-label">Question Category</label>
          <select
            className="form-select"
            name="questionCategory"
            value={formData.questionCategory}
            onChange={handleChange}
          >
            {categories.map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        {/* Difficulty Level */}
        <div className="mb-3">
          <label className="form-label">Difficulty Level</label>
          <select
            className="form-select"
            name="difficultyLevel"
            value={formData.difficultyLevel}
            onChange={handleChange}
          >
            {['Easy', 'Medium', 'Hard'].map((level) => (
              <option key={level} value={level}>
                {level}
              </option>
            ))}
          </select>
        </div>

        {/* Related Questions */}
        <div className="mb-3">
          <label className="form-label">Related Questions</label>
          <select
            className="form-select"
            name="relatedQuestions"
            multiple
            onChange={handleMultiSelectChange}
          >
            {relatedQuestions.map((question, index) => (
              <option key={index} value={question}>
                {question}
              </option>
            ))}
          </select>
        </div>

        {/* Submit Button */}
        <button type="submit" className="btn btn-primary-custom">
          Submit Question
        </button>
      </form>
    </div>
  );
}

export default CreateQuestionForm;
