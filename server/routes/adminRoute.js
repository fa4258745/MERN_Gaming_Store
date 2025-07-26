const express = require("express");
const route= express.Router();
const AdminController= require("../controllers/adminController");
route.post("/adminlogin", AdminController.adminLogin);
route.post("/productsave",AdminController.productSave)
route.get("/ourorder", AdminController.ourOrder);



// route.post("/", AdminController.createOrder); 


module.exports=route;