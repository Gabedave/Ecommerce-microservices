const express = require('express');

const { pay } = require('../controllers/pay');

const router = express.Router();

router.get('/', pay);
    
module.exports = router;