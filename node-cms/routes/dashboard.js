const restify = require('restify');

module.exports = server => {
    //Get Posts
    server.get('/', restify.plugins.serveStatic({
        directory: './views',
        file: 'index.html'
      })
    );
}