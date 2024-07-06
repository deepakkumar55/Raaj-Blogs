import axios from 'axios';

export const likePost = async (postId) => {
  return await axios.post(`/api/likes/${postId}`);
};

export const unlikePost = async (postId) => {
  return await axios.delete(`/api/likes/${postId}`);
};

export const getLikeStatus = async (postId) => {
  return await axios.get(`/api/likes/${postId}/status`);
};
