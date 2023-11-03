import React, { useState } from 'react';
import '../CSS/Common.css'

const DBConnectionForm = () => {
    const [loading, setLoading] = useState(false);
    return (
        <div className='container'>
            <div className="header">
                <div className="text">Database Connection</div>
            </div>
            <div className="inputs">
                <div className="input">
                    <input
                        type="text"
                        placeholder="Enter your connection url"
                        required
                    />
                </div>
            </div>
            <div className="submit-container">
                <div className="submit" >Save</div>
            </div>
            {loading && (
                <div className="loader-container">
                    <div className="loader"></div>
                </div>
            )}
        </div>
    );
}

export default DBConnectionForm;
