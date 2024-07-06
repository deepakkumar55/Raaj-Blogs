import React, { createContext, useContext, useState } from 'react';
import axios from 'axios';

const AdminContext = createContext();

export const useAdmin = () => useContext(AdminContext);

export const AdminProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);

  // Fetch all posts from the server
  const fetchPosts = async () => {
    try {
      const response = await axios.get('/api/admin/posts');
      setPosts(response.data);
    } catch (error) {
      console.error('Error fetching posts:', error);
      // Handle error as needed (e.g., show error message)
    }
  };

  // Create a new post and update the posts state
  const createPost = async (post) => {
    try {
      const response = await axios.post('/api/admin/posts', post);
      setPosts([...posts, response.data]);
    } catch (error) {
      console.error('Error creating post:', error);
      // Handle error as needed (e.g., show error message)
    }
  };

  // Update an existing post and update the posts state
  const updatePost = async (id, updatedPost) => {
    try {
      const response = await axios.put(`/api/admin/posts/${id}`, updatedPost);
      setPosts(posts.map(post => (post._id === id ? response.data : post)));
    } catch (error) {
      console.error('Error updating post:', error);
      // Handle error as needed (e.g., show error message)
    }
  };

  // Delete a post by ID and update the posts state
  const deletePost = async (id) => {
    try {
      await axios.delete(`/api/admin/posts/${id}`);
      setPosts(posts.filter(post => post._id !== id));
    } catch (error) {
      console.error('Error deleting post:', error);
      // Handle error as needed (e.g., show error message)
    }
  };

  // Provide the context value to the entire application
  return (
    <AdminContext.Provider value={{ posts, fetchPosts, createPost, updatePost, deletePost }}>
      {children}
    </AdminContext.Provider>
  );
};
