import axios from 'axios';

export const subscribe = async (blogId) => {
  return await axios.post(`/api/subscriptions/${blogId}`);
};

export const unsubscribe = async (blogId) => {
  return await axios.delete(`/api/subscriptions/${blogId}`);
};

export const getSubscriptionStatus = async (blogId) => {
  return await axios.get(`/api/subscriptions/${blogId}/status`);
};
