////////////////////////////////////////////////////////////////////////////////

// -------------------------- Load Dependencies ----------------------------- //

var fs = require('fs');
var http = require('http');
var https = require('https');

// ------------------------- Define Export Module --------------------------- //

module.exports = downloadFile = function(request_path, write_path, cb) {

  var protocol = /^https/.test(request_path) ? https : http;

// ------------------- Create a write stream to disk ------------------------ //

  var file = fs.createWriteStream(write_path);

// -------------------------- Make Request ---------------------------------- //

  var request = protocol.get(request_path, function(response) {

// ----------------- Pipe the response to the local file -------------------- //

    response.pipe(file);
    file.on('finish', function() {

// ----- Once finished downloading, close the write stream and callback ----- //

      file.close();
      console.log('file downloaded from ' + request_path + ' to ' + write_path);
      cb();

    });
  });
};

////////////////////////////////////////////////////////////////////////////////