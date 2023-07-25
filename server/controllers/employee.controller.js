const express = require('express');
const router = express.Router();

const ObjectId=require('mongoose').Types.ObjectId;
const Employee = require('../models/employee.models.js');

router.get('/', (req, res) => {
  Employee.find()
    .then(data => res.json(data))
    .catch(err => console.log(err))
});

router.get('/:id', (req, res) => {
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

 
router.post('/',(req,res)=>{
   Employee.create(req.body)
   .then(data=>res.status(201).json(data))
   .catch(err=>console.log(err))
})

module.exports = router;
