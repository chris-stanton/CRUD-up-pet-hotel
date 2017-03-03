var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var pg = require('pg');
<<<<<<< HEAD
var newPet = require('./routes/newpet.js');
var newCustomerName = require('./routes/newCustomerName.js');
var port = 5000;
=======
var pets = require('./routes/pets');
var port = 5000;
>>>>>>> 9568063364b17208462363abfac7535222daa429

app.use(express.static('server/public'));

app.use(bodyParser.urlencoded({extended: true}));

<<<<<<< HEAD
app.use('/customer', newCustomerName);

=======
app.use('/pets', pets);
>>>>>>> 9568063364b17208462363abfac7535222daa429

app.listen(port, function(){
  console.log('listening on port:', port);
});
