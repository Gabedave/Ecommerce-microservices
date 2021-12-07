const customerService = require('../services/customer.service')
const productService = require('../services/product.service')
const paymentService = require('../services/payment.service')
const mongoose = require('mongoose')

const Order  = require('../models/Order');

exports.createOrder = async (req, res) => {
    try {
        let { username, productId, amount} = req.body;
        let customer
        let product

        if (process.env.TEST) {
            customer = {
                _id: '12134244544',
                username: 'customerA',
                email: 'customerA@gmail.com',
                firstName: 'customer',
                lastName: 'A'
            }
            product = {
                _id: '12343543533',
                productId: 'product1234',
                name: 'table',
                description: 'short table',
                price: 5.99
            }
        } else {
            customer = await customerService.getCustomerByUsername(username)
            product = await productService.getProductById(productId)
            if (!customer && !product) throw new Error("Customer or Product missing")
        }
        

        const session = await mongoose.startSession()

        let order

        await session.withTransaction(async () => {
            const data = new Order({
                customerId: customer._id,
                productId: product._id,
                amount: amount,
                orderStatus: 'pending'
            });

            pay = await paymentService.pay(data);
            if (!pay) throw new Error('Payment Failed');
            order = await data.save();

        })

        session.endSession();

        if (!order) {
            throw new Error();
        }
        
        let { _id } = order
        
        return res.status(201).json({
            success: true,
            data: {
                customerId: customer._id,
                productId: product._id,
                orderId: _id,
                orderStatus: 'pending',
            }
        });
    } catch (err) {
        return res.status(500).json({
            success: false,
            errors: {
                error: 'Order failed. Try again.'
            }
        });
    }
};