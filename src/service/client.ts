import axios, { AxiosError } from 'axios';

const apiClient = axios.create({
  baseURL: process.env.API_URL || 'http://localhost:5001/hexa-be/us-central1/',
});

apiClient.interceptors.request.use((config) => {
  config.headers['Content-Type'] = 'application/json';
  return config;
});

apiClient.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    return Promise.reject(error);
  },
);

export { apiClient };
