const mongoose = require('mongoose');

const connectdB = (url) => {
    //Never use colon in the .env file while defining the variables, leads to unresolved errors.
   mongoose.connect(url, { 
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true})
  .then(() => {
    console.log('Connected to the database');
    // Your code here
  })
  .catch(error => {
    console.error('Error connecting to the database:', error.message);
  });
}


module.exports = connectdB;