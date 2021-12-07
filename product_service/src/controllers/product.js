const Product  = require('../models/Product');

exports.getProduct = async (req, res) => {
    try {
        const product = await Product.find({productId: req.params.id})

        if (!product) {
            return res.status(404).json({
                msg: "Product not found"
            });
        }
        
        return res.status(200).json({
            success: true,
            data: product
        });
    } catch (err) {
        return res.status(500).json({
            success: false,
            errors: {
                error: 'Could not get product'
            }
        });
    }
};

exports.addProduct = async (req, res) => {
    try {
        let { productId, name, description, price, ...rest } = req.body;

        const data = new Product({
            productId,
            name,
            description,
            price,
            ...rest
        });

        const product = await data.save();

        return res.status(201).json({
            success: true,
            data: product
        });
    } catch (err) {
        return returnError(err, res, 500, 'Product not added. Try again.');
    }
};