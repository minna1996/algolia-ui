// Sidebar.js
import React from 'react';
import './Sidebar.css'

const Sidebar = ({ onSectionClick }) => {
  return (
    <div className="sidebar">
      <h1 className="heading"> Connector </h1>
      <div className="section" onClick={() => onSectionClick('Database Connection')}>
        Database Connection
      </div>
      <div className="section" onClick={() => onSectionClick('Algolia Connector')}>
        Algolia Connector
      </div>
      <div className="section" onClick={() => onSectionClick('Re-Index')}>
        Re-Index
      </div>
      <div className="section" onClick={() => onSectionClick('Attribute Transformer')}>
        Attribute Transformer
      </div>
    </div>
  );
};

export default Sidebar;
