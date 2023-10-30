import React from "react"
import './AlgoliaSetUp.css'

const AlogliaSetUp =() =>{
    return(
        <div className='container'>
            <div className="header">
                <div className="text">Algolia SetUp</div>
                <div className="underline"></div>
            </div>
            <div className="inputs">
                <div className="input">
                    <input type="text" placeholder="Enter your application ID" required/>
                </div>  
                <div className="input">
                    <input type="text" placeholder="Enter your admin key" required/>
                </div>
                <div className="input">
                    <input type="text" placeholder="Enter your index name" required/>
                </div>      
            </div>
            <div className="submit-container">
                <div className="submit">Index</div>
                <div className="submit">Search</div>      
            </div>
        </div>
    )
}

export default AlogliaSetUp;