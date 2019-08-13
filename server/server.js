const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const fileOperations = require('./fileOperations');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', function(req, res, next) {
  console.log(req.body);
});

app.post('/', function(req, res, next) { // for submitting the JSON text
  let filename = `${String(Date.now())}.csv`;
  fileOperations.convertJSONtoCSV(req.body.jsontext)
  .then(function(text) {
    fileOperations.makeCSVfile(text, filename, res);
  })
  .then(function(){
    res.attachment(path.join(__dirname, 'csv',`${filename}`));
    res.send();
    next();
  })
});
    
    
app.listen(port, ()=>{console.log(`Express server listening on port ${port}`)})
// TO START SERVER:  nodemon server/server.js