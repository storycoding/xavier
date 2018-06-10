const openSocket = require('socket.io-client')
const socket = openSocket('http://localhost:8000')

const socketAPI = {
	
	connect: function(credentials, cb) {
		socket.emit('login', credentials)

		socket.on('login response', (loginInfo) => {
			// handle loginInfo === 'badCredentials'

			// if login is good
				// register all socket.on actions here

			cb(loginInfo)
		})
	},

	sendMessage: function(message, cb) {
		socket.emit('sendMessage', message)

		socket.on('broadcastMessage', (response) => {
			cb(response)
		})
	},

	getMessages: function(users, cb) {
		socket.emit('getMessages', users)

		socket.on('sendMessages', (response) => {
			cb(response)
		})
	},

	// input should have publisher_id and content
	sendInput: function(input, cb) {
		socket.emit('sendInput', input)

		// the input is pinged to the socket
			// sends subscriber_id of the contact as an argument

		// to test own input from server	
		socket.on('broadcastInput', (response) => {
			cb(response)
		})
	}
}

module.exports = { socketAPI : socketAPI } 