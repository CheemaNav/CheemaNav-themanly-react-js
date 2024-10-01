import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://api.themanly.in/themanly',
  timeout: 10000,
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      console.log('Unauthorized, redirecting to login...');
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
