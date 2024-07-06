import React, { useState } from 'react';
import { useAdmin } from '../contexts/AdminContext';
import MarkdownEditor from './MarkdownEditor';

const CreatePost = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const { createPost } = useAdmin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createPost({ title, content });
    setTitle('');
    setContent('');
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div className="mb-4">
        <label htmlFor="title" className="block text-gray-700 text-sm font-bold mb-2">Title</label>
        <input
          id="title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
          placeholder="Enter title"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="content" className="block text-gray-700 text-sm font-bold mb-2">Content</label>
        <MarkdownEditor value={content} onChange={setContent} />
      </div>
      <div className="flex items-center justify-end">
        <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
          Create Post
        </button>
      </div>
    </form>
  );
};

export default CreatePost;
