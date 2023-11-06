import React, { useState } from 'react';

const AttributeTransformer = () => {
    const [keyValues, setKeyValues] = useState([
        { oldFieldName: '', newFieldName: '' },
        // Add more key-value pairs as needed
    ]);

    const handleChange = (index, e) => {
        const { name, value } = e.target;
        const updatedKeyValues = [...keyValues];
        updatedKeyValues[index][name] = value;
        setKeyValues(updatedKeyValues);
    };

    const addInputField = () => {
        setKeyValues([...keyValues, { oldFieldName: '', newFieldName: '' }]);
    };

    const removeInputField = (index) => {
        const updatedKeyValues = [...keyValues];
        updatedKeyValues.splice(index, 1);
        setKeyValues(updatedKeyValues);
    };

    //   return (
    //     <div>
    //       {keyValues.map((pair, index) => (
    //         <div key={index}>
    //           <input
    //             type="text"
    //             name="oldFieldName"
    //             placeholder="Old field name"
    //             value={pair.oldFieldName}
    //             onChange={(e) => handleChange(index, e)}
    //           />
    //           <input
    //             type="text"
    //             name="newFieldName"
    //             placeholder="New field name"
    //             value={pair.newFieldName}
    //             onChange={(e) => handleChange(index, e)}
    //           />
    //           <button onClick={() => removeInputField(index)}>Remove</button>
    //         </div>
    //       ))}
    //       <button onClick={addInputField}>Add Input Fields</button>
    //     </div>
    //   );


    // };

    return (
        <div className='container-attribute'>
            <div className="header">
                <div className="text">Create your Attribute Transformer</div>
            </div>
            <div className="inputs-attribute">
                {keyValues.map((pair, index) => (
                    <div key={index} className='input'>
                        <input
                            type="text"
                            name="oldFieldName"
                            placeholder="Old field name"
                            value={pair.oldFieldName}
                            onChange={(e) => handleChange(index, e)}
                        />
                        <br></br>
                        <input
                            type="text"
                            name="newFieldName"
                            placeholder="New field name"
                            value={pair.newFieldName}
                            onChange={(e) => handleChange(index, e)}
                        />
                        <div className="submit-container">
                            <div className="submit-attribute" onClick={() => removeInputField(index)}>Remove</div>
                        </div>
                    </div>
                ))}
                <div className="submit-container">
                    <div className="submit-attribute" onClick={addInputField}>Add</div>
                    <div className="submit-attribute" >Save</div>
                </div>
            </div>
        </div>
    );
}

export default AttributeTransformer;