const express = require('express');
const { subscribe, unsubscribe, getSubscriptionStatus } = require('../controllers/subscriptionController');
const auth = require('../middlewares/authMiddleware');
const router = express.Router();

router.post('/', auth, subscribe);
router.delete('/:blogId', auth, unsubscribe);
router.get('/:blogId/status', auth, getSubscriptionStatus);

module.exports = router;
