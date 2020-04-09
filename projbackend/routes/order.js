const express = require("express");
const router = express.Router();
const {isSignedIn,isAdmin,isAuthenticated}=require("../controllers/auth")
const {getUserById,pushOrderInPurchaseList}=require("../controllers/user")
const {updateStock}=require("../controllers/product")

const {getOrderById,createOrder}=require("../controllers/order")


router.param("userid",getUserById)
router.param("orderid",getOrderById)

router.post("/order/create/:userId",isSignedIn,isAuthenticated,pushOrderInPurchaseList,updateStock,createOrder)


module.exports = router