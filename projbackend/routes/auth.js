//all auth routes here
//we make all the basic routing and call controllers to do the further job

var express = require('express')
var router = express.Router()
const {check} = require('express-validator')
const {signout,signup,signin,isSignedIn}=require('../controllers/auth')

router.post("/signup",[
    check("name","name should be atleast 3 character").isLength({min:3}),
    check("email","Email is necessary").isEmail(),
    check("password","password should be 8 characters long").isLength({min:8}),
],signup)

router.post("/signin",[
    check("email","Email is necessary").isEmail(),
    check("password","password field is compulsary").isLength({min:8}),
],signin)

router.get("/signout",signout)
router.get("/test",isSignedIn,(req,res)=>{
    res.json(req.auth)
})

module.exports = router;