const express = require('express');
const router = express.Router();

const Employee = require('../models/employee.models.js');
const {generateCrudMethods}=require('../services/index.js')
const employeeCrud=generateCrudMethods(Employee);
const {validateDbId, raiseReecord404Error,errorHandler} =require('../middlewares/validate.js')

router.get('/', (req, res,next) => {
  employeeCrud.getAll()
    .then(data => res.json(data))
    .catch(err => next(err))
});

router.get('/:id', (req, res,next) =>
 {
   employeeCrud.getById(req.params.id)
     .then(data => {
      if(data)
         res.send(data)
      else
      raiseReecord404Error(req,res)
     })
     .catch(err => next(err))
 });

 
router.post('/',(req,res,next)=>{
   employeeCrud.create(req.body)
   .then(data=>res.status(201).json(data))
   .catch(err => next(err))
})

router.put('/:id',validateDbId,(req,res)=>{
   employeeCrud.update(req.params.id,req.body)
   .then(data => {
      if(data)
         res.send(data)
      else
      raiseReecord404Error(req,res)
     })
     .catch(err => next(err))
})

router.delete('/:id',(req,res)=>{
   employeeCrud.delete(req.params.id)
   .then(data => {
      if(data)
         res.send(data)
      else
      raiseReecord404Error(req,res)
     })
     .catch(err => next(err))
})
module.exports = router;
