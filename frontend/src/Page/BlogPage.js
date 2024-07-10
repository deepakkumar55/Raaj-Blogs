import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios"; // Assuming you use axios for HTTP requests

const Blog = () => {
  const { postId } = useParams(); // Assuming postId is part of your route params
  const [post, setPost] = useState(null);
  const [likes, setLikes] = useState(0);
  const [comments, setComments] = useState([]);
  const [commentText, setCommentText] = useState("");

  useEffect(() => {
    // Fetch blog post details from API
    const fetchPost = async () => {
      try {
        const response = await axios.get(`/api/posts/${postId}`); // Replace with your API endpoint
        setPost(response.data);
        setLikes(response.data.likes); // Assuming likes count is returned from API
        setComments(response.data.comments); // Assuming comments array is returned from API
      } catch (error) {
        console.error("Error fetching post:", error);
      }
    };

    fetchPost();
  }, [postId]);

  const handleLike = async () => {
    try {
      // Update like count on the server
      const response = await axios.post(`/api/posts/${postId}/like`); // Replace with your API endpoint
      setLikes(response.data.likes); // Update likes count in state
    } catch (error) {
      console.error("Error liking post:", error);
    }
  };

  const handleCommentSubmit = async (event) => {
    event.preventDefault();
    try {
      // Submit comment to the server
      const response = await axios.post(`/api/posts/${postId}/comments`, {
        text: commentText,
      }); // Replace with your API endpoint
      setComments([...comments, response.data]); // Add new comment to comments array in state
      setCommentText(""); // Clear comment text input
    } catch (error) {
      console.error("Error submitting comment:", error);
    }
  };

  const handleShare = () => {
    // Implement share functionality (e.g., using Web Share API or copying link)
    alert("Share functionality will be implemented here.");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      {post ? (
        <div className="max-w-3xl w-full bg-white p-8 rounded shadow-lg">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">{post.title}</h1>
          <p className="text-lg text-gray-600 mb-6">{post.content}</p>
          <div className="flex items-center justify-between border-t pt-4">
            <div className="flex items-center space-x-4">
              <button onClick={handleLike} className="text-blue-500 hover:text-blue-700">
                Like ({likes})
              </button>
              <button onClick={handleShare} className="text-blue-500 hover:text-blue-700">
                Share
              </button>
            </div>
            <button className="text-blue-500 hover:text-blue-700">Comment ({comments.length})</button>
          </div>
          <div className="mt-4">
            <form onSubmit={handleCommentSubmit} className="flex items-center space-x-2">
              <input
                type="text"
                value={commentText}
                onChange={(e) => setCommentText(e.target.value)}
                placeholder="Add a comment..."
                className="w-full px-4 py-2 border rounded-md"
              />
              <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
                Post
              </button>
            </form>
            <div className="mt-4 space-y-2">
              {comments.map((comment) => (
                <div key={comment.id} className="bg-gray-200 p-2 rounded-md">
                  <p className="text-gray-800">{comment.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Blog;
