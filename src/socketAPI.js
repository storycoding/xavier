const openSocket = require('socket.io-client');
const socket = openSocket('http://localhost:8000');

const socketAPI = {
	
	connect: function(credentials, done) {

		socket.emit('login', credentials);

		socket.on('login response', (response) => {
			if (response === "success") { done() }
			else { done(new Error(response)) }
		});
	},

	send: function(message, cb) {
		socket.emit('send', message);

		socket.on('broadcast', (response) => {
			cb(response);
		});
	}

	// setup getHistory

	// setup sendMessage

	// setup sendWriting

	// setup getWriting
}

module.exports = { socketAPI : socketAPI }; 