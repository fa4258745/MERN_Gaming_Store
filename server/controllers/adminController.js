const AdminModel = require("../models/adminModel");
const ProductModel = require("../models/productModel");
const OrderModel =require("../models/orderModel")
const multer = require("multer");
const cloudinary = require("../cloudnary");
const { CloudinaryStorage } = require("multer-storage-cloudinary");

// Set up Cloudinary storage for multer
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "rajphoto", // folder name Cloudinary account
    format: async (req, file) => "jpg", // supports promises as well
    public_id: (req, file) => Date.now() + "-" + file.originalname,
  },
});

const upload = multer({ storage: storage }).array("setImages", 7);
const productSave = async (req, res) => {
  upload(req, res, async (err) => {
    if (err) {
      return res.status(500).send("error uploading files" + err.message);
    }
        try {
            const { name, description, price, category } = req.body;
            const imageUrls = req.files.map(file => file.path);
            const Product= await ProductModel.create({
                 name:name, 
                description:description, 
                price:price, 
                category:category,
                images:imageUrls,
                defaultImage:imageUrls[0]
            })
           res.status(200).send("Data saved successfully!");
        } catch (error) {
            res.status(500).send("Error saving data: " + error.message);
        }
    });
};

const adminLogin = async (req, res) => {
  const { adminid, password } = req.body;
  const Admin = await AdminModel.findOne({ adminid: adminid });
  if (!Admin) {
    return res.status(401).send({ msg: "Invalid Admin ID" });
  }
  if (Admin.password != password) {
    return res.status(401).send({ msg: "Invalid Credentials!" });
  }
  res.status(201).send(Admin);
};

// const ourOrder=async(req, res)=>{
//     const Order= await OrderModel.find();
//     res.status(200).send(Order);
// }





const createOrder = async (req, res) => {
  try {
    const { items, customerInfo, amount, paymentId } = req.body;

    const newOrder = new OrderModel({
      items,
      customerInfo,
      amount,
      paymentId
    });

    await newOrder.save();
    res.status(201).json({ message: "Order saved successfully", order: newOrder });
  } catch (error) {
    console.error("Failed to save order:", error);
    res.status(500).json({ error: "Failed to save order" });
  }
};





// Fetch all orders (for table view)
const ourOrder = async (req, res) => {
  try {
    const Order= await OrderModel.find();
    res.status(200).send(Order);
  } catch (error) {
    console.error("Error fetching orders:", error);
    res.status(500).json({ error: "Failed to fetch orders" });
  }
};



module.exports = {
  adminLogin,
  productSave,
  //  ourOrder
  createOrder,
  ourOrder
};
