const express=require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const employeeRoutes=require('./controllers/employee.controller.js');

const app=express();

app.use(bodyParser.json());

// connecting with the mongodb database
const dburi = 'mongodb://127.0.0.1/employee_db';

const connectDb = async () => {
  try {
     await mongoose.connect(dburi, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log('Connected to the database!');
    app.listen(3000, () => {
      console.log('Server is running.....');
    });
  } 
  catch (err) {
   console.error('Failed to connect to the database:', err.message);
  }
};

connectDb();


const router = express.Router();

const ObjectId=require('mongoose').Types.ObjectId;
const Employee = require('./models/employee.models.js');

app.get('/employees', (req, res) => {
  Employee.find()
    .then(data => res.json(data))
    .catch(err => console.log(err))
});

app.get('/employees/:id', (req, res) => {
   if(ObjectId.isValid(req.params.id)==false)
   res.status(400).json({
      error:"Given Id "+req.params.id+"is not valid"
   })
   Employee.findById(req.params.id)
     .then(data => {
      if(data)
         res.send(data)
      else
      res.status(404).json({error:"Employee record not found"+req.params.id})
     })
     .catch(err => console.log(err))
 });

 
app.post('/employees/',(req,res)=>{
   Employee.create(req.body)
   .then(data=>res.status(201).json(data))
   .catch(err=>console.log(err))
})

