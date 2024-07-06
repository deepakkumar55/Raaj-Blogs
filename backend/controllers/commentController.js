const Comment = require('../models/Comment');

exports.createComment = async (req, res) => {
  const { postId, text } = req.body;
  try {
    const comment = new Comment({ postId, text, user: req.user.id });
    await comment.save();
    res.status(201).json(comment);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};

exports.getComments = async (req, res) => {
  try {
    const comments = await Comment.find({ postId: req.params.postId });
    res.status(200).json(comments);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};
