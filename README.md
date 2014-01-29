# node-download

Author: Adam Cmiel
Date: Jan 29, 2014

### Edit the request_url and write_path in getFile.js

    var request_url = 'http://www.foo.com';
    var write_path  = './bar.baz'; 

### To download:

On the command line: 

    node getFile.js


Expected output:

    file downloaded from http://www.foo.com to ./bar.baz