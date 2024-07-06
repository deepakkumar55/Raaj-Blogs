import React from 'react';

const ShareButton = ({ postId }) => {
  const handleShare = () => {
    const url = `${window.location.origin}/blog/${postId}`;
    navigator.clipboard.writeText(url).then(() => {
      alert('Post URL copied to clipboard!');
    });
  };

  return (
    <button onClick={handleShare} className="px-4 py-2 bg-blue-500 text-white rounded">
      Share
    </button>
  );
};

export default ShareButton;
