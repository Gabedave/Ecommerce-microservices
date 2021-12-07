const amqp = require('amqplib');
const Transaction = require('../models/Transaction')


module.exports = async () => {
    try {
        const connection = await amqp.connect(process.env.RABBITMQ_URI)
        const channel = await connection.createChannel()
        const result =  await channel.assertQueue('Payment')
        channel.consume('Payment', async message => {
            console.log("Message received. Saving in Database...")
            
            const data = JSON.parse(message.content.toString())

            payload = new Transaction(data)

            await payload.save()

            channel.ack(message)

        })
    } catch (err) {
        console.error(err)
    }
}