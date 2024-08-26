import axios from 'axios';
import { toastError } from './toastrConfig';

const API = axios.create({
  baseURL: 'https://dev.smarthome-team.store/',
  headers: {
    'Access-Control-Allow-Origin': '*',
  },
});

API.interceptors.request.use(
  config => {
    const token = JSON.parse(localStorage.getItem('token'));
    config.headers['Authorization'] = `Bearer ${token}`;
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);
API.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    if (error.response && error.response.data && error.response.data.message) {
      toastError(error.response.data.message);
    }
    // Additional logic can be added, e.g., redirect on 401
    return Promise.reject(error);
  }
);
export default API;
