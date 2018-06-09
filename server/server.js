const io = require('socket.io')();
const socketAPI = require('../src/socketAPI.js').socketAPI;

const port = process.env.port || 8000;

let connections = 0;


let fakeAuth = {
	'rob@gmail.com' : {
		name: 'Rob',
		email: 'rob@gmail.com',
		password: 'password',
		contacts: ["Laura"]
	},

	'laura@gmail.com' : {
		name: 'Laura',
		email: 'laura@gmail.com',
		password: 'password',
		contacts: ["Rob"]
	},

	'distracted@gmail.com' : {
		name: 'Distracted',
		email: 'distracted@gmail.com',
		password: 'password',
		contacts: []
	},

	'forgetful@gmail.com' : {
		name: 'Forgetful',
		email: 'forgetful@gmail.com',
		password: 'password',
		contacts: []
	}
};

io.on('connection', (client) => {
	let addedUser = false;

	client.on('login', (credentials) => {
		const { email, password } = credentials;

		console.log(`${email} is trying to connect to the chat with password: ${password}`);

		if (addedUser) {
			client.emit('login response', 'already connected');
			console.log(`${email} failed to connect`);
			return;
		}

		else if (!password || password.length < 1) {
			client.emit('login response', 'no password');
			console.log(`${email} failed to connect`);
			return;
		}

		// replace fakeAuth with call to database
		else if( fakeAuth[email].password !== password ) {
			client.emit('login response', 'wrong password');
			console.log(`${email} failed to connect`);
			return;
		}

		else {
			client.email = email;
			connections ++;
			addedUser = true;
			console.log(`${client.email} connected to the chat`);
			client.emit('login response', 'success');
			return;
		}
	});

	client.on('getUserInfo', (credentials) => {
		// check credentials
			// send object
				// name, email, contacts

			// placeholder
			client.emit('sendUserInfo', {
				name : "Rob",
				email : "rob@gmail.com",
				contacts : ["Laura"]
			});
	});

	// setup rooms

	// setup getHistory

	// setup sendMessage
	client.on('publish', (message) => {
		console.log(message.content);
		io.emit('broadcast', {
			publisher: message.publisher,
			content: message.content
		});
	})

	// setup sendWriting

	// setup getWriting

	client.on('disconnect', () => {
		console.log(`${client.email} disconnected from the chat`);
    if (addedUser) { connections -- }
  });

});




io.listen(port);
console.log('listening on port ', port);