const openSocket = require('socket.io-client');
const socket = openSocket('http://localhost:8000');

const socketAPI = {
	
	connect: function(username) {
		socket.emit('login', JSON.stringify(username));
		socket.on('login response', (response) => console.log(response));
	}

	// setup getHistory

	// setup sendMessage

	// setup sendWriting

	// setup getWriting
}

module.exports = { socketAPI : socketAPI }; 