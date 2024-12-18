import React, { useState } from 'react';

function CreateCategoryForm({ onAddCategory }) {
  const [newCategory, setNewCategory] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newCategory.trim() !== '') {
      onAddCategory(newCategory);
      setNewCategory('');
    }
  };

  return (
    <div className="form-section">
      <h3>Create New Category</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="newCategory" className="form-label">
            Category Name
          </label>
          <input
            type="text"
            className="form-control"
            id="newCategory"
            placeholder="Enter category name"
            value={newCategory}
            onChange={(e) => setNewCategory(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary-custom">
          Create Category
        </button>
      </form>
    </div>
  );
}

export default CreateCategoryForm;
