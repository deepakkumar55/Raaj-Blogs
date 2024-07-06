import axios from 'axios';

export const login = async (email, password) => {
  return await axios.post('/api/auth/login', { email, password });
};

export const signup = async (email, password) => {
  return await axios.post('/api/auth/signup', { email, password });
};
