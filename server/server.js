const bodyParser = require('body-parser');
const express=require('express');
const connectDb=require('./db.js');

const app=express();

app.use(bodyParser.json());

connectDb()
    .then(()=>{
        console.log('Connected with the database!!!!');
        app.listen(3000,()=>{
            console.log('Server is running.....');
        })
    })
    .catch((err)=>console.log('Not connected with the database!!!!'));