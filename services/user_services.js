const userModel = require('./../model/user_model');

// static function doesnt require objects
// here new instance of usermodel is created and data is stored in db
class userService{
    static async registerUser(mail, pswd){
        try {
            const createUser = new userModel({
                email:mail,
                password:pswd
            });
            return await createUser.save();
        } catch (error) {
            throw error;
        }
    }
}

module.exports = userService;