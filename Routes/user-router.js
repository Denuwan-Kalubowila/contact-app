const express=require("express")
const userController = require("../Controllers/user-controller")
const asyncHandler = require("express-async-handler");
const validateToken = require("../middleware/validateToken");

const router=express.Router()

router.post("/register",asyncHandler(userController.userRegister))
router.post("/login",asyncHandler(userController.userLogin))
router.get("/current",asyncHandler(validateToken),asyncHandler(userController.currentUser))

module.exports=router
