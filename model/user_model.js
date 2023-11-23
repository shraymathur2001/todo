const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

// this is userschema or can say type of data to be inserted in collection
const userSchema = mongoose.Schema({
    email: {
        type: String,
        require: true,
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        require: true,
        unique: true,
    }
});

// converting password into hash
userSchema.pre('save', async function (){
    try {
        var user = this;
        const salt = await (bcrypt.genSalt(10));
        const hashpass = await bcrypt.hash(user.password, salt);

        user.password = hashpass;
    }
    catch (error) {
        throw error;
    } 
});

// model is creation of collection here we have created user collection
// now we will go to services
const userModel = mongoose.model('user', userSchema);
module.exports = userModel;