const openSocket = require('socket.io-client');
const socket = openSocket('http://localhost:8000');

const socketAPI = {
	
	connect: function(credentials, done) {

		socket.emit('login', credentials);

		socket.on('login response', (response) => {
			if (response === "success") {
				console.log("login response from server: ", response)
				done();
			}
			else { done(new Error(response)) }
		});
	},

	publish: function(message, cb) {
		socket.emit('publish', message);

		socket.on('broadcast', (response) => {
			cb(response);
		});
	},

	getUserInfo: function(credentials, done) {
		socket.emit('getUserInfo', credentials);

		socket.on('sendUserInfo', (response) => {
			done(response);
		});
	}

	// setup getHistory

	// setup sendMessage

	// setup sendWriting

	// setup getWriting
}

module.exports = { socketAPI : socketAPI }; 