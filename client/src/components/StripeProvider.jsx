import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
const stripePromise = loadStripe('pk_test_51Rf2bnBeaJARbmm6Gh58A2UjtkK6qAUqir0d3XjtL32bnr7sEoCgbabJRM4Sw6Hz41Y5wX0L6ItF2CGSO4ZEVc1m00tRMk3kKA');

const StripeProvider = ({ children }) => {
  return (
    <Elements stripe={stripePromise}>
      {children}
    </Elements>
  );
};
export default StripeProvider;
