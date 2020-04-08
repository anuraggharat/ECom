//routes
const express = require("express")
const router = express.Router()
const {getCategoryById,createCategory,getCategory,getCategories,updateCategory,removeCategory} = require("../controllers/category")
const {isAuthenticated,isAdmin,isSignedIn} = require("../controllers/auth")
const {getUserById} = require("../controllers/user")


router.param("userId",getUserById)
router.param("categoryId",getCategoryById)

router.post("/category/create/:userId",isSignedIn,isAuthenticated,isAdmin,createCategory)
router.get("/category/:categoryId",getCategory)
router.get("/categories",getCategories)

router.put("/category/:categoryId/:userId",isSignedIn,isAuthenticated,isAdmin,updateCategory)

router.delete("/category/:categoryId/:userId",isSignedIn,isAuthenticated,isAdmin,removeCategory)


module.exports=router