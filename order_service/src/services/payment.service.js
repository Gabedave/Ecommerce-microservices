request = require('request')

exports.pay = async (data) => {
    try {
        const payment = await request({
            url: process.env.PAYMENT_SERVICE_URI + `/pay`,
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: data
        })
        .then((res) => res.json())
        .then((json) => {
            if (json.success) return json.data
            else throw new Error()
        })
        return payment
        
    } catch (err) {
        console.error(err)
        return false
    }
}