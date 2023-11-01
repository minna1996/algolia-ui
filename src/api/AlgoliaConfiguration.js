import axios from 'axios';

const instance = axios.create({
  baseURL: '/v1/api', 
});

export const addIndexToApi = (applicationId, indices) => {
  return instance.post('/configuration/add-index', {
    applicationId: applicationId,
    indices: [indices],
  });
};
