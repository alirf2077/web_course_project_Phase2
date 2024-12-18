import React from 'react';

function OptionsContainer() {
  return (
    <div className="options-container">
      <h3 className="text-center mb-4">What would you like to do?</h3>
      <div className="d-grid gap-3">
        <button className="btn btn-primary btn-lg" onClick={() => alert("Start New Question")}>
          Start New Question
        </button>
        <button className="btn btn-primary btn-lg" onClick={() => alert("View Previously Answered Questions")}>
          Answered Questions
        </button>
      </div>
    </div>
  );
}

export default OptionsContainer;
