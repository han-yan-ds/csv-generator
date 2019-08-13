const express = require('express');
const bodyParser = require('body-parser');
const fileOperations = require('./fileOperations');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function(req, res, next) {
  console.log(req.body);
});

app.post('/', function(req, res, next) { // for submitting the JSON text
  fileOperations.convertJSONtoCSV(req.body.jsontext)
  .then(function(text) {
    fileOperations.makeCSVfile(text, `${String(Date.now())}.csv`, res);
  })
  .then(function(){
    res.send();
    next();
  })
});
    
    
app.listen(port, ()=>{console.log(`Express server listening on port ${port}`)})
// TO START SERVER:  nodemon server/server.js