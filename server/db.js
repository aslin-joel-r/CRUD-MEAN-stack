const mongoose = require('mongoose');

const dburi = 'mongodb://localhost:27017/employee_db';

const connectDb = () => {
  return mongoose.connect(dburi, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

module.exports = connectDb;
