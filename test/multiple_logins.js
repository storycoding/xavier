const io = require('socket.io-client');
const IP = process.env.url || 'http://localhost:';
const PORT = process.env.port || '8000';
const URL = IP + PORT;
const socket1 = io(URL, { forceNew: true });
const socket2 = io(URL, { forceNew: true });

const socketAPI1 = {
	connect: function(credentials, done) {

		socket1.emit('login', credentials);

		socket1.on('login response', (response) => {
			if (response === "success") { done() }
			else { done(new Error(response)) }
		});
	}
}

const socketAPI2 = {
	connect: function(credentials, done) {

		socket2.emit('login', credentials);

		socket2.on('login response', (response) => {
			if (response === "success") { done() }
			else { done(new Error(response)) }
		});
	}
}

//============================//
//===== connection tests =====//
//============================//

const log = console.log;

socketAPI1.connect({
		username : "Rob",
		password : "password"
	}, log);


socketAPI2.connect({
		username : "Laura",
		password : "password"
	}, log);
