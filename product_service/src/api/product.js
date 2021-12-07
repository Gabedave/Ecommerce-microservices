const express = require('express');

const { getProduct, addProduct } = require('../controllers/product');

const router = express.Router();

router.get('/getProduct/:id', getProduct);
router.put('/addProduct', addProduct)
    
module.exports = router;