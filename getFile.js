//////////////////////////////////////////////////////////////

// -------- Easy download dependency with nodejs ---------- //

var download = require('./download-helper.js');

// ---------- Specify download and save routes ------------ //

var request_url = 'http://www.google.com';
var write_path  = './output.html'; 

download(request_url, write_path, function(){

// ---  Callback is executed when file is saved on disk --- //

});

//////////////////////////////////////////////////////////////