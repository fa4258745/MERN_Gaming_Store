const express = require("express");
const router = express.Router();
const ProductController = require("../controllers/productController");
router.get("/homedisplay", ProductController.homeDisplay);
router.get("/productdisplay", ProductController.productDisplay);
module.exports = router;
