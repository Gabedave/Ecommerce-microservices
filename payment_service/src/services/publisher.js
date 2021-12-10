
module.exports = async (channel, data) => {
    try {
        const result =  await channel.assertQueue('Payment')
        channel.sendToQueue('Payment', Buffer.from(JSON.stringify(data), {persistent: true}))
        return true
    } catch (err) {
        console.error(err)
        return false
    }
}