const Subscription = require('../models/Subscription');

exports.subscribe = async (req, res) => {
  const { blogId } = req.body;
  try {
    const subscription = new Subscription({ blogId, user: req.user.id });
    await subscription.save();
    res.status(201).json(subscription);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};

exports.unsubscribe = async (req, res) => {
  try {
    const subscription = await Subscription.findOneAndDelete({ blogId: req.params.blogId, user: req.user.id });
    if (!subscription) {
      return res.status(404).json({ error: 'Subscription not found' });
    }
    res.status(200).json({ message: 'Unsubscribed' });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};

exports.getSubscriptionStatus = async (req, res) => {
  try {
    const subscription = await Subscription.findOne({ blogId: req.params.blogId, user: req.user.id });
    res.status(200).json({ subscribed: !!subscription });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};
