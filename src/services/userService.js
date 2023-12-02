import axios from './api';

export const registerUser = async (userData) => {
    try {
        const response = await axios.post('/api/users/register', userData);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};

export const loginUser = async (userData) => {
    try {
        const response = await axios.post('/api/users/login', userData);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};
