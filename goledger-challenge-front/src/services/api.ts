import axios from 'axios';
import { generateBasicAuthToken } from '../utils/auth';

const username = import.meta.env.VITE_API_USERNAME;
const password = import.meta.env.VITE_API_PASSWORD;

const token = generateBasicAuthToken(username, password);

const api = axios.create({
  baseURL: 'http://ec2-54-91-215-149.compute-1.amazonaws.com/api',
  headers: {
    Authorization: `${token}`,
  },
});

export default api;
