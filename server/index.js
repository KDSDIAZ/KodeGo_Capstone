// import modules
const express = require('express');
const record = require('./routes/record');

const sql = require('./database/mysql'); 
require('dotenv/config');


//middleware
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true,}));
// routes
app.use('/',record);
//check connection with database

app.listen(3001, ()=>{
    console.log('Running in port 3001');
})

sql.connect((err)=>{
    !err ? console.log('Database Connected') : console.log("Failed connecting to database due to:", JSON.stringify(err));
})