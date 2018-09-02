var http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World!');
}).listen(8080);
console.log('Listening on port 8080');
const log = require('./logger');

log('Hello World');


//Logging the memory of the device

const os = require('os');

var totalMemory = os.totalmem();
var freeMemory = os.freemem();

console.log(`Total Memory: ${totalMemory}`);
console.log(`Free Memory: ${freeMemory}`);

//Logging the current files in directory

const fs =  require('fs');
const files = fs.readdirSync('./');

console.log(files);