import axios from 'axios';

const instance = axios.create({
    baseURL: '/v1/api',
});

export const addIndexToApi = (applicationId, indexName) => {
    return instance.post('/algolia/bulk-index', {
        applicationId: applicationId,
        indexName: indexName,
    });
};
