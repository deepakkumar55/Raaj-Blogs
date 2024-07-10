const jwt = require('jsonwebtoken');
const User = require('./models/User'); 

const authenticateJWT = async (req, res, next) => {
  const token = req.cookies.jwt;
  if (!token) {
    return res.sendStatus(403);
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.id);
    if (!user) {
      return res.sendStatus(403);
    }
    req.user = user;
    next();
  } catch (err) {
    return res.sendStatus(403);
  }
};

module.exports = authenticateJWT;
