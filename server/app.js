var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var pg = require('pg');
var pets = require('./routes/pets');
<<<<<<< HEAD
var port = 5000;
=======
var port = 5000;
>>>>>>> development

app.use(express.static('server/public'));

app.use(bodyParser.urlencoded({extended: true}));

app.use('/pets', pets);

app.listen(port, function(){
  console.log('listening on port:', port);
});
