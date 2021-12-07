request = require('request')

exports.getProductById = async (productId) => {
    try {
        const product = await request({
            url: process.env.PRODUCT_SERVICE_URI + `/getProduct/${productId}`,
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

exports.addProduct = async (data) => {
    try {
        const product = await request({
            url: process.env.PRODUCT_SERVICE_URI + `/addProduct`,
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