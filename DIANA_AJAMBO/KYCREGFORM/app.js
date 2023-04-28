const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const config = require('./config/database');  // require("dotenv").config;

//support parsing of application/json type post data
app.use(bodyParser.json());


//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));

//creating a connection between the controller and the database
mongoose.connect(config.database, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const db = mongoose.connection;
//checking if db has connected
db.once('open',()=>{
  console.log('connected to db')
});
db.on('error',(err)=>{
console.error(err)
})

app.set('view engine','pug');
app.set('views', path.join(__dirname,'views'));
app.use(express.static(path.join(__dirname,'public')));



const registerRoute = require('./routes/registerRoute');



app.use ('/',registerRoute);









//This should always be the last line of code.
app.listen(4000, () => console.log('listening on port 4000'));



