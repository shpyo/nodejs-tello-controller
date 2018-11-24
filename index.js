var dgram = require('dgram');

var Tello = function() {
	var PORT = 8889;
	var HOST = '192.168.10.1';
	var SOCKET_OPTIONS = {
		type: 'udp4'
	};

	var _telloServer = null;

	this.connect = function() {
		_telloServer = dgram.createSocket(SOCKET_OPTIONS, function(msg) {
			console.log('Response from Tello:', msg.toString());
		});
	};

	this.closeConnection = function() {
		_telloServer.close(function(msg) {
			console.log('Connection closed');
		});
	}

	this.send = function(command) {
		var message = new Buffer(command);
		_telloServer.send(message, 0, message.length, PORT, HOST, function(err) {
			if (err) {
				console.error(err, command);
			}
		});
	}
};

exports.default = Tello;