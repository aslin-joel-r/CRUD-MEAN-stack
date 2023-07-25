const express=require('express');
const router=express.Router();

const Employee=require('../models/employee_models.js');

router.get('/s',(res,req)=>{
   Employee.find()
   .then(data=>res.send(data))
   .catch(err => console.log(err))
})

module.exports=router;