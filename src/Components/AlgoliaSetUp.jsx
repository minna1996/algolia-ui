
import React, { useState } from "react";
import './AlgoliaSetUp.css';
import handleIndex from "../api/AlgoliaConfiguration.js"

const AlgoliaSetUp = () => {
    const [applicationId, setApplicationId] = useState('');
    const [indices, setindices] = useState([]);

    const requestData = {
        applicationId,
        indices,
      };

    const handleSave = async () => {
        if (!requestData.applicationId || !requestData.indices) {
            alert('Please fill out both Application Id and Index Name');
            return;
        }

        try {
            const response = await handleIndex(requestData);
            console.log(response.data);
            if(response && response.data){
                console.log('Data saved successfully', response.data);
            }
            
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
                        onChange={(e) => setindices(e.target.value)}
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
