var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var pg = require('pg');
var newPet = require('./routes/newpet.js')
var port = 5000;

app.use(express.static('server/public'));

app.use(bodyParser.urlencoded({extended: true}));

app.use('/newpet', newPet); 

app.listen(port, function(){
  console.log('listening on port:', port);
});
