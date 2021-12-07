const Customer  = require('../models/Customer');

exports.getCustomer = async (req, res) => {
    try {
        const customer = await Customer.find({username: req.params.id})

        if (!customer) {
            return res.status(404).json({
                msg: "Customer not found"
            });
        }
        
        return res.status(200).json({
            success: true,
            data: customer
        });
    } catch (err) {
        return res.status(500).json({
            success: false,
            errors: {
                error: 'Could not get customer'
            }
        });
    }
};

exports.addCustomer = async (req, res) => {
    try {
        let { username, email, firstName, lastName, ...rest } = req.body;

        const data = new Customer({
            username: username,
            email: email,
            firstName: firstName,
            lastName: lastName,
            ...rest
        });

        const customer = await data.save();

        return res.status(201).json({
            success: true,
            data: customer
        });
    } catch (err) {
        return returnError(err, res, 500, 'Customer not added. Try again.');
    }
};