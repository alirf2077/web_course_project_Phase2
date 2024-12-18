import React from 'react';
import Sidebar from './Sidebar';
import DashboardSection from './DashboardSection';

function DesignerDashboard() {
  return (
    <div className="designer-dashboard">
      <Sidebar />
      <div className="main-content">
        <h1>Designer Dashboard</h1>

        <DashboardSection
          title="Manage Categories"
          description="View existing categories and create new ones."
          link="category_management.html"
          linkText="Go to Category Management"
        />

        <DashboardSection
          title="Manage Questions"
          description="View existing questions and create new ones."
          link="question_management.html"
          linkText="Go to Question Management"
        />
      </div>
    </div>
  );
}

export default DesignerDashboard;
