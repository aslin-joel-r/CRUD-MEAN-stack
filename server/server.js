const bodyParser = require('body-parser');
const express=require('express');
const cors=require('cors');

const connectDb=require('./db.js');
const employeeRoutes=require('./controllers/employee.controller.js');
const {errorHandler}=require('./middlewares/validate.js')

const app=express();

app.use(bodyParser.json());
app.use(cors({ origin: 'http://localhost:4200' }));
app.use('/api/employees',employeeRoutes);
app.use(errorHandler);


connectDb()
    .then(()=>{
        console.log('Connected with the database!!!!');
        app.listen(3000,()=>{
            console.log('Server is running.....');
        })
    })
    .catch((err)=>console.log('Not connected with the database!!!!'));