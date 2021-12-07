const amqp = require('amqplib');

exports = async (data) => {
    try {
        const connection = await amqp.connect(process.env.RABBITMQ_URI)
        const channel = await connection.createChannel()
        const result =  await channel.assertQueue('Payment')
        channel.sendToQueue('Payment', Buffer.from(JSON.stringify(data), {persistent: true}))
    } catch (err) {
        console.error(err)
        return false
    }
}