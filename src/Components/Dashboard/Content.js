// Content.js
import React from 'react';
import './Dashboard.css';
import AlgoliaSetup from '../AlgoliaDashBoard/AlgoliaSetUp';
import DBConnector from '../DBConnector/DBConnectionForm';
import AttributeTransformer from '../AttributeTransformer/AttributeTransformer';

const Content = ({ activeSection }) => {
  return (
    <div className="content">
      {activeSection === 'Database Connection' && (
        <div className='data-center'>
          <DBConnector/>
        </div>
      )}
      {activeSection === 'Algolia Connector' && (
        <div>
          <AlgoliaSetup/>
        </div>
      )}
      {activeSection === 'Re-Index' && (
        <div>
          <h2>Re-Index</h2>
          {/* Content for the 'Re-Index' section */}
        </div>
      )}
      {activeSection === 'Attribute Transformer' && (
        <div>
          <AttributeTransformer/>
        </div>
      )}
    </div>
  );
};

export default Content;
