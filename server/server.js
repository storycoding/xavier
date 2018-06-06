const io = require('socket.io')();
const socketAPI = require('./socketAPI.js').socketAPI;

const port = process.env.port || 8000;

let connections = 0;

// setup server cache

io.on('connection', (client) => {
	let addedUser = false;

	client.on('login', (username) => {
		if (addedUser) return;

		client.username = username;
		connections ++;
		addedUser = true;

		client.emit('login response', `you are now connected to the socket as ${client.username}.`);
	});

	// setup getHistory

	// setup sendMessage

	// setup sendWriting

	// setup getWriting

	// setup disconnect

};



io.listen(port);
console.log('listening on port ', port);