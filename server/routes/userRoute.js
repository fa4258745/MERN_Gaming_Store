const express =require ("express")
const route=express.Router()
const UserController =require("../controllers/userController")

route.post("/registration",UserController.userSignUp)
route.post("/login",UserController.usrLogin)
route.post("/authuser",UserController.userAuthentication)
route.post("/getuser",UserController.getUser)

module.exports=route;