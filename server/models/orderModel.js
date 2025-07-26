// const mongoose= require("mongoose");
// const orderSchema= new mongoose.Schema({
//     amount:Number,
//     products:String, 
//     clientname:String,
//     city:String, 
//     address:String,
//     pincode:Number, 
//     email:String
// }, { timestamps: true })
// module.exports = mongoose.model("order", orderSchema);









const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  products: [
    {
      name: String,
      price: Number,
      qnty: Number
    }
  ],
  amount: Number,
  clientname: String,
  city: String,
  address: String,
  pincode: Number,
  email: String,
  paymentId: String,
}, { timestamps: true });

module.exports = mongoose.model("Order", orderSchema);
