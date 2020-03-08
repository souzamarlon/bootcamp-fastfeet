import axios from 'axios';

const api = axios.create({
  // baseURL: 'http://7.212.4.61:3333',
  // baseURL: 'http://localhost:3333',
  baseURL: 'http://192.168.25.32:3333',
});

export default api;
