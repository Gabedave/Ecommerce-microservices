const mongoose = require('mongoose');

const TransactionSchema = new mongoose.Schema({
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

    orderId: {
        type: mongoose.Schema.ObjectId,
        ref: 'Order',
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
});

module.exports = mongoose.model('Transaction', TransactionSchema);