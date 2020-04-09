const express = require("express");
const router = express.Router();
const {isSignedIn,isAdmin,isAuthenticated}=require("../controllers/auth")
const {getUserById,pushOrderInPurchaseList}=require("../controllers/user")
const {updateStock}=require("../controllers/product")

const {getOrderById,createOrder,getAllOrders,UpdateOrderStatus,getOrderStatus}=require("../controllers/order")


router.param("userid",getUserById)
router.param("orderid",getOrderById)

router.post("/order/create/:userId",isSignedIn,isAuthenticated,pushOrderInPurchaseList,updateStock,createOrder)
router.get("/order/all/:userId",isSignedIn,isAuthenticated,isAdmin,getAllOrders)

router.get("/order/status/:userId",isSignedIn,isAuthenticated,isAdmin,getOrderStatus)
router.put("/order/:orderId/status/:userId",isSignedIn,isAuthenticated,isAdmin,UpdateOrderStatus)


module.exports = router