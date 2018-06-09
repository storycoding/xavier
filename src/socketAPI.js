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

	publish: function(message, done) {
		socket.emit('publish', message);

		socket.on('broadcast', (response) => {
			done(response);
		});
	},

	getUserInfo: function(credentials, done) {
		socket.emit('getUserInfo', credentials);

		socket.on('sendUserInfo', (response) => {
			done(response);
		});
	},

	// setup getHistory
	getHistory: function(users, done) {
		socket.emit('getHistory', users);

		socket.on('sendHistory', (response) => {
			done(response);
		});
	}


	// setup sendMessage

	// setup sendWriting

	// setup getWriting
}

module.exports = { socketAPI : socketAPI }; 