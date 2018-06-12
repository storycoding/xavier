const io = require('socket.io')()
const { socketAPI } = require('../src/socketAPI.js')

const db = require('../src/queries.js')

const port = process.env.port || 8000

let usedSockets = 0

// for unit testing between server and client
// const { auth, history } = require('../test/fakeData.js')

io.on('connection', (client) => {
	let addedUser = false

	client.on('login', (credentials) => {
		console.log(`${credentials.email} is trying to connect to the chat with credentials: `, credentials)

		if (addedUser) {
			client.emit('login denied', 'already connected')
			console.log(`${credentials.email} failed to connect: already connected`)
			return
		}

		else {
			
			credentials.hash = 'hash'  // get real hash from bcrypt <--------------

			db.selectAccount(credentials, (account) => {
				console.log('account from selectAccount: ', account)

				if(account.length === 0) {
					console.log('account verification failed - invalid credentials: ', credentials)
					client.emit('login denied', 'wrong email or password')
					return
				}

				client.emit('login approved', account[0])

				client.account_id = account[0].id
				client.name = account[0].name

				addedUser = true
				usedSockets ++

				console.log(`${credentials.email} connected to the chat as: ${account[0].name}`)
				

				// get all data from DB and send it to the client
				db.selectConnections( client.account_id, (contacts) => {
					console.log('data retrieved from selectConnections: ', contacts)
					client.emit('broadcast contacts', contacts)		
				})



			})
		}
	})


	client.on('get contacts', () => {
		db.selectConnections( client.account_id, (contacts) => {
			console.log('data retrieved from selectConnections: ', contacts)

			client.emit('broadcast contacts', contacts)		
		})
	})


	client.on('get history', (users) => {
		console.log('client get history users: ', users)
		// limit to the latest 20 messages
		db.selectMessages(users.publisher_id, users.subscriber_id, (history) => {
				console.log('data retrieved from get history: ', history)
				client.emit('broadcast history', history)
			})

	})


	client.on('send message', (message) => {
		console.log(`message sent by ${client.name}: `, message)


		db.insertMessage(message, () => {

			// test
			db.selectMessages(message.publisher_id, message.subscriber_id, (history) => {
				console.log( 'message being broadcast by user: ', message)
				client.emit('broadcast history', history)  // needs optimizing
			})
		})
	})


	client.on('send input', (input) => {
		console.log('send input content: ', input.content)

		// add message to the database
			// using message.publisher.id as the publisher_id

		// choose:
			// trigger history update for all users (slow)
			// update only the the published message
				// only trigger history update when chat loads

		client.emit('broadcast input', input)
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