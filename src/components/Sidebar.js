import React from 'react';

function Sidebar({ options }) {
  return (
    <div className="sidebar">
      <h3>Menu</h3>
      {options.map((option, index) => (
        <a key={index} href={option.link} target={option.newTab ? "_blank" : "_self"}>
          {option.label}
        </a>
      ))}
    </div>
  );
}

export default Sidebar;
