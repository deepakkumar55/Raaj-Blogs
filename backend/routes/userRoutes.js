const express = require('express');
const { getUsers, deleteUser } = require('../controllers/userController');
const auth = require('../middlewares/authMiddleware');
const admin = require('../middlewares/adminMiddleware');
const router = express.Router();

router.get('/', auth, admin, getUsers);
router.delete('/:id', auth, admin, deleteUser);

module.exports = router;
