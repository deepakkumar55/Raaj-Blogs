import React, { useState, useEffect } from 'react';
import { subscribe, unsubscribe, getSubscriptionStatus } from '../services/subscriptionService';

const SubscribeButton = ({ blogId }) => {
  const [subscribed, setSubscribed] = useState(false);
  const [loading, setLoading] = useState(true); // Initialize loading state

  useEffect(() => {
    const fetchSubscriptionStatus = async () => {
      try {
        const response = await getSubscriptionStatus(blogId);
        setSubscribed(response.data.subscribed);
      } catch (error) {
        console.error('Error fetching subscription status:', error);
      } finally {
        setLoading(false); // Update loading state after fetching
      }
    };
    fetchSubscriptionStatus();
  }, [blogId]);

  const handleSubscribe = async () => {
    setLoading(true); // Set loading state before subscription action

    try {
      if (subscribed) {
        await unsubscribe(blogId);
      } else {
        await subscribe(blogId);
      }
      setSubscribed(!subscribed); // Toggle subscribed state after successful action
    } catch (error) {
      console.error('Error toggling subscription:', error);
    } finally {
      setLoading(false); // Update loading state after subscription action
    }
  };

  return (
    <button
      onClick={handleSubscribe}
      className={`px-4 py-2 rounded ${
        subscribed ? 'bg-red-500 hover:bg-red-600' : 'bg-red-500 hover:bg-blue-600'
      } text-white ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
      disabled={loading}
    >
      {loading ? 'Loading...' : subscribed ? 'Unsubscribe' : 'Subscribe'}
    </button>
  );
};

export default SubscribeButton;
