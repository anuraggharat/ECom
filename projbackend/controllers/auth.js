const User = require("../models/user");
const {check,validationResult} = require('express-validator')


//signin controller
exports.signin = (req,res)=>{
  const {email,password}= req.body;
  if (!errors.isEmpty()){
    return res.status(422).json({
      error:errors.array()[0].msg
    })
  }
  User.findOne({email},(err,user)=>{
    if(err){
      res.status(400).json({
        error:"User email doesnot exist"
      })
    }
    if(!user.authenticate(password)){
        return res.status(401).json({
          error:"Email and password does not match"
        })
    }
  })

}



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
  res.json({
    message: "User signout"
  });
};
