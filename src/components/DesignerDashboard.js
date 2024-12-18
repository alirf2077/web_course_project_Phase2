import React from 'react';
import Sidebar from './Sidebar';
import DashboardSection from './DashboardSection';

function DesignerDashboard() {
  const sidebarOptions = [
    { label: 'Home', link: '/designer-dashboard' },
  ];
  
  return (
    <div className="designer-dashboard">
      <Sidebar options={sidebarOptions} />
      <div className="main-content">
        <h1>Designer Dashboard</h1>

        <DashboardSection
          title="Manage Categories"
          description="View existing categories and create new ones."
          link="category-management"
          linkText="Go to Category Management"
        />

        <DashboardSection
          title="Manage Questions"
          description="View existing questions and create new ones."
          link="question-management"
          linkText="Go to Question Management"
        />
      </div>
    </div>
  );
}

export default DesignerDashboard;
