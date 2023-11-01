
import React, { useState } from "react";
import './AlgoliaSetUp.css';
import axios from 'axios';

const AlgoliaSetUp = () => {
    const [applicationId, setApplicationId] = useState('');
    const [indices, setIndices] = useState([]);
  
    const addIndicesToIndicesArray = () => {
      axios
        .post('/v1/api/configuration/add-index', {
          applicationId: applicationId,
          indices: [indices],
        })
        .then((response) => {
          // Handle the response as needed
          console.log('Request successful', response.data);
        })
        .catch((error) => {
          // Handle errors
          console.error('Error:', error);
        });
    };

    return (
        <div className='container'>
            <div className="header">
                <div className="text">Algolia</div>
            </div>
            <div className="inputs">
                <div className="input">
                    <input
                        type="text"
                        placeholder="Enter your application Id"
                        value={applicationId}
                        onChange={(e) => setApplicationId(e.target.value)}
                        required
                    />
                </div>
                <div className="input">
                    <input
                        type="text"
                        placeholder="Enter your index name"
                        value={indices}
                        onChange={(e) => setIndices(e.target.value)}
                        required
                    />
                </div>
            </div>
            <div className="submit-container">
                <div className="submit" onClick={addIndicesToIndicesArray}>Index</div>
                <div className="submit">Search</div>
            </div>
        </div>
    );
}

export default AlgoliaSetUp;
