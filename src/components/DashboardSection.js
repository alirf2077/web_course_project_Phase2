import React from 'react';

function DashboardSection({ title, description, link, linkText }) {
  return (
    <div className="dashboard-section">
      <h3>{title}</h3>
      <p>{description}</p>
      <a href={link} className="btn btn-dashboard">
        {linkText}
      </a>
    </div>
  );
}

export default DashboardSection;
