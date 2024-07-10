const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: { type: String },
  email: { type: String, required: true, unique: true },
  googleId: { type: String, unique: true },
  avatar: { type: String },
  roles: { type: [String], default: ['user'] },
  jwtToken: { type: String },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('User', userSchema);
