const mongoose = require('mongoose');

const dburi = 'mongodb://127.0.0.1/employee_db';

const connectDb = () => {
  return mongoose.connect(dburi, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

module.exports = connectDb;
