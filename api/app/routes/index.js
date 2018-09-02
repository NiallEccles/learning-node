const nodeRoutes = require('./note_routes');

module.exports = function(app, db){
    nodeRoutes(app, db);
}