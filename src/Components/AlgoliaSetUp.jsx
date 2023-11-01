import React, { useState } from "react";
import './AlgoliaSetUp.css';
import axios from 'axios';

const AlgoliaSetUp = () => {
    const [applicationId, setApplicationId] = useState('');
    const [indexName, setIndexName] = useState('');

    const addIndicesToIndicesArray = () => {
        if (!applicationId || !indexName) {
            alert("Application ID and Index Name are required.");
            return;
        }

        axios
            .post('/v1/api/algolia/bulk-index', {
                applicationId: applicationId,
                indexName: indexName,
            })
            .then((response) => {
                console.log('Request successful', response.data);
                alert('Indexed successful'); // Display a success alert
                setApplicationId('');
                setIndexName('');
            })
            .catch((error) => {
                alert('Error:', error);
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
                        value={indexName}
                        onChange={(e) => setIndexName(e.target.value)}
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
