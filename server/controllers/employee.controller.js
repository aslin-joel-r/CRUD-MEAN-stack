const express = require('express');
const router = express.Router();

const Employee = require('../models/employee.models.js');

router.get('/', (req, res) => { // <-- Corrected order of parameters
  Employee.find()
    .then(data => res.json(data))
    .catch(err => console.log(err))
});

module.exports = router;
