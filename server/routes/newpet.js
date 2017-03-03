var express = require('express');
var router = express.Router();
var pg = require('pg');
var config = {
  database: 'phi',
  host: 'localhost',
  port: 5432,
  max: 10,
  idleTimeoutMillis: 30000
};

var pool = new pg.Pool(config);

router.post('/new', function(req, res){
  var newPet = req.body;

  pool.connect(function(errorConnectingToDatabase, client, done){
    if(errorConnectingToDatabase) {
      console.log('Error connecting to database: ', errorConnectingToDatabase);
      res.sendStatus(500);
    } else {
      client.query('INSERT INTO pets (name, breed, color) VALUES ($1, $2, $3);',
        [newPet.name, newPet.breed, newPet.color], //client.js & index should correspond to each othor
        function(errorMakingQuery, result){
          done();
          if(errorMakingQuery) {
            console.log('Error making the database query: ', errorMakingQuery);
            res.sendStatus(500);
          } else {
            res.sendStatus(201);
          }
        });
    }
  });
});


router.put('/save/:id', function(req, res){
  var petId = req.params.id;
  var petObject = req.body;
  console.log(req.body);
  pool.connect(function(errorConnectingToDatabase, client, done){
    if(errorConnectingToDatabase) {
      console.log('Error connecting to database: ', errorConnectingToDatabase);
      res.sendStatus(500);
    } else {
      client.query('UPDATE pets SET name=$1, breed=$2, color=$3;',
        [petObject.name, petObject.breed, petObject.color, petId],
        function(errorMakingQuery, result){
          done();
          if(errorMakingQuery) {
            console.log('Error making the database query: ', errorMakingQuery);
            res.sendStatus(500);
          } else {
            res.sendStatus(202);
          }
        });
    }
  });
});

router.delete('/delete/:id', function(req, res){
  var petId = req.params.id;
  console.log('pet id to delete', petId);
//connecting to and deleting row from db
  pool.connect(function(errorConnectingToDatabase, client, done){
    if(errorConnectingToDatabase) {
      console.log('Error connecting to database: ', errorConnectingToDatabase);
      res.sendStatus(500);
    } else {
      client.query('DELETE FROM pets WHERE id=$1;', //SQL query
        [bookId],
        function(errorMakingQuery, result){ //function that runs after query takes place
          done();
          if(errorMakingQuery) {
            console.log('Error making the database query: ', errorMakingQuery);
            res.sendStatus(500);
          } else {
            res.sendStatus(202);
          }
        });
    }
  });
});

router.get('/getpet', function(req, res){
  // This will be replaced with a SELECT statement to SQL
  pool.connect(function(errorConnectingToDatabase, client, done){
    if(errorConnectingToDatabase) {
      // There was an error connecting to the database
      console.log('Error connecting to database: ', errorConnectingToDatabase);
      res.sendStatus(500);
    } else {
      client.query('SELECT * FROM pets JOIN owners ON owners.id=pets.owner_id;', function(errorMakingQuery, result){
        done();
        if(errorMakingQuery) {
          console.log('Error making the database query: ', errorMakingQuery);
          res.sendStatus(500);
        } else {
          res.send(result.rows);
          console.log(result.rows);
        }
      }); // end client.query
    }
  }); // end pool.connect
}); // end router.get

module.exports = router;
