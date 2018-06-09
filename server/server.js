const io = require('socket.io')()
const { socketAPI } = require('../src/socketAPI.js')

const { getMessages } = require('/queries.js')

const port = process.env.port || 8000

let connections = 0

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
}

// result of select all from messages + sort by date
let fakeHistory = [
	{ 
            publisher: 2,
            content: "How are you?"
          },
          {
            publisher: 1,
            content: "All good in the hood. You?"
          },
          {
            publisher: 2,
            content: "Peachy!"
          }
]

io.on('connection', (client) => {
	let addedUser = false

	client.on('login', (credentials) => {
		const { email, password } = credentials

		console.log(`${email} is trying to connect to the chat with password: ${password}`)

		if (addedUser) {
			client.emit('login response', 'already connected')
			console.log(`${email} failed to connect`)
			return
		}

		else if (!password || password.length < 1) {
			client.emit('login response', 'no password')
			console.log(`${email} failed to connect`)
			return
		}

		// replace fakeAuth with call to database
		else if( fakeAuth[email].password !== password ) {
			client.emit('login response', 'wrong password')
			console.log(`${email} failed to connect`)
			return
		}

		else {
			// check database for client.name & client.id
				const data = {
					publisher: {
						name: 'Rob',
						id: 2
					},

					contacts : ['Laura']
				}

			client.name = data.publisher.name
			client.id = data.publisher.id

			console.log(`${email} connected to the chat as ${client.name}`)

			connections ++
			addedUser = true

			client.emit('login response', data)
			return
		}
	})

	client.on('getUserInfo', (credentials) => {
		// check credentials against database
			// get name, id, contacts
				// send them to the client

			// placeholder
			client.emit('sendUserInfo', {
				name : "Rob",
				id: 2,
				email : "rob@gmail.com",
				contacts : ["Laura"]
			})
	})

	// setup rooms

	// setup getHistory
	client.on('getHistory', (users) => {
		//const { userA, userB } = users
		// query database for messages
			// from userA.id to userB.id and vice versa
		io.emit('sendHistory', fakeHistory)
	})

	// setup sendMessage
	client.on('publish', (message) => {
		console.log(message.content)

		// add message to the database
			// using message.publisher.id as the publisher_id

		// choose:
			// trigger history update for all users (slow)
			// update only the the published message
				// only trigger history update when chat loads

		io.emit('broadcast', {
			publisher: message.publisher,
			content: message.content
		})
	})

	// setup sendWriting

	// setup getWriting

	client.on('disconnect', () => {
		console.log(`${client.name} disconnected from the chat`)
    if (addedUser) { connections -- }
  })

})


io.listen(port)
console.log('listening on port ', port)