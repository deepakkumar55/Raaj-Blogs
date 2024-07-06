import axios from 'axios';

export const getUsers = async () => {
  return await axios.get('/api/admin/users');
};

export const deleteUser = async (id) => {
  return await axios.delete(`/api/admin/users/${id}`);
};
