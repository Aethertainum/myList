var mongoose = require('mongoose');

var testSchema = new mongoose.Schema({
  name: { type: String, required: true },
  number: { type: Number, required: true }
});

module.exports = mongoose.model('Test',testSchema); 
