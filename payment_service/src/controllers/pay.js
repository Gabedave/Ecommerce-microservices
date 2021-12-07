const publish = require('../services/publisher');

exports.pay = async (req, res) => {
    try {
        
        let { _id, customerId, productId, amount } = req.body
        
        const data = {
            orderId: _id,
            customerId,
            productId,
            amount }
        const response = await publish(data)

        if (!response) throw new Error('Payment failed')

        return res.status(201).json({
            success: true,
            data: data
        });
    } catch (err) {
        return returnError(err, res, 500, 'Payment failed. Try again.');
    }
};