import axios from 'axios';

export const getBlogs = async () => {
  return await axios.get('/api/blogs');
};

export const getBlogById = async (id) => {
  return await axios.get(`/api/blogs/${id}`);
};

export const getFeaturedArticles = async () => {
  return await axios.get('/api/featured-articles'); 
};
