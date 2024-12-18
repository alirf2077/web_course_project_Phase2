import React, { useState } from 'react';
import Sidebar from './Sidebar';
import CategoryList from './CategoryList';
import CreateCategoryForm from './CreateCategoryForm';

function CategoryManagement() {
  const [categories, setCategories] = useState(['Mathematics', 'Science', 'History']);
  const sidebarOptions = [
    { label: 'Home', link: '/designer-dashboard' },
  ];
  const addCategory = (newCategory) => {
    setCategories([...categories, newCategory]);
  };

  return (
    <div className="category-management-page">
      <Sidebar options={sidebarOptions} />
      <div className="main-content">
        <h1>Category Management</h1>
        <CategoryList categories={categories} />
        <CreateCategoryForm onAddCategory={addCategory} />
      </div>
    </div>
  );
}

export default CategoryManagement;
