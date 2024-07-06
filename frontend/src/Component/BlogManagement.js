import React, { useEffect, useState } from 'react';
import { useAdmin } from '../contexts/AdminContext';
import BlogCard from './BlogCard';

const BlogManagement = () => {
  const { posts, fetchPosts, deletePost } = useAdmin();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPosts = async () => {
      await fetchPosts();
      setLoading(false);
    };
    loadPosts();
  }, [fetchPosts]);

  const handleDelete = async (id) => {
    await deletePost(id);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1 className="text-4xl font-bold mb-4">Manage Blog Posts</h1>
      <div>
        {posts.map(post => (
          <div key={post._id} className="mb-4">
            <BlogCard blog={post} />
            <div className="space-x-2">
              <button onClick={() => handleDelete(post._id)} className="px-4 py-2 bg-red-500 text-white rounded">Delete</button>
              <Link to={`/admin/edit/${post._id}`} className="px-4 py-2 bg-blue-500 text-white rounded">Edit</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogManagement;
