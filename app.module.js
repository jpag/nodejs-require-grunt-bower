var events = require('events');

var variable = 0

var moduleName = function(config) {

}


moduleName.prototype = new events.EventEmitter;

moduleName.prototype.somefunc = function(param){
	variable = param;

	var self = this;
	// dispatch to app.js
	self.emit('event-emitted', variable);
}


module.exports = moduleName;

