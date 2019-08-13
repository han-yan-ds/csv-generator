const fs = require('fs');
const path = require('path');
const csvSubfolder = 'csv';

var __convertJSONtoCSV = function(json) {
  //actually do the parsing, write later
}

var convertJSONtoCSV = function(json) {
  return new Promise(function(resolve, reject) {
    resolve(
      "If this appears inside a file, writing to file works!!" //TESTING
    );
  });
};

var makeCSVfile = function(string, filename, res) {
  let filePath = path.join(__dirname, csvSubfolder, filename);
  fs.writeFile(filePath, string, 'utf8', function(err, data) {
    if (err) { console.log('fs.writeFile error', err); }
  });
}


module.exports.convertJSONtoCSV = convertJSONtoCSV;
module.exports.makeCSVfile = makeCSVfile;