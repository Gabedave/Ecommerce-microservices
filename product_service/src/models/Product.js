const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    productId: {
        type: String,
        required: [true, 'Product id is required']
    },

    name: {
        type: String,
        required: [true, 'Product name is required!'],
    },

    description: {
        type: String,
        required: [true, 'Description is required!']
    },

    price: {
        type: Number,
        required: [true, 'Price is required!']
    },

    imageUrl: {
        type: [String]
    },

    vendor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Vendor'
    },

    count: {
        type: String
    },

    reviews: {
        type: mongoose.Schema.ObjectId,
        ref: 'Reviews'
    },

    createdAt: {
        type: Date,
        default: Date.now
    },
});

module.exports = mongoose.model('Product', ProductSchema);