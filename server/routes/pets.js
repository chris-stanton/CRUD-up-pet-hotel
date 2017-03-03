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


// new pet send to to database
router.post('/new', function(req, res){
  var newPet = req.body;
  pool.connect(function(errorConnectingToDatabase, client, done){
    if(errorConnectingToDatabase) {
      console.log('Error connecting to database: ', errorConnectingToDatabase);
      res.sendStatus(500);
    } else {
      client.query('INSERT INTO pets (name, breed, color, checkedin, active) VALUES ($1, $2, $3, $4, $5);',
        [newPet.name, newPet.breed, newPet.color, true, true], //client.js & index should correspond to each othor
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

// update pet input values to database
router.put('/save/:id', function(req, res){
  var petId = req.params.id;
  var petObject = req.body;
  console.log(req.body);
  pool.connect(function(errorConnectingToDatabase, client, done){
    if(errorConnectingToDatabase) {
      console.log('Error connecting to database: ', errorConnectingToDatabase);
      res.sendStatus(500);
    } else {
      client.query('UPDATE pets SET name=$1, breed=$2, color=$3 WHERE pets.id=$4;',
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

// delete pet from database
router.delete('/delete/:id', function(req, res){
  var petId = req.params.id;
    console.log('pet id to delete', petId);
  //connecting to and deleting row from db
    pool.connect(function(errorConnectingToDatabase, client, done){
      if(errorConnectingToDatabase) {
        console.log('Error connecting to database: ', errorConnectingToDatabase);
        res.sendStatus(500);
      } else {
        client.query('DELETE FROM pets WHERE id=$1;', [petId], function(errorMakingQuery, result){ //function that runs after query takes place
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

// fetch pet info from database -- returns array of all pets, owners and ids
router.get('/fetch', function(req, res){
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


// will be checked in  post function
router.post('/checkin/:id', function(req, res){
  var petId = req.params.id;
  console.log(req.body.petId);
  var checkedInBoolean = req.body.petId;
  //connecting to and deleting row from db
    pool.connect(function(errorConnectingToDatabase, client, done){
      if(errorConnectingToDatabase) {
        console.log('Error connecting to database: ', errorConnectingToDatabase);
        res.sendStatus(500);
      } else {
        client.query('UPDATE pets SET checkedin = $1;', [checkedInBoolean], function(errorMakingQuery, result){ //function that runs after query takes place
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

module.exports = router;
