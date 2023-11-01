
import React, { useState } from "react";
import './AlgoliaSetUp.css';
import handleIndex from "../api/AlgoliaConfiguration.js"

const AlgoliaSetUp = () => {
    const [applicationID, setApplicationID] = useState('');
    const [indexName, setIndexName] = useState([]);

    const requestData = {
        applicationID,
        indexName, // Send indexName as an array
      };

    const handleSave = async () => {
        if (!requestData.applicationID || !requestData.indexName) {
            alert('Please fill out both Application ID and Index Name');
            return;
        }

        try {
            const response = await handleIndex(requestData);
            console.log('Data saved successfully', response.data);
        } catch (error) {
            console.error('Error saving data', error);
        }
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
                        placeholder="Enter your application ID"
                        value={applicationID}
                        onChange={(e) => setApplicationID(e.target.value)}
                        required
                    />
                </div>
                <div className="input">
                    <input
                        type="text"
                        placeholder="Enter your index name"
                        value={indexName}
                        onChange={(e) => setIndexName(e.target.value)}
                        required
                    />
                </div>
            </div>
            <div className="submit-container">
                <div className="submit" onClick={handleSave}>Index</div>
                <div className="submit">Search</div>
            </div>
        </div>
    );
}

export default AlgoliaSetUp;
