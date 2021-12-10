const amqp = require('amqplib');
const mongoose = require('mongoose');

const Transaction = require('../models/Transaction')

module.exports = async (channel) => {
    try {
        channel = await channel
        const result =  await channel.assertQueue('Payment')
        channel.consume('Payment', async message => {
            console.log("Message received. Saving in Database...")
            
            const data = JSON.parse(message.content.toString())

            const session = await mongoose.startSession()
            session.withTransaction(async() => {
                payload = new Transaction(data)

                await payload.save({session})

                channel.ack(message)
            })
            session.endSession()
        })
    } catch (err) {
        console.error(err)
    }
}