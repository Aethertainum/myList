// Set up our environment
var express = require('express');
var app = express();
var port = process.env.PORT || 1337;

// Database
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/myList');

// Middleware
var bodyParser = require('body-parser');
app.use(express.static(__dirname + '/../client'));
app.use(bodyParser.json());

// API endpoints
var handler = require('./handlers/handlers');

app.post('/contacts', handler.addContact);

// Start server
app.listen(port, function() {
  console.log('Listening on: ' + port); 
});



