import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getComments, postComment } from '../services/commentService';

const CommentSection = () => {
  const { id } = useParams();
  const [comments, setComments] = useState([]);
  const [commentText, setCommentText] = useState('');

  useEffect(() => {
    const loadComments = async () => {
      const response = await getComments(id);
      setComments(response.data);
    };
    loadComments();
  }, [id]);

  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    await postComment(id, commentText);
    setCommentText('');
    const response = await getComments(id);
    setComments(response.data);
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Comments</h2>
      <form onSubmit={handleCommentSubmit} className="mb-4">
        <textarea
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded mb-2"
          placeholder="Write a comment..."
          required
        />
        <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">Post Comment</button>
      </form>
      <div>
        {comments.map(comment => (
          <div key={comment._id} className="mb-2">
            <p>{comment.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommentSection;
