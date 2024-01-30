const express = require('express');
const router = express.Router();
const upload = require("../Middleware/Multer.js");
const verifyToken = require('../Middleware/Jwtauth.js'); 
const addproduct = require('../Controllers/Admincontroller.js');
const fetchSingleProduct = require('../Controllers/Admincontroller.js')
const deleteSingleProduct = require('../Controllers/Admincontroller.js')
const editSingleProduct = require('../Controllers/Admincontroller.js');
const getProductsByCategory = require('../Controllers/Admincontroller.js');
const getAllOrders = require('../Controllers/Admincontroller.js');
const updateOrderStatus = require('../Controllers/Admincontroller.js');
//Defining the routes
router.get('/products/:category',getProductsByCategory.getProductsByCategory);
router.get('/product/:id', fetchSingleProduct.fetchSingleProduct );
router.delete('/product/:id',verifyToken, deleteSingleProduct.deleteSingleProduct);
router.post('/addproduct', verifyToken, upload.single('image'), addproduct.addproduct);
router.patch('/editproduct/:id', verifyToken, upload.single('image'), editSingleProduct.editSingleProduct);
router.get('/orders', verifyToken, getAllOrders.getAllOrders);
router.patch('/updateorder/:id',verifyToken,updateOrderStatus.updateOrderStatus)
module.exports =router;