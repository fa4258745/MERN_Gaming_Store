// const OrderModel = require("../models/orderModel");

// const createOrder = async (req, res) => {
//   try {
//     const { items, customerInfo, amount, paymentId } = req.body;
//     const newOrder = new OrderModel({ items, customerInfo, amount, paymentId });
//     await newOrder.save();
//     res.status(201).json({ message: "Order saved successfully", order: newOrder });
//   } catch (error) {
//     res.status(500).json({ error: "Failed to save order" });
//   }
// };

// const getAllOrders = async (req, res) => {
//   try {
//     const orders = await OrderModel.find();
//     res.status(200).json(orders);
//   } catch (error) {
//     res.status(500).json({ error: "Failed to fetch orders" });
//   }
// };

// module.exports = { createOrder, getAllOrders };








const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY); // Use .env instead of hardcoding
// const stripe = require('stripe')('your_secret_key_here');
const OrderModel = require('../models/orderModel');

exports.createPaymentIntent = async (req, res) => {
  try {
    const { amount, items, customerInfo } = req.body;

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

    // Save to MongoDB
    await OrderModel.create({
      amount,
      products: items,
      clientname: customerInfo.name,
      email: customerInfo.email,
      address: customerInfo.address,
      city: customerInfo.city,
      pincode: customerInfo.pincode,
      paymentId: paymentIntent.id,
    });

    res.status(200).json({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    console.error('Payment intent error:', error);
    res.status(500).json({ error: error.message });
  }
};
