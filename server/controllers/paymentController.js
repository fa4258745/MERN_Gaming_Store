require('dotenv').config(); // at top of file
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

createPaymentIntent = async (req, res) => {
  try {
    const { amount, items, customerInfo } = req.body;
    
    console.log('Creating payment intent for amount:', amount);
    console.log('Customer info:', customerInfo);
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: 'inr',
      automatic_payment_methods: {
        enabled: true,
      },
      metadata: {
        customerName: customerInfo.name,
        customerEmail: customerInfo.email,
      }
    });

    console.log('Payment intent created with id:', paymentIntent.id);
    
    res.status(200).json({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    console.error('Payment intent error:', error);
    res.status(500).json({ error: error.message });
  }
};


module.exports ={
  createPaymentIntent
}



