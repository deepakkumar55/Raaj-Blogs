import React from 'react';
import { useParams } from 'react-router-dom';
import EditPost from '../components/EditPost';

const EditPostPage = () => {
  const { id } = useParams();

  return (
    <div>
      <h1 className="text-4xl font-bold mb-4">Edit Post {id}</h1>
      <EditPost postId={id} />
    </div>
  );
};

export default EditPostPage;
