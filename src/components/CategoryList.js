import React from 'react';

function CategoryList({ categories }) {
  return (
    <div className="category-list">
      <h3>Existing Categories</h3>
      <ul>
        {categories.map((category, index) => (
          <li key={index}>{category}</li>
        ))}
      </ul>
    </div>
  );
}

export default CategoryList;
