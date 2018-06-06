const io = require('socket.io')();
const socketAPI = require('./socketAPI.js').socketAPI;

const port = process.env.port || 8000;

let connections = 0;

let fakeAuth = {
	Rob : "password",
	Laura : "password",
	Distracted : "password",
	Forgetful : "password"
};

io.on('connection', (client) => {
	let addedUser = false;

	client.on('login', (credentials) => {
		if (addedUser) return;
		console.log(`${credentials.username} is trying to connect to the chat`);

		const { username, password} = credentials;

		// replace fakeAuth with call to database
		if( fakeAuth[username] !== password ) {
			client.emit('login response', 'wrong password');
			return;
		}

		client.username = credentials.username;
		connections ++;
		addedUser = true;

		console.log(`${client.username} connected to the chat`);

		client.emit('login response', 'success');
	});

	// setup getHistory

	// setup sendMessage

	// setup sendWriting

	// setup getWriting

	client.on('disconnect', () => {
		console.log(`${client.username} disconnected from the chat`);
    if (addedUser) { connections -- }
  });

});



io.listen(port);
console.log('listening on port ', port);