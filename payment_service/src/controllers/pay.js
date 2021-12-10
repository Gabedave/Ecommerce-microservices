const connectRabbitMQ = require('../config/mq')

const channel = connectRabbitMQ()
const publish = require('../services/publisher');

exports.pay = async (req, res) => {
    try {
        
        let { _id, customerId, productId, amount } = req.body
        
        const data = {
            orderId: _id,
            customerId,
            productId,
            amount }
        const response = await publish(await channel, data)

        if (!response) throw new Error('Payment failed')

        return res.status(200).json({
            success: true,
            data: data
        });
    } catch (err) {
        return res.status(500).json({
            success: false,
            errors: {
                error: `Payment failed. Try again. ${err}`
            }
        });
    }
};