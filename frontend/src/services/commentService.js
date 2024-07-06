import axios from 'axios';

export const getComments = async (postId) => {
  return await axios.get(`/api/comments/${postId}`);
};

export const postComment = async (postId, text) => {
  return await axios.post(`/api/comments/${postId}`, { text });
};
