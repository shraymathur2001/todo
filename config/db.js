const mongoose = require('mongoose');

const dbConnect = async () => {
    try{
        await mongoose.connect("mongodb://0.0.0.0:27017/todo");
        console.log("Connected to Database successfully");
    }
    catch(e){
        console.log("Failed to connect to databse");
    }
};

module.exports = dbConnect();