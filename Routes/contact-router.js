const express = require("express");
const contactController=require("../Controllers/contact-controller")
const asyncHandler = require("express-async-handler");
const validateToken = require("../middleware/validateToken");

const router=express.Router()

router.use(asyncHandler(validateToken))

router.get('/',asyncHandler(contactController.getAllContacts))
router.get('/:id',asyncHandler(contactController.getContactID))
router.post('',asyncHandler(contactController.addContacts))
router.put('/:id',asyncHandler(contactController.updateContacts))
router.delete('/:id',asyncHandler(contactController.deleteContacts))

module.exports=router