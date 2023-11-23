const app = require('./app');
const db = require('./config/db');
const userModel = require('./model/user_model');
const user_route = require('./routers/user_route');
const body_parser = require('body-parser');
const PORT = 5000;

app.use(body_parser.json());
app.use('/', user_route);


app.listen(PORT, (err)=>{
    if(!err){
        console.log(`Server Listening on Port http://localhost:${PORT}`);
    }
});