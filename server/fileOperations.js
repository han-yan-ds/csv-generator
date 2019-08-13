const fs = require('fs');
const path = require('path');
const csvSubfolder = 'csv';

var __convertJSONtoCSV = function(json) {

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
  fs.writeFile(filePath, string, 'utf8', function(err) {
    if (err) { console.log('fs.writeFile error', err); }
    else {
      res.download(path.join(__dirname, csvSubfolder, filename), function(err) {
        if (err) { console.log('res.attachment error', err); }
      });
    }
  });
}


module.exports.convertJSONtoCSV = convertJSONtoCSV;
module.exports.makeCSVfile = makeCSVfile;