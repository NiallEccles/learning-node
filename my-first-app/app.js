//Usfule for when exporting an object
// const logger  = require('./logger');

// logger.log('Hello World');

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