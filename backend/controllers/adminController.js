const Blog = require('../models/Blog');
const User = require('../models/User');

exports.getDashboardData = async (req, res) => {
  try {
    const blogCount = await Blog.countDocuments();
    const userCount = await User.countDocuments();
    res.status(200).json({ blogCount, userCount });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};
