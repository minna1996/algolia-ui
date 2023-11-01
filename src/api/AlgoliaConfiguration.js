import axios from "axios";

const handleIndex = async (requestData) => {
    console.log({requestData});
    return axios
        .post("/v1/api/configuration/add-index", {requestData })
        .then((response) => {
            console.log('Data saved successfully', response);
            return response;
        })
        .catch((error) => {
            console.error('Error saving data', error);
            throw error;
        });
};


export default handleIndex;
