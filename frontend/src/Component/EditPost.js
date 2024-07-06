import React, { useEffect, useState } from 'react';
import { useAdmin } from '../contexts/AdminContext';
import MarkdownEditor from './MarkdownEditor';
import axios from 'axios';

const EditPost = ({ postId }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const { updatePost } = useAdmin();

  useEffect(() => {
    const fetchPost = async () => {
      const response = await axios.get(`/api/admin/posts/${postId}`);
      setTitle(response.data.title);
      setContent(response.data.content);
    };
    fetchPost();
  }, [postId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updatePost(postId, { title, content });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block">Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
      </div>
      <div>
        <label className="block">Content</label>
        <MarkdownEditor value={content} onChange={setContent} />
      </div>
      <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">Update Post</button>
    </form>
  );
};

export default EditPost;
