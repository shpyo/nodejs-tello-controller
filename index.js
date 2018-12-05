// Import the dgram lib so that we can use UDP
var dgram = require('dgram');

// Create a Tello "class".
var Tello = function() {
    // Define some constants.
    // @see https://dl-cdn.ryzerobotics.com/downloads/tello/0228/Tello+SDK+Readme.pdf
	var PORT = 8889;
	var HOST = '192.168.10.1';
	var SOCKET_OPTIONS = {
		type: 'udp4'
	};

    // "Private" variable with socket reference.
	var _telloServer = null;

    // Creates connection to the Tello drone.
	this.connect = function() {
		_telloServer = dgram.createSocket(SOCKET_OPTIONS, function(msg) {
			console.log('Response from Tello:', msg.toString());
		});
	};

    // Closes connection.
	this.closeConnection = function() {
		_telloServer.close(function(msg) {
			console.log('Connection closed');
		});
	}

    // Sends text command to the Tello drone.
	this.send = function(command) {
		var message = new Buffer(command);
		_telloServer.send(message, 0, message.length, PORT, HOST, function(err) {
			if (err) {
				console.error(err, command);
			}
		});
	}

	/**
	 * `direction` can be one of:
	 * l = (left)
	 * r = (right)
	 * f = (forward)
	 * b = (back)
	 * bl = (back/left) rb = (back/right)
	 * fl = (front/left) fr = (front/right)
	 */
	this.flip = function(direction) {
		this.send('flip ' + direction);
	}
};

exports.default = Tello;