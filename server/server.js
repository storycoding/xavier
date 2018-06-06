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

		console.log(`${client.username} connected to the chat`);

		client.emit('login response', `you are now connected to the socket as ${client.username}.`);
	});

	// setup getHistory

	// setup sendMessage

	// setup sendWriting

	// setup getWriting

	client.on('disconnect', () => {
		console.log(`${client.username} disconnected from the chat`);
    if (addedUser) { connections -- }
  });

};



io.listen(port);
console.log('listening on port ', port);