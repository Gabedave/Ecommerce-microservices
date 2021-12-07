const express = require('express');

const { getCustomer, addCustomer } = require('../controllers/customer');

const router = express.Router();

router.get('/getCustomer/:id', getCustomer);
router.put('/addCustomer', addCustomer)
    
module.exports = router;