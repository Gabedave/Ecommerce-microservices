const mongoose = require('mongoose');

const CustomerSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, 'Username is required'],
        unique: true
    },

    email: {
        type: String,
        required: [true, 'Email address is required!'],
        unique: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Invalid email address']
    },

    firstName: {
        type: String,
        required: [true, 'Name is required!']
    },

    lastName: {
        type: String,
        required: [true, 'Name is required!']
    },

    phone: {
        type: String,
        match: [/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/, 'Invalid phone number!']
    },

    city: {
        type: String
    },

    country: {
        type: String
    },

    dateOfBirth: {
        type: String
    },

    gender: {
        type: String
    },

    orderList: {
        type: [mongoose.Schema.ObjectId],
        ref: 'Orders'
    },

    createdAt: {
        type: Date,
        default: Date.now
    },

    lastPurchased: {
        type: Date
    }
});

module.exports = mongoose.model('Customer', CustomerSchema);