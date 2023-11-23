const userService = require('./../services/user_services');

// here we take the data from postman or frontend and sends to service
const register = async (req, res) => {
    try {
        const email = req.body.email;
        const password = req.body.password;
        
        const result = await userService.registerUser(email, password);
        res.json({status:true, success:"User Registered successfully"});

    } catch (error) {
       throw error;
    }
}

module.exports = register;