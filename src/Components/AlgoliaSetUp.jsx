import React, { useState } from "react";
import './AlgoliaSetUp.css';
import { addIndexToApi } from '../api/AlgoliaConfiguration.js';

const AlgoliaSetUp = () => {
    const [applicationId, setApplicationId] = useState('');
    const [indexName, setIndexName] = useState('');
    const [loading, setLoading] = useState(false);


    const addIndicesToIndicesArray = () => {
        if (!applicationId || !indexName) {
            alert("Application ID and Index Name are required.");
            return;
        }
        setLoading(true);
        addIndexToApi(applicationId, indexName)
            .then((response) => {
                console.log('Request successful', response.data);
                alert('Indexed successful');
                setApplicationId('');
                setIndexName('');
            })
            .catch((error) => {
                alert('Error:', error);
            })
            .finally(() => {
                setLoading(false);
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
            {loading && (
                <div className="loader-container">
                    <div className="loader"></div>
                </div>
            )}
        </div>
    );
}

export default AlgoliaSetUp;
