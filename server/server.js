const bodyParser = require('body-parser');
const express=require('express');

const connectDb=require('./db.js');
const employeeRoutes=require('./controllers/employee_controller.js');

const app=express();

app.use(bodyParser.json());
app.use('/api/employee',(req,res)=>{
    res.send('Hello from the server!!!!'); 
    })

connectDb()
    .then(()=>{
        console.log('Connected with the database!!!!');
        app.listen(3000,()=>{
            console.log('Server is running.....');
        })
    })
    .catch((err)=>console.log('Not connected with the database!!!!'));