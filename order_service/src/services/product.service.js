request = require('request')

exports.getProductById = async (productId) => {
    try {
        return new Promise(resolve => {
            url = process.env.PRODUCT_SERVICE_URI + `/getProduct/${productId}`
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

exports.addProduct = async (data) => {
    try {
        return new Promise(resolve => {
            request({
                url: process.env.PRODUCT_SERVICE_URI + `/addCustomer`,
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