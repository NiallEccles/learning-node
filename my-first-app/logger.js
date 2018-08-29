
var url = 'http://example.com/';

function log(message){
    //Send HTTP request
    console.log(message);
}

// This will export an object
// module.exports.log = log;

//This will just export the function
module.exports = log;

//Can also use
// exports.log = log;