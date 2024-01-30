const express = require('express');
const router = express.Router();
const upload = require("../Middleware/Multer.js");
const registerUser = require('../Controllers/Usercontroller.js')
const loginUser = require('../Controllers/Usercontroller.js')
const updateUser = require('../Controllers/Usercontroller.js')
const verifyToken = require('../Middleware/Jwtauth.js');
const deleteUser = require('../Controllers/Usercontroller.js');
const cartAddProduct = require('../Controllers/Usercontroller.js');
const getCartProducts  = require('../Controllers/Usercontroller.js');
const updateUserCart  = require('../Controllers/Usercontroller.js');
const deleteProductFromCart  = require('../Controllers/Usercontroller.js');
const getNumberofItems  =  require('../Controllers/Usercontroller.js');
const registerOrders =  require('../Controllers/Usercontroller.js');
const getUserOrders = require('../Controllers/Usercontroller.js');
const getSearchedItems = require('../Controllers/Usercontroller.js');
router.post('/Register',upload.single('image') , registerUser.registerUser);
router.post('/Login', loginUser.loginUser);
router.patch('/updateprofile/:id',verifyToken,upload.single('image') , updateUser.updateUser);
router.delete('/deleteprofile/:id',verifyToken,deleteUser.deleteUser );
router.post('/cart/addproduct/:id',verifyToken, cartAddProduct.cartAddProduct);
router.get('/cart',verifyToken, getCartProducts.getCartProducts);
router.patch('/cart/editquantity/:id/:type', verifyToken, updateUserCart.updateUserCart);
router.delete('/cart/delete/:id', verifyToken, deleteProductFromCart.deleteProductFromCart);
router.get('/cart/numberofitems' , verifyToken, getNumberofItems.getNumberofItems);
router.get('/manageorders',verifyToken,registerOrders.registerOrders );
router.get('/orders', verifyToken, getUserOrders.getUserOrders);
router.get('/searchedproducts/:itemname', getSearchedItems.getSearchedItems);
module.exports = router;