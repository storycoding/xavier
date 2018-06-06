const io = require('socket.io')();
const socketAPI = require('./socketAPI.js').socketAPI;

const port = process.env.port || 8000;

let connections = 0;

let fakeAuth = {
	Rob : "password",
	Laura : "password",
	Distracted : "password",
	Forgetful : "password",
};

io.on('connection', (client) => {
	let addedUser = false;

	client.on('login', (credentials) => {
		const { username, password } = credentials;

		console.log(`${username} is trying to connect to the chat with password: ${password}`);

		if (addedUser) {
			client.emit('login response', 'already connected');
			console.log(`${username} failed to connect`);
			return;
		}

		else if (!password || password.length < 1) {
			client.emit('login response', 'no password');
			console.log(`${username} failed to connect`);
			return;
		}

		// replace fakeAuth with call to database
		else if( fakeAuth[username] !== password ) {
			client.emit('login response', 'wrong password');
			console.log(`${username} failed to connect`);
			return;
		}

		else {
			client.username = username;
			connections ++;
			addedUser = true;
			console.log(`${client.username} connected to the chat`);
			client.emit('login response', 'success');
			return;
		}

		
	});

	// setup rooms

	// setup getHistory

	// setup sendMessage
	client.on('send', (message) => {
		console.log(message.content);
		io.emit('broadcast', {
			publisher: message.publisher,
			content: message.content
		});
	})

	// setup sendWriting

	// setup getWriting

	client.on('disconnect', () => {
		console.log(`${client.username} disconnected from the chat`);
    if (addedUser) { connections -- }
  });

});




io.listen(port);
console.log('listening on port ', port);