import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3333',
    // baseURL: 'https://bootcamp-fastfeet-backend.herokuapp.com',
});

export default api;
