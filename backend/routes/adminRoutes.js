const express = require('express');
const { getDashboardData } = require('../controllers/adminController');
const auth = require('../middlewares/authMiddleware');
const admin = require('../middlewares/adminMiddleware');
const router = express.Router();

router.get('/dashboard', auth, admin, getDashboardData);

module.exports = router;
