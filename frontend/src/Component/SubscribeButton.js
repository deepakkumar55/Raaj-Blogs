import React, { useState, useEffect } from 'react';
import { subscribe, unsubscribe, getSubscriptionStatus } from '../services/subscriptionService';

const SubscribeButton = ({ blogId }) => {
  const [subscribed, setSubscribed] = useState(false);

  useEffect(() => {
    const fetchSubscriptionStatus = async () => {
      const response = await getSubscriptionStatus(blogId);
      setSubscribed(response.data.subscribed);
    };
    fetchSubscriptionStatus();
  }, [blogId]);

  const handleSubscribe = async () => {
    if (subscribed) {
      await unsubscribe(blogId);
    } else {
      await subscribe(blogId);
    }
    setSubscribed(!subscribed);
  };

  return (
    <button onClick={handleSubscribe} className="px-4 py-2 bg-blue-500 text-white rounded">
      {subscribed ? 'Unsubscribe' : 'Subscribe'}
    </button>
  );
};

export default SubscribeButton;
