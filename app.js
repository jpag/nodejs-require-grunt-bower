var env = require('./app.env');
var config = require('./app.config')[env];
var express = require('express');

function trace(str) {
	console.log(str);
}

// Instantiate the server with express
var app = express();

// var parser = require('body-parser')({limit:'5mb'});
// 	app.use(parser);
// var server = require('http').createServer(app);	


app.use(express.static(config.root + 'public'));
// Start the server by listening on <port>
var port = config.port || 3000;

//server.listen(port);
//exports = module.exports = server;
app.listen(port);
trace(' - started on port: ' + port);
trace(' - environment: ' + env);
