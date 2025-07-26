


const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require("dotenv").config();
const UserRoute = require("./routes/userRoute");
const adminRoute = require("./routes/adminRoute");
const ProductRoute = require("./routes/productRoute");
const paymentRoutes = require("./routes/paymentRoute");

const port = process.env.PORT || 8000;

mongoose.connect(process.env.DBCON).then(() => {
  console.log("ATLAS DATABASE ESTABLISHED");
});
app.use((req, res, next) => {
  res.setHeader(
    "Content-Security-Policy",
    "default-src 'self'; " +
    "img-src 'self' data: https://q.stripe.com https://js.stripe.com https://m.stripe.network https://m.stripe.com https://b.stripecdn.com; " +
    "script-src 'self' 'unsafe-inline' https://js.stripe.com; " +
    "frame-src https://js.stripe.com; " +
    "connect-src 'self' https://api.stripe.com https://m.stripe.network;"
  );
  next();
});

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());




app.use("/admin", adminRoute);
app.use("/product", ProductRoute);
app.use("/user", UserRoute);
app.use('/api/payment', paymentRoutes);

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
