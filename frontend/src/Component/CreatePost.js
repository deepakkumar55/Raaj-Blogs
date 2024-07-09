import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { FaCloudUploadAlt } from 'react-icons/fa';

const CreatePost = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);
  const navigate = useNavigate();

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'your_upload_preset'); // Replace with your Cloudinary preset

    const response = await axios.post(
      'https://api.cloudinary.com/v1_1/your_cloud_name/image/upload',
      formData
    );

    setImage(response.data.secure_url);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Send the data to your backend to create the post
    // Example:
    // await axios.post('/api/posts', { title, content, image });

    navigate('/admin/manage');
  };

  return (
    <div>
      <h1 className="text-4xl font-bold mb-4">Create Post</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-2">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div>
          <label className="block mb-2">Content</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full p-2 border rounded"
            rows="10"
            required
          ></textarea>
        </div>
        <div>
          <label className="block mb-2">Image</label>
          <div className="flex items-center space-x-4">
            <input
              type="file"
              onChange={handleImageUpload}
              className="hidden"
              id="imageUpload"
            />
            <label
              htmlFor="imageUpload"
              className="cursor-pointer inline-flex items-center justify-center px-4 py-2 border rounded shadow text-white bg-blue-600 hover:bg-blue-700"
            >
              <FaCloudUploadAlt className="mr-2" />
              Upload Image
            </label>
            {image && <img src={image} alt="Uploaded" className="w-16 h-16 rounded" />}
          </div>
        </div>
        <button
          type="submit"
          className="px-4 py-2 bg-green-600 text-white rounded shadow hover:bg-green-700"
        >
          Create Post
        </button>
      </form>
    </div>
  );
};

export default CreatePost;
