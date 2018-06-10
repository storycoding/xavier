const io = require('socket.io')()
const { socketAPI } = require('../src/socketAPI.js')

const db = require('../src/queries.js')

const port = process.env.port || 8000

let usedSockets = 0

// for unit testing between server and client
// const { fakeAuth, fakeHistory } = require('./fakeData.js')

io.on('connection', (client) => {
	let addedUser = false

	client.on('login', (credentials) => {
		console.log(`${credentials.email} is trying to connect to the chat with credentials: `, credentials)

		if (addedUser) {
			client.emit('login response', 'already connected')
			console.log(`${credentials.email} failed to connect: already connected`)
			return
		}

		else {
			// get real hash from bcrypt
			credentials.hash = 'hash'

			db.selectAccount(credentials, (account) => {
				console.log('account from selectAccount: ', account)

				if(account.length === 0) {
					console.log('account verification failed - invalid credentials: ', credentials)
					client.emit('login response', 'badCredentials')
					return
				}

				db.selectConnections( account[0].id, (contacts) => {
					console.log('data retrieved from selectConnections: ', contacts)
					

					const loginInfo = {
						publisher {
							name: account[0].name,
							id: account[0].id
						},
						contacts: contacts
					}

					client.emit('login response', loginInfo)
					console.log(`${credentials.email} connected to the chat as: ${account[0].name}`)

					// do I really need all these?
					client.id = account[0].id // overwrites the default client.id from the socket
					client.name = account[0].name
					client.email = account[0].email

					usedSockets ++
					addedUser = true
				})
			})
		}
	})

	client.on('getMessages', (users) => {

		// limit to the latest 20 messages
		db.selectMessages(users.publisher_id, users.subscriber_id, (messages) => {
				console.log(messages)
				io.emit('sendMessages', messages)
			})

	})

	client.on('sendMessage', (message) => {
		console.log(`message sent by ${client.name}: `, message)


		db.insertMessage(message, () => {

			// just for testing
			db.selectMessages(message.publisher_id, message.subscriber_id, (messages) => {
				console.log(messages)
			})
		})

		// update only the the published message
			// only trigger history update when chat loads

		io.emit('broadcastMessage', message)
	})

	// setup sendWriting
	client.on('sendInput', (input) => {
		console.log('sendInput content: ', input.content)

		// add message to the database
			// using message.publisher.id as the publisher_id

		// choose:
			// trigger history update for all users (slow)
			// update only the the published message
				// only trigger history update when chat loads

		io.emit('broadcastInput', input)
	})

	// todo: getWriting

	// todo: rooms

	client.on('disconnect', () => {
		console.log(`${client.name} disconnected from the chat`)
    if (addedUser) { usedSockets -- }
  })

})


io.listen(port)
console.log('listening on port ', port)