const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const studentsSchema = new Schema({
 name:  String, 
 first_name: String,
 email:   String,
 
});

module.exports = mongoose.model('Student', studentsSchema);
