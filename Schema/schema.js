const mongoose = require('mongoose');

//The Schema is the structure of the database.
const schema = new mongoose.Schema({
    name:{
        type: String,
        required: [true, 'Please enter a value'],
        trim: true,
        maxLength: [20, 'The Length cannot exceed 20']
    },
    completed:{
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model('Tasks',schema);