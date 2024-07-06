import React, { useState, useEffect } from 'react';
import { likePost, unlikePost, getLikeStatus } from '../services/likeService';

const LikeButton = ({ postId }) => {
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    const fetchLikeStatus = async () => {
      const response = await getLikeStatus(postId);
      setLiked(response.data.liked);
    };
    fetchLikeStatus();
  }, [postId]);

  const handleLike = async () => {
    if (liked) {
      await unlikePost(postId);
    } else {
      await likePost(postId);
    }
    setLiked(!liked);
  };

  return (
    <button onClick={handleLike} className="px-4 py-2 bg-blue-500 text-white rounded">
      {liked ? 'Unlike' : 'Like'}
    </button>
  );
};

export default LikeButton;
