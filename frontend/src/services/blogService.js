import axios from 'axios';

export const getBlogs = async () => {
  return await axios.get('/api/blogs');
};

export const getBlogById = async (id) => {
  return await axios.get(`/api/blogs/${id}`);
};
