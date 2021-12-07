const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
    customerId: {
        type: mongoose.Schema.ObjectId,
        ref: 'Customer',
        required: true
    },

    productId: {
        type: mongoose.Schema.ObjectId,
        ref: 'Product',
        required: true
    },

    amount: {
        type: String,
        required: true
    },

    date: {
        type: Date,
        default: Date.now
    },

    status: {
        type: String,
    }
});

module.exports = mongoose.model('Order', OrderSchema);