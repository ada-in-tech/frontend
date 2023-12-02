// src/services/api.js
import axios from 'axios';

const instance = axios.create({
    baseURL: process.env.REACT_APP_API_URL
    // other configurations
});

export default instance;
