request = require('request')

exports.getCustomerById = async (username) => {
    try {
        const customer = await request({
            url: process.env.CUSTOMER_SERVICE_URI + `/getCustomer/${username}`,
            method: 'GET',
            headers: { "Content-Type": "application/json" }
        })
        .then((res) => res.json())
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
        const customer = await request({
            url: process.env.CUSTOMER_SERVICE_URI + `/addCustomer`,
            method: 'PUT',
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
        
    } catch (err) {
        console.error(err)
        return false
    }
}