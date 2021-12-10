request = require('request')

exports.pay = async (data) => {
    try {
        return new Promise(resolve => {
            url = process.env.PAYMENT_SERVICE_URI + `/pay`
            request({
                url: url,
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: data,
                json: true
            }, function (error, response, body) {
                if(!error)
                    resolve(body);
            })
        })
        .then((json) => {
            if (json.success) return json.data
            else throw new Error()
        })
        
    } catch (err) {
        console.error(err)
        return false
    }
}