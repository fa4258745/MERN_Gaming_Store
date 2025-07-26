const UserModel = require("../models/userModel");
const bcrypt =require("bcrypt")
const jwt = require("jsonwebtoken");

const userSignUp = async (req, res) => {
  const { name, city, address, pincode, email, password } = req.body;
 console.log(password)
    const salt = await bcrypt.genSalt(10); 
  const hashedPsw = await bcrypt.hash(password, salt);
  const User = await UserModel.create({
        name:name,
    city:city,
    address:address,
    pincode:pincode,
    email: email,
    password:  hashedPsw,
  });
  res.status(200).send({ msg: "User successfully registered!!!" });
};



const usrLogin=async(req, res)=>{
    const user = await UserModel.findOne({ email: req.body.email });
    try{
        const match = await bcrypt.compare(req.body.password, user.password);

        const accessToken = jwt.sign(JSON.stringify(user), process.env.TOKEN_SECRET)
        if(match){
          return  res.json({ accessToken: accessToken });
        } else {
           return res.json({ message: "Invalid Credentials" });
        }
    } catch(e) {
        console.log(e)
    }
}




const userAuthentication=async(req,res)=>{
  const token = req.header("x-auth-token");
     if (!token) return res.json(false);
  const verified = jwt.verify(token, process.env.TOKEN_SECRET);
  console.log(verified);

  if (!verified) return res.json(false);
  const user = await UserModel.findById(verified._id);

  if (!user) return res.json(false);

    return res.json(user);

}


const getUser=async(req, res)=>{
     const User= await UserModel.findById(req.query.userid);
     console.log(User);
     res.send(User);
}

module.exports = {
  userSignUp,
  usrLogin,
userAuthentication,
   getUser
};
