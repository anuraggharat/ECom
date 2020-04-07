const User = require("../models/user");
const {check,validationResult} = require('express-validator')
require("dotenv").config()
var jwt = require('jsonwebtoken')
var expressJwt = require('express-jwt')



//signin controller
exports.signin = (req,res)=>{
  //validation result returns a resuklt so it is necessary to return a value
  const errors = validationResult(req)
  const {email,password}= req.body;
  
  if (!errors.isEmpty()){
    return res.status(422).json({
      error:errors.array()[0].msg
    })
  }
  User.findOne({email},(err,user)=>{
    if(err || !user){
      return res.status(400).json({
        error:"User email doesnot exist"
      })
    }
    if(!user.authenticate(password)){
        return res.status(401).json({
          error:"Email and password does not match"
        })
    }
    const token = jwt.sign({_id:user._id},process.env.SECRET)
    res.cookie("token",token,{expire:new Date() + 9999})
    const {_id,name,email,role}=user
    return res.json({token,user:{_id,name,email,role}});
  
  })

}


//signup controller
exports.signup = (req, res) => { 
  const errors = validationResult(req)
  if (!errors.isEmpty()){
    return res.status(422).json({
      error:errors.array()[0].msg
    })
  }
  
  const user = new User(req.body);
  user.save((err, user) => {
    if (err) {
      return res.status(400).json({
        err: "NOT able to save user in DB"
      });
    }
    res.json({
      name:user.name,
      email:user.email,
      id:user._id,
    });
  });
};




//signout controller
exports.signout = (req, res) => {
  res.clearCookie("token")
  res.json({
    message: "User signout successfully"
  });
};


//protected routes
//JWT-json web tokens
exports.isSignedIn=expressJwt({
  secret:process.env.SECRET,
  userProperty:"auth"
});
exports.isAuthenticated=(req,res,next)=>{
  let checker=req.profile && req.auth && req.profile._id==req.auth._id
  if(!checker){
    return res.status(403).json({
      error:"Access Denied"
  })
  } 

  next();
}

exports.isAdmin=(req,res,next)=>{
  if(req.profile.role===0)
  {
    return res.status(403).json({
      error:"Admin nahi hain tu bhosdike"
    })
  }
  next();
}