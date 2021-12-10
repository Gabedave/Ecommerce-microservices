request = require('request')

exports.getCustomerById = async (username) => {
    try {
        return new Promise(resolve => {
            url = process.env.CUSTOMER_SERVICE_URI + `/getCustomer/${username}`
            request({
                url: url,
                method: "GET",
                headers: { "Content-Type": "application/json" },
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

exports.addCustomer = async (data) => {
    try {
        return new Promise(resolve => {
            request({
                url: process.env.CUSTOMER_SERVICE_URI + `/addCustomer`,
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: data
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